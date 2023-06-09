import { useState, useCallback } from 'react'
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { SectionList, Text } from 'react-native'

import { Container, Heading, SectionListContainer} from "./styles";
import { Header } from "../../components/Header";
import { Percent } from "../../components/Percent";
import { Button } from "../../components/Button";
import { CardMeals } from "../../components/CardMeal";
import { mealsGetAll } from '@storage/meal/mealsGetAll';
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
};


export function Home(){
  const [diet, setDiet] = useState<DietVariant>('inDiet');
  const [percentMeal, setPercentMeals ] = useState<number | any>(0);
  const [meals, setMeals] = useState<DataProps[]>([]);
  const navigation = useNavigation();

  function handleStatistic() {
    navigation.navigate('statistics', { percentMeal, diet });
  }

  function handleNewMeal() {
    navigation.navigate('newmeal')
  }

  function handleOpenMeal(meal: MealDTO) {
    navigation.navigate('meal', { meal });
  }

  async function fetchMeals(){
    try {
      const data = await mealsGetAll()

      const mealsByDate = getMealsByDate(data)

      setMeals(mealsByDate.sort().reverse())

    } catch (error) {
      console.log('erro FechMeals', error)
    }
  }

  async function insideMealPercent() {
    try {
      const data = await mealsGetAll()
      const insideMeals = data.map(function(e) { return e.inDiet})
      const totalMealsDiet = (insideMeals.length)
      const mealsInsideDiet = insideMeals.filter((e) => e === true )
      const totalMealsinDiet = mealsInsideDiet.length
      let calcPercentMeals = (totalMealsinDiet / totalMealsDiet * 100)
  
      if (isNaN(calcPercentMeals)) calcPercentMeals = 0;
      setPercentMeals((calcPercentMeals).toFixed(2))

    } catch (error) {
      console.log('erro inside percent meals', error)
    }
  }

  function parcentInDietVallue() {
    const percentVariant =  percentMeal >= 49  ? 'inDiet' : 'outDiet';
    setDiet(percentVariant)
  }

  useFocusEffect(useCallback(() => {
    fetchMeals();
    insideMealPercent();
    parcentInDietVallue();
  }, [meals]));


  return(
    <Container>
      <Header/>
      <Percent 
        Percentmeals={percentMeal}
        variant={ diet}
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
            onPress={() => handleOpenMeal(meal) }
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