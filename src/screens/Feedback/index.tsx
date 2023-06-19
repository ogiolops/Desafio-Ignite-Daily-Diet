import { useRoute } from "@react-navigation/native";
import { ButtonContainer, Container, FeedbacksColor, Logo, Text, Title } from "./styles";

import positive from '../../assets/positivelogo.png'
import negative from '../../assets/negativelogo.png'
import { Button } from "../../components/Button";
import { useNavigation } from "@react-navigation/native";

type RouteParams = {
  statusDiet: boolean;
}

export function Feedback(){
  const route = useRoute();
  const { statusDiet } = route.params as RouteParams;
  console.log(statusDiet)

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.navigate('home');
  }

  return(
    <Container>

        <Title
          type={statusDiet ? 'POSITIVE' : 'NEGATIVE' }
          >{ statusDiet ? 'Continue assim!' : 'Que pena!'}</Title>
        <Text>{ statusDiet ? `Você continua dentro da dieta. Muito bem!` : 'Você saiu da dieta dessa vez, mas continue se esforçando e não desista!'}</Text>
        <Logo source={ statusDiet ? positive : negative } />

        <ButtonContainer>
          <Button 
            type='PRIMARY'
            buttonName='Ir para a página inicial'
            onPress={handleGoBack}
          />
        </ButtonContainer>

    </Container>
  )
}