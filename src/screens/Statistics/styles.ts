import styled from "styled-components/native";


export const Container = styled.View`
  flex: 1;
` 


export const HeaderStatistics = styled.View`
  width: 100%;
`


export const StatisticsContent = styled.View`
  flex: 1;
  width: 100%;
  border-top-right-radius: 20px ;
  border-top-left-radius: 20px;
  align-items: center;
`

export const Title = styled.Text`
  color: ${({theme}) => theme.COLORS.GRAY_1};
  font-weight: bold;
  margin-top: 33px;
  font-size: ${({theme}) => theme.FONT_SIZE.SM}px;
`