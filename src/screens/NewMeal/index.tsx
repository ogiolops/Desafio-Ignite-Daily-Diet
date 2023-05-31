import { useNavigation } from "@react-navigation/native";
import { Button } from "../../components/Button";
import { Form } from "../../components/Form";
import { HeaderBack } from "../../components/HeaderBack";
import { Container, FormContainer } from "./styles";

export function NewMeal(){

  const navigation = useNavigation();

  function handleFeedback() {
    navigation.navigate('feedback')
  }

  return(
    <Container>
        <HeaderBack 
          name='Nova refeição'
        />
        <FormContainer>
          <Form/>
        </FormContainer>

      <Button
        type='PRIMARY'
        buttonName='Cadastrar '
        onPress={ handleFeedback}
      />
    </Container>
  )
}