import { useNavigation } from "@react-navigation/native";
import { Button } from "../../components/Button";
import { HeaderBack } from "../../components/HeaderBack";
import { Container, ContainerContent, DateTimeContainer, ButtonOptionsContainer } from "./styles";
import { Input } from "@components/Input";
import { ButtonOptions } from "@components/ButtonOptions";


export function NewMeal(){
  const navigation = useNavigation();
  function handleFeedback() {
    navigation.navigate('feedback')
  }

  function handleDietOption() {
    
  }

  return(
    <Container>
        <HeaderBack name='Nova refeição'/>
        <ContainerContent>

          <Input 
            name="Nome"
            heightInput='DEFAULT'
          />

          <Input 
            name="Descrição"
            heightInput='HIGHT'
          />

          <DateTimeContainer>
            <Input 
              name="Data"
              heightInput='DEFAULT'
              style={{ flex: 1 }}
            />
            <Input 
              name="Hora"
              heightInput='DEFAULT'
              style={{ flex: 1 }}
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