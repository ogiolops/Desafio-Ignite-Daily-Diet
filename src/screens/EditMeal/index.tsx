import { ButtonOptionsContainer, Container, ContentContainer, DateTimeContainer } from "./styles";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { HeaderBack } from "@components/HeaderBack";
import { ButtonOptions } from "@components/ButtonOptions";

export function EditMeal(){


  function handleDietOption() {
    
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
            buttonName="Salvar alterações"
            type="PRIMARY"
        />
      </ContentContainer>

    </Container>
  )}