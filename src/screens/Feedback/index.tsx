import { ButtonContainer, Container, FeedbacksColor, Logo, Text, Title } from "./styles";

import positive from '../../assets/positivelogo.png'
import negative from '../../assets/negativelogo.png'
import { Button } from "../../components/Button";

type Props = {
  type: FeedbacksColor; 
}

export function Feedback({type}: Props){
  return(
    <Container>
        <Title
          type='POSITIVE'
        >Continue assim!</Title>
        <Text>Você continua dentro da dieta. Muito bem!</Text>
        <Logo source={positive} />

        <ButtonContainer>
          <Button 
            type='PRIMARY'
            buttonName='Ir para a página inicial'
          />
        </ButtonContainer>

    </Container>
  )
}