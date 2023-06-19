import uuid from 'react-native-uuid';
import { useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import { Button } from "../../components/Button";
import { HeaderBack } from "../../components/HeaderBack";
import { Container, ContainerContent, DateTimeContainer, ButtonOptionsContainer } from "./styles";
import { Input } from "@components/Input";
import { ButtonOptions } from "@components/ButtonOptions";
import { mealCreate } from '@storage/meal/mealCreate';
import { MealDTO } from 'src/dtos/MealDTO';


export function NewMeal(){

  const [dietOption, setDietOption] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const mealId =  String(uuid.v4()) ;
  const statusDiet = dietOption === 'Sim' ? true : false;

  const navigation = useNavigation();

  async function handleFeedback() {
    const newMeal: MealDTO = {
      id: mealId,
      name: name,
      description: description,
      date: date,
      hour: time,
      inDiet: statusDiet,
    }

    console.log(newMeal)
    try {
      await mealCreate(newMeal);
    } catch (error) {
      console.log('erro no catch =>', error);
    } finally {
      navigation.navigate('feedback', {statusDiet})
    }
  }

  function handleDietOption(option: string) {
    setDietOption(option);
  }

  return(
    <Container>
        <HeaderBack name='Nova refeição'/>
        <ContainerContent>
          <Input 
            name="Nome"
            heightInput='DEFAULT'
            onChangeText={setName}
            value={name}
          />

          <Input 
            name="Descrição"
            heightInput='HIGHT'
            onChangeText={setDescription}
            value={description}
          />

          <DateTimeContainer>
            <Input 
              name="Data"
              heightInput='DEFAULT'
              style={{ flex: 1 }}
              onChangeText={setDate}
              value={date}
            />
            <Input 
              name="Hora"
              heightInput='DEFAULT'
              style={{ flex: 1 }}
              onChangeText={setTime}
              value={time}
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
            type='PRIMARY'
            buttonName='Cadastrar '
            onPress={ handleFeedback}
          />
        </ContainerContent>


    </Container>
  )
}