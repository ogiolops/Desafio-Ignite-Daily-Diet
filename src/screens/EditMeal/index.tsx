import { ButtonOptionsContainer, Container, ContentContainer, DateTimeContainer } from "./styles";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { HeaderBack } from "@components/HeaderBack";
import { ButtonOptions } from "@components/ButtonOptions";
import { MealDTO } from "src/dtos/MealDTO";
import { useRoute } from "@react-navigation/native";
import { useState } from "react";

type RouteParams = {
  meal: MealDTO;
}

export function EditMeal(){

  const route = useRoute();
  const { meal } = route.params as RouteParams;

  const [name, setName] = useState(meal.name)
  const [description, setDescription] = useState(meal.description)
  const [date, setDate] = useState(meal.date)
  const [hour, setHour] = useState(meal.hour)
  const [inDiet, setInDiet] = useState(meal.inDiet ? 'Sim' : 'Não')

  function handleDietOption(option: string) {
    setInDiet(option);
  }

  async function handleMealUpdate() {
    const mealUpdated: MealDTO = {
      id: meal.id,
      name: name,
      description: description,
      date: date,
      hour: hour,
      inDiet: inDiet === 'Sim' ? true : false,
    }

    console.log(mealUpdated)

    try {

    } catch (error) {
      console.log(error)
    }
  }

  return(
    <Container>
      <HeaderBack
        name='Editar refeição'
      />
      <ContentContainer>
          <Input 
            name="Nome"
            heightInput='DEFAULT'
            value={name}
            onChangeText={setName}
          />

          <Input 
            name="Descrição"
            heightInput='HIGHT'
            value={description}
            onChangeText={setDescription}
          />

          <DateTimeContainer>
            <Input 
              name="Data"
              heightInput='DEFAULT'
              style={{ flex: 1 }}
              value={hour}
              onChangeText={setHour}
            />
            <Input 
              name="Hora"
              heightInput='DEFAULT'
              style={{ flex: 1 }}
              value={date}
              onChangeText={setDate}
            />
          </DateTimeContainer>

          <ButtonOptionsContainer>
            <ButtonOptions 
              title='Está dentro da dieta?'
              options={['Sim', 'Não']}
              onSelect={handleDietOption}
            />
          </ButtonOptionsContainer>

        <Button 
            buttonName="Salvar alterações"
            type="PRIMARY"
            onPress={handleMealUpdate}
        />
      </ContentContainer>

    </Container>
  )}