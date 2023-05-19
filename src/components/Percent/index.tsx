import { TouchableOpacityProps } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'
import { ColorTypeStyleProps, Container, Icon, PercentText, PercentValue, SizeBoxPercent} from "./styles";

type Props = TouchableOpacityProps & {
  icon?: keyof typeof MaterialIcons.glyphMap,
  Percentmeals: number;
  type?: ColorTypeStyleProps;
  SizeBox: SizeBoxPercent;
}

export function Percent({ icon, SizeBox, Percentmeals, type='PRIMARY', ...rest }: Props){
  return(
    <Container type={type} {...rest} SizeBox={SizeBox}  >
      <PercentValue>
        {Percentmeals}%
      </PercentValue>

      <PercentText>
          das refeições dentro da dieta
      </PercentText>

      <Icon 
        name={icon}
        type={type}
      />
    </Container>
  )
}