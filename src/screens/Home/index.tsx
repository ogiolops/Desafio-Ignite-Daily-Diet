import { useState, useCallback } from 'react'
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { SectionList, Text } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Container, Heading, SectionListContainer} from "./styles";
import { Header } from "../../components/Header";
import { Percent } from "../../components/Percent";
import { Button } from "../../components/Button";
import { CardMeals } from "../../components/CardMeal";
import { mealsGetAll } from '@storage/meal/mealsGetAll';
import { MEAL_COLLECTION } from '@storage/storageConfig';
import { MealDTO } from 'src/dtos/MealDTO';
import { getMealsByDate } from '@storage/meal/getMealsByDate';

export type DietVariant = 'inDiet' | 'outDiet';

export type Meal = {
  id: string;
  title: string;
  date: string;
  description: string;
  diet: boolean;
};

export interface DataProps {
  title: string;
  data: MealDTO[];
}


export function Home(){
  const [diet, setDiet] = useState<DietVariant>('inDiet');
  const [ percentMeal, setPercentMeals ] = useState(0);
  const [meals, setMeals] = useState<DataProps[]>([]);
  const dietParamiter = 49;
  const navigation = useNavigation();

  function handleStatistic() {
    navigation.navigate('statistics', { percentMeal });
  }

  function handleNewMeal() {
    navigation.navigate('newmeal')
  }

  function handleMeal() {
    navigation.navigate('meal')
  }

  async function insideMealPercent() {
    const data = await mealsGetAll()
    const insideMeals = data.map(function(e) { return e.inDiet})
    const totalMealsDiet = (insideMeals.length)
    const mealsInsideDiet = insideMeals.filter((e) => e === true )
    const totalMealsinDiet = mealsInsideDiet.length
    const calcPercentMeals = (totalMealsinDiet / totalMealsDiet * 100).toFixed()

    setPercentMeals(parseInt(calcPercentMeals))
  }

  async function fetchMeals(){
    try {
      const data = await mealsGetAll()

      const mealsByDate = getMealsByDate(data)

      setMeals(mealsByDate.sort().reverse())

    } catch (error) {
      console.log(error)
    }
  }

  useFocusEffect(useCallback(() => {
    fetchMeals();
    insideMealPercent();
  }, []));

  return(
    <Container>
      <Header/>
      <Percent 
        Percentmeals={percentMeal}
        variant={ percentMeal <= dietParamiter ? 'outDiet' : 'inDiet' }
        icon="north-east"
        SizeBox='MEDIUM'
        onPress={ handleStatistic }
      /> 
      
      <Text style={{paddingTop: 20, paddingBottom: 10,}} >Refeições</Text>

      <Button
        type='PRIMARY'
        icon="add"
        buttonName="Nova refeição"
        onPress={ handleNewMeal }
      />

      <SectionListContainer>
      <SectionList
          sections={meals}
          keyExtractor={(meal) => meal.id}
          renderItem={({item: meal}) => (
          <CardMeals 
            hourMeal = {meal.hour}
            name= {meal.name}
            dietStatus= {meal.inDiet}
            onPress={ handleMeal }
          />
        )}
        renderSectionHeader={({ section: {title} }) => (
          <Heading>{title}</Heading>
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={{flex: 1, textAlign: 'center', justifyContent: 'center', marginTop: 60}} >Poxa, Voce ainda nao possui nenhuma refeiçao!</Text>
        )}

      />
      </SectionListContainer>

    </Container>
  )
}