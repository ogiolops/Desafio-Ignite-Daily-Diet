import { Pen, Trash } from "phosphor-react-native";
import { Button } from "../../components/Button";
import { HeaderBack } from "../../components/HeaderBack";
import { Container, ContentContainer, DataContainer, Description, Status, StatusText, SubTitle, Title, Circle, ButtonContainer } from "./styles";
import { Alert } from "react-native";

function handleMealRemove() {
  Alert.alert(
    'Remover',
    'Deseja realmente excluir o registro da refeição?',
    [
      { text: 'Cancelar', style: 'cancel'},
      { text: 'Sim, excluir'}
    ]
  )
}

export function Meal(){
  return(
    <Container>
      <HeaderBack
        name='Refeição'
      />

      <ContentContainer>
        <Title>Sanduíche</Title>
        <Description>Sanduíche de pão integral com atum e salada de alface e tomate</Description>
        <SubTitle>Data e hora</SubTitle>
        <DataContainer>
          <Description>12/08/2022</Description>
          <Description>às</Description>
          <Description>16:00</Description>
        </DataContainer>
        <Status>
          <Circle></Circle>
          <StatusText>dentro da dieta</StatusText>
        </Status>
      </ContentContainer>

      <ButtonContainer>
        <Button 
          buttonName="Editar refeição"
          icon='border-color'
          type='PRIMARY'
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