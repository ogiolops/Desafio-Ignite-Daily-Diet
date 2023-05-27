import { useState } from 'react'
import { useNavigation } from "@react-navigation/native";
import { SectionList, Text } from 'react-native'

import { Container } from "./styles";
import { Header } from "../../components/Header";
import { Percent } from "../../components/Percent";
import { Button } from "../../components/Button";
import { Heading } from "@components/Heading";
import { CardMeals } from "../../components/CardMeal";



export function Home(){

  const [list, setList] = useState([
    {
      title: '24.05.2023',
      data: [
        {
        hourMeal: '15:00',
        mealName: 'Arroz',
        status: false,
        },
        {
          hourMeal: '18:00',
          mealName: 'Pizza',
          status: true,
        },
      ],
    },
    {
      title: '25.05.2023',
      data: [
        {
          hourMeal: '15:00',
          mealName: 'Feijão',
          status: true,
        },
        {
          hourMeal: '17:00',
          mealName: 'Soja',
          status: false,
        },
        {
          hourMeal: '17:00',
          mealName: 'leite',
          status: false,
        },
        {
          hourMeal: '17:00',
          mealName: 'milk',
          status: false,
        },
      ],
    },
  ])

  const navigation = useNavigation();

  function handleStatistic() {
    navigation.navigate('statistics');
  }

  function handleNewMeal() {
    navigation.navigate('newmeal')
  }

  return(
    <Container>
      <Header/>
      <Percent 
        Percentmeals={`30,00`}
        type={"PRIMARY"}
        icon="north-east"
        SizeBox='LARGE'
        onPress={ handleStatistic }
      /> 
      
      <Text style={{paddingTop: 20, paddingBottom: 10,}} >Refeições</Text>

      <Button
        type='PRIMARY'
        icon="add"
        buttonName="Nova refeição"
        onPress={ handleNewMeal }
      />


      <SectionList
        sections={list}
        keyExtractor={item => item.mealName}
        renderItem={({item}) => (
          <CardMeals 
          hourMeal = {item.hourMeal}
          name= {item.mealName}
          type= {item.status}
          />
        )}
        renderSectionHeader={({ section }) => (
          <Heading 
            title={section.title}
          />
        )}
      />
    </Container>
  )
}