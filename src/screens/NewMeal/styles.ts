import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex:1;
  width: 100%;
`

export const FormContainer = styled.View`
  margin-top: -32px;
  padding: 24px;
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.WHITE};
  width: 100%;
  border-top-right-radius: 20px ;
  border-top-left-radius: 20px;
`



