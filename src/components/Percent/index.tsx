import { TouchableOpacityProps } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'
import { Container, Icon, PercentText, PercentValue, SizeBoxPercent} from "./styles";
import { DietVariant } from "@screens/Home";

type Props = TouchableOpacityProps & {
  icon?: keyof typeof MaterialIcons.glyphMap,
  Percentmeals: number;
  SizeBox: SizeBoxPercent;
  variant: DietVariant;
}

export function Percent({ icon, SizeBox, Percentmeals, variant , ...rest }: Props){
  return(
    <Container variant={variant} {...rest} SizeBox={SizeBox}  >
      <PercentValue>
        {Percentmeals}%
      </PercentValue>

      <PercentText>
          das refeições dentro da dieta
      </PercentText>

      <Icon 
        name={icon}
        variant={variant}
      />
    </Container>
  )
}