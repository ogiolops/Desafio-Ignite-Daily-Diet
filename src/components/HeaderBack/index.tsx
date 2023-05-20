import { BackButton, BackIcon, Container, TitleToBack } from "./styles";

export function HeaderBack(){
  return(
     <Container>
      <BackButton>
        <BackIcon />
      </BackButton>
      <TitleToBack>Nova refeição</TitleToBack>
     </Container>
  )
}