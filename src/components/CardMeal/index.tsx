import { TouchableOpacityProps } from "react-native"
import { CircleTypeStyleProps, Container, Divider, HourMeal, NameMeal, StatusMeal } from "./styles";

type Props = TouchableOpacityProps & {
  type: CircleTypeStyleProps,
  hourMeal: string,
  name: string,
}

export function CardMeals({ type='PRIMARY', hourMeal, name, ...rest }: Props){
  return(
    <Container {...rest} >
      <HourMeal>{hourMeal}</HourMeal>
      <Divider></Divider>
      <NameMeal>{name}</NameMeal>
      <StatusMeal
        type={type}
      />

    </Container>
  )
}