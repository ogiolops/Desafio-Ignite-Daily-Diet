import { TouchableOpacityProps } from "react-native"
import { CircleTypeStyleProps, Container, Divider, HourMeal, NameMeal, StatusMeal } from "./styles";

type Props = TouchableOpacityProps & {
  dietStatus: CircleTypeStyleProps,
  hourMeal: string,
  name: string,
}

export function CardMeals({ dietStatus=true, hourMeal, name, ...rest }: Props){
  return(
    <Container {...rest} >
      <HourMeal>{hourMeal}</HourMeal>
      <Divider/>
      <NameMeal>{name}</NameMeal>
      <StatusMeal
        type={dietStatus}
      />

    </Container>
  )
}