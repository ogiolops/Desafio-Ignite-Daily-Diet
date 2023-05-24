import { TouchableOpacityProps } from "react-native";
import { BackButton, BackIcon, Container, TitleToBack } from "./styles";
import { useNavigation } from "@react-navigation/native";

type Props = TouchableOpacityProps & {
  name: string;
}

export function HeaderBack({ name, ...Props }: Props){

  const navigation = useNavigation();

  function handleGoBack(){
    navigation.navigate('home')
  }


  return(
     <Container>
      <BackButton onPress={handleGoBack} >
        <BackIcon />
      </BackButton>
      <TitleToBack>{name}</TitleToBack>
     </Container>
  )
}