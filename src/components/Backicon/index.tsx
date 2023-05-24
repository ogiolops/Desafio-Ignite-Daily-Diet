import { TouchableOpacityProps } from "react-native"
import { MaterialIcons } from '@expo/vector-icons'
import { Container, Icon, ButtonIconTypeStyleProps} from "./styles"
import { useNavigation } from "@react-navigation/native"

type Props = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap,
  type?: ButtonIconTypeStyleProps
}

export function Backicon({ icon, type='PRIMARY', ...rest }: Props){

  const navigation = useNavigation();

  function handleGoBack(){
    navigation.navigate('home')
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