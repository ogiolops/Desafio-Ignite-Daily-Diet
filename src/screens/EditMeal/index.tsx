import { Button } from "@components/Button";
import { HeaderBack } from "@components/HeaderBack";
import { Container, ContentContainer, ButtonContainer } from "./styles";

export function EditMeal(){
  return(
    <Container>
      <HeaderBack
        name='Editar refeição'
      />
      <ContentContainer>
        
      </ContentContainer>

      <ButtonContainer>
        <Button 
          buttonName="Salvar alterações"
          type="PRIMARY"
        />
      </ButtonContainer>

    </Container>
  )}