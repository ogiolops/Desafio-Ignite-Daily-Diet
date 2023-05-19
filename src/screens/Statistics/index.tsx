import { Percent } from "../../components/Percent";
import { Backicon } from "../../components/Backicon";
import { Container, StatisticsContent, Title, HeaderStatistics } from "./styles";



export function Statistics(){
  return(
    <Container>
      <HeaderStatistics>
        <Percent
            type={"PRIMARY"}
            Percentmeals={30}
            SizeBox="LARGE"
        />

        <Backicon 
            icon="arrow-back"
            type='PRIMARY'
        />
      </HeaderStatistics>


      <StatisticsContent>
        <Title>Estatísticas gerais</Title>
      </StatisticsContent>
       

    </Container>
  )
}