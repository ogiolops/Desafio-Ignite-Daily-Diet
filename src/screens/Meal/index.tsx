import { HeaderBack } from "../../components/HeaderBack";
import { Container, ContentContainer, DataContainer, Description, Status, StatusText, SubTitle, Title, Circle } from "./styles";

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

    </Container>
  ) 
}