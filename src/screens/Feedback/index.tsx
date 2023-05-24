import { ButtonContainer, Container, FeedbacksColor, Logo, Text, Title } from "./styles";

import positive from '../../assets/positivelogo.png'
import negative from '../../assets/negativelogo.png'
import { Button } from "../../components/Button";
import { useNavigation } from "@react-navigation/native";

// type Props = {
//   type: FeedbacksColor; 
// }

// export function Feedback({type}: Props){
//   return(
//     <Container>
//         <Title
//           type='POSITIVE'
//         >Continue assim!</Title>
//         <Text>Você continua dentro da dieta. Muito bem!</Text>
//         <Logo source={positive} />

//         <ButtonContainer>
//           <Button 
//             type='PRIMARY'
//             buttonName='Ir para a página inicial'
//           />
//         </ButtonContainer>

//     </Container>
//   )
// }


export function Feedback(){

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.navigate('home');
  }

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
            onPress={handleGoBack}
          />
        </ButtonContainer>

    </Container>
  )
}