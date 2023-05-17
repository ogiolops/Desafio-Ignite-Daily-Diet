import { TouchableOpacityProps } from "react-native";
import { ColorTypeStyleProps, Container, Icon, PercentText, PercentValue} from "./styles";

type Props = TouchableOpacityProps & {
  Percentmeals: number;
  type?: ColorTypeStyleProps;
}

export function Percent({ Percentmeals, type='BELOW', ...rest }: Props){
  return(
    <Container type={type} {...rest} >
      <PercentValue>
        {Percentmeals}%
      </PercentValue>
      <PercentText>
          das refeições dentro da dieta
      </PercentText>
      <Icon
      />
    </Container>
  )
}