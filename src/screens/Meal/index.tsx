import { useNavigation, useRoute } from "@react-navigation/native";
import { Button } from "../../components/Button";
import { HeaderBack } from "../../components/HeaderBack";
import { removeMeals } from '@storage/meal/removeMeals';
import { 
  Container, 
  ContentContainer, 
  DataContainer, 
  Description, 
  Status, 
  StatusText, 
  SubTitle, 
  Title, 
  Circle, 
  ButtonContainer 
} from "./styles";
import { Alert } from "react-native";
import { MealDTO } from "src/dtos/MealDTO";
import { DietVariant } from "@screens/Home";

type RouteParams = {
  meal: MealDTO;
  variant: DietVariant;
}

export function Meal({variant }:RouteParams ){

  const route = useRoute();
  const { meal } = route.params as RouteParams;
  const navigation = useNavigation();

  function handleEditMeal() {
    navigation.navigate('editmeal', {meal})
  }

  async function mealRemove() {
    try {
      await removeMeals(meal.id);
    } catch (error) {
      console.log(error);
    } finally {
      navigation.goBack()
    }
  }

  function handleMealRemove() {
    Alert.alert(
      'Remover',
      'Deseja realmente excluir o registro da refeição?',
      [
        { text: 'Cancelar', style: 'cancel'},
        { text: 'Sim, excluir', onPress: () =>mealRemove()}
      ],
    )
  }

  return(
    <Container>
      <HeaderBack
        name='Refeição'
      />

      <ContentContainer>
        <Title>{meal.name}</Title>
        <Description>{meal.description}</Description>
        <SubTitle>Data e hora</SubTitle>
        <DataContainer>
          <Description>{meal.date}</Description>
          <Description>às</Description>
          <Description>{meal.hour}</Description>
        </DataContainer>
        <Status>
          <Circle variant={meal.inDiet === true ? 'inDiet' : 'outDiet'}/>
          <StatusText>{meal.inDiet === true ? 'dentro da dieta' : 'fora da dieta'}</StatusText>
        </Status>

      </ContentContainer>

      <ButtonContainer>
          <Button 
            buttonName="Editar refeição"
            icon='border-color'
            type='PRIMARY'
            onPress={ handleEditMeal }
          />
          <Button 
            buttonName="Excluir refeição"
            icon='delete'
            type='SECONDARY'
            onPress={handleMealRemove}
          />
        </ButtonContainer>
    </Container>
  ) 
}