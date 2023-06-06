import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex:1;
  width: 100%;
`

export const ContainerContent = styled.View`
  margin-top: -32px;
  padding: 50px 24px;
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.WHITE};
  width: 100%;
  border-top-right-radius: 20px ;
  border-top-left-radius: 20px;
`

export const ButtonContainer = styled.View`
  margin-bottom: 20px;
  margin: 0 24px;
`

export const DateTimeContainer = styled.View`
  gap: 18px;
  flex-direction: row;
  justify-content: space-between;
`

export const OptionContainer = styled.View`
  gap: 18px;
  flex-direction: row;
  justify-content: space-between;
  background-color: blue;
`






