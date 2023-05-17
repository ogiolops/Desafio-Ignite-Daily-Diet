import { Container } from "./styles";
import { Header } from "../../components/Header";
import { Percent } from "../../components/Percent";

export function Diet(){
  return(
    <Container>
      <Header/>
      <Percent 
        Percentmeals={30}
        type={"ABOVE"}
      /> 
    </Container>
  )
}