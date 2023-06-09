import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`
export const ContentContainer = styled.View`
  padding: 30px 24px;
  border-radius: 20px;
  margin-top: -32px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`

export const DateTimeContainer = styled.View`
  gap: 18px;
  flex-direction: row;
  justify-content: space-between;
`

export const ButtonOptionsContainer = styled.View`
  margin-bottom: 60px;
`
