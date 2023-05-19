import { Container } from "./styles";
import { Header } from "../../components/Header";
import { Percent } from "../../components/Percent";
import { Button } from "../../components/Button";
import { Text } from "react-native";
import { ListOfMeals } from "../../components/ListOfMeals";
import { CardMeals } from "../../components/CardMeal";

export function Diet(){
  return(
    <Container>
      <Header/>
      <Percent 
        Percentmeals={30}
        type={"PRIMARY"}
        icon="north-east"
      /> 
      
      <Text style={{paddingTop: 20, paddingBottom: 10,}} >Refeições</Text>

      <Button
        type='PRIMARY'
        icon="add"
        buttonName="Nova refeição"
      />

      <ListOfMeals
        data='12.05.23'
      />

      <CardMeals
        hourMeal='15:00'
        name='Banana'
        type='SECONDARY'
      />

    </Container>
  )
}