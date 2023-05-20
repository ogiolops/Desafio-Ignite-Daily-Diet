import { TouchableOpacityProps } from "react-native";
import { BackButton, BackIcon, Container, TitleToBack } from "./styles";

type Props = TouchableOpacityProps & {
  name: string;
}

export function HeaderBack({ name, ...Props }: Props){
  return(
     <Container>
      <BackButton>
        <BackIcon />
      </BackButton>
      <TitleToBack>{name}</TitleToBack>
     </Container>
  )
}