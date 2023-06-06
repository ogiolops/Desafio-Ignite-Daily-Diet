import { Percent } from "../../components/Percent";
import { useRoute } from "@react-navigation/native";
import { Backicon } from "../../components/Backicon";
import { Container, StatisticsContent, Title, HeaderStatistics, BoxInfos, NumberStatistics, TextStatistics, BoxesContainer, BoxInfosOn, BoxInfosOff } from "./styles";

type RouteParams = {
  percentMeal: number;
}

export function Statistics(){

  const route = useRoute();
  const { percentMeal } = route.params as RouteParams;

  return(
    <Container>
      <HeaderStatistics>
        <Percent
            type={ percentMeal <= 49 ? 'PRIMARY' : 'SECONDARY'}
            Percentmeals={percentMeal}
            SizeBox="LARGE"
        />

        <Backicon 
            icon="arrow-back"
            type={ percentMeal <= 49 ? 'PRIMARY' : 'SECONDARY'}
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