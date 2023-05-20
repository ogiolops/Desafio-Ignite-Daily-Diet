import styled from "styled-components/native";


export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.RED_LIGHT};
` 


export const HeaderStatistics = styled.View`
  width: 100%;
`


export const StatisticsContent = styled.View`
  padding: 0 24px;
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.WHITE};
  width: 100%;
  border-top-right-radius: 20px ;
  border-top-left-radius: 20px;
  align-items: center;
`

export const Title = styled.Text`
  color: ${({theme}) => theme.COLORS.GRAY_1};
  font-weight: bold;
  margin-top: 33px;
  margin-bottom: 10px;
  font-size: ${({theme}) => theme.FONT_SIZE.SM}px;
`

export const BoxInfos = styled.View`
  width: 100%;
  height: 89px;
  background-color: ${({theme}) => theme.COLORS.GRAY_7};
  border-radius: 6px;
  padding: 16px;
  margin-top: 12px;
  align-items: center;
  justify-content: center;
`

export const NumberStatistics = styled.Text`
  color: ${({theme}) => theme.COLORS.GRAY_1};
  font-size: ${({theme}) => theme.FONT_SIZE.XL}px;
  font-family:  ${({theme}) => theme.FONT_FAMILY.BOLD};
  margin-bottom: 8px;
`

export const TextStatistics = styled.Text`
  color: ${({theme}) => theme.COLORS.GRAY_2};
  font-size: ${({theme}) => theme.FONT_SIZE.SM}px;
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
  text-align: center;
`

export const BoxesContainer = styled.View`
  flex-direction: row;
  gap: 12px;
  margin-top: 12px;
`

export const BoxInfosOn = styled.View`
  flex:1;
  height: 107px;
  background-color: ${({theme}) => theme.COLORS.GREEN_LIGHT};
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  padding: 16px;
`

export const BoxInfosOff = styled.View`
  flex:1;
  height: 107px;
  background-color: ${({theme}) => theme.COLORS.RED_LIGHT};
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  padding: 16px;
` 

