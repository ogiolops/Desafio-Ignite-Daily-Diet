import { Container, HeaderMeals } from "./styles";

type Props = {
  title: string;
}

export function Heading({title}: Props) {
  return(
    <Container>
      <HeaderMeals>
        {title}
      </HeaderMeals>
    </Container>
  )
}