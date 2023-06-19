import { TouchableOpacityProps } from "react-native"
import { MaterialIcons } from '@expo/vector-icons'
import { Container, Icon } from "./styles"
import { useNavigation } from "@react-navigation/native"
import { DietVariant } from "@screens/Home"

type Props = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap,
  type?: DietVariant
}

export function Backicon({ icon, type, ...rest }: Props){

  const navigation = useNavigation();

  function handleGoBack(){
    navigation.goBack()
  }

  return(
    <Container {...rest} onPress={handleGoBack} >
      <Icon
        name={icon}
        type={type}
      />
    </Container>
  )
}