import { useState, useCallback } from 'react';
import { mealsGetAll } from '@storage/meal/mealsGetAll';
import { Percent } from "../../components/Percent";
import { useFocusEffect, useRoute } from "@react-navigation/native";
import { Backicon } from "../../components/Backicon";
import { Container, StatisticsContent, Title, HeaderStatistics, BoxInfos, NumberStatistics, TextStatistics, BoxesContainer, BoxInfosOn, BoxInfosOff } from "./styles";
import { DietVariant } from "@screens/Home";

type RouteParams = {
  percentMeal: number;
  diet: DietVariant;
}

export function Statistics(){

  const [sequencieInDiet, setSequencieInDiet] = useState(0)
  const [allMealsRegistered, setAllMealsRegistered] = useState(0)
  const [allMealsInsideDiet, setAllMealsInsideDiet] = useState(0)
  const [allMealsOutDiet, setAllMealsOutDiet] = useState(0)

  const route = useRoute();
  const { percentMeal, diet } = route.params as RouteParams;

  
  async function sequenceMealRegistered() {
    try {
      const data = await mealsGetAll()
      data.forEach( data => {
        const nextInDiet = data.inDiet
      })
    } catch (error) {
      console.log(error)
    }
  }

  sequenceMealRegistered();

  async function mealRegistered() {
    try {
      const data = await mealsGetAll()
      const detaDetails = data.map(data => data.id ).length
      setAllMealsRegistered(detaDetails)
    } catch (error) {
      console.log(error)
    }
  }

  async function mealsInDiet() {
    try {
      const data = await mealsGetAll()
      const inDiet = data.filter(data => data.inDiet === true ).length
      setAllMealsInsideDiet(inDiet)
    } catch (error) {
      console.log(error)
    }
  }

  async function mealsOutDiet() {
    try {
      const data = await mealsGetAll()
      const outDiet = data.filter(data => data.inDiet === false ).length
      setAllMealsOutDiet(outDiet)
    } catch (error) {
      console.log(error)
    }
  }

  useFocusEffect(useCallback(() => {
    mealRegistered();
    mealsInDiet();
    mealsOutDiet();
  }, []));



  mealsInDiet()

  return(
    <Container>
      <HeaderStatistics>
        <Percent
            variant={diet}
            Percentmeals={percentMeal}
            SizeBox="LARGE"
        />

        <Backicon 
            icon="arrow-back"
            type={ diet }
        />
      </HeaderStatistics>


      <StatisticsContent>
        <Title>Estatísticas gerais</Title>

        <BoxInfos>
            <NumberStatistics>{sequencieInDiet}</NumberStatistics>
            <TextStatistics>melhor sequência de pratos dentro da dieta</TextStatistics>
        </BoxInfos>

        <BoxInfos>
            <NumberStatistics>{allMealsRegistered}</NumberStatistics>
            <TextStatistics>refeições registradas</TextStatistics>
        </BoxInfos>

        <BoxesContainer>
           <BoxInfosOn>
            <NumberStatistics>{allMealsInsideDiet}</NumberStatistics>
            <TextStatistics>refeições dentro da dieta</TextStatistics>
           </BoxInfosOn>
           <BoxInfosOff>
            <NumberStatistics>{allMealsOutDiet}</NumberStatistics>
            <TextStatistics>refeições fora da dieta</TextStatistics>
           </BoxInfosOff>
        </BoxesContainer>

      </StatisticsContent>
       


    </Container>
  )
}