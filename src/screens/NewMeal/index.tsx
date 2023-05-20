import { Button } from "../../components/Button";
import { Form } from "../../components/Form";
import { HeaderBack } from "../../components/HeaderBack";
import { Container, FormContainer } from "./styles";

export function NewMeal(){
  return(
    <Container>
        <HeaderBack 
          name='Refeição'
        />
        <FormContainer>
          <Form/>

          <Button
            type='PRIMARY'
            buttonName='Salvar alteraçoes'
          />
        </FormContainer>

    </Container>
  )
}