import { Container, HeaderMeals, MealsContainer } from "./styles";

type Props = {
  data: string;
}

export function ListOfMeals({ data }: Props) {
  return(
    <Container>
      <HeaderMeals>
        {data}
      </HeaderMeals>
    </Container>
  )
}