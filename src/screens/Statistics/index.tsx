import { Percent } from "../../components/Percent";
import { Backicon } from "../../components/Backicon";
import { Container, StatisticsContent, Title, HeaderStatistics, BoxInfos, NumberStatistics, TextStatistics, BoxesContainer, BoxInfosOn, BoxInfosOff } from "./styles";



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

        <BoxInfos>
            <NumberStatistics>22</NumberStatistics>
            <TextStatistics>melhor sequência de pratos dentro da dieta</TextStatistics>
        </BoxInfos>

        <BoxInfos>
            <NumberStatistics>109</NumberStatistics>
            <TextStatistics>refeições registradas</TextStatistics>
        </BoxInfos>

        <BoxesContainer>
           <BoxInfosOn>
            <NumberStatistics>99</NumberStatistics>
            <TextStatistics>refeições dentro da dieta</TextStatistics>
           </BoxInfosOn>
           <BoxInfosOff>
            <NumberStatistics>10</NumberStatistics>
            <TextStatistics>refeições fora da dieta</TextStatistics>
           </BoxInfosOff>
        </BoxesContainer>

      </StatisticsContent>
       


    </Container>
  )
}