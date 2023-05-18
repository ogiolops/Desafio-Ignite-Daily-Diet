import { TouchableOpacityProps } from "react-native"
import { MaterialIcons } from '@expo/vector-icons'
import { ButtonTypeProps, Container, Icon, Title } from "./styles";

type Props = TouchableOpacityProps & {
  icon?: keyof typeof MaterialIcons.glyphMap,
  type: ButtonTypeProps,
  buttonName: string,
}

export function Button({icon, buttonName, type='PRIMARY', ...rest}:Props){
  return(
    <Container 
      {...rest} 
      type={type} 
    >
      <Icon 
        name={icon}
        type={type}
      />
      <Title   
        type={type}
      >
        {buttonName}
      </Title> 
    </Container>
  )
}