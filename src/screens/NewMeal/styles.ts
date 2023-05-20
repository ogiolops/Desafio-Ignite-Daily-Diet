import styled from "styled-components/native";

export const Container = styled.View`
  flex:1;
  background-color: ${({theme}) => theme.COLORS.GRAY_5};
  width: 100%;
`

export const FormContainer = styled.View`
  padding: 24px;
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.WHITE};
  width: 100%;
  border-top-right-radius: 20px ;
  border-top-left-radius: 20px;
`



