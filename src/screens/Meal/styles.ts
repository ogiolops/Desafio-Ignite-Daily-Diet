import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`

export const ContentContainer = styled.View`
  padding: 30px 24px;
  border-radius: 20px;
  margin-top: -32px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  margin-bottom: 8px;
`

export const Description = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_2};
  `}

  margin-bottom: 24px;
`
export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`

export const DataContainer = styled.View`
  flex-direction: row;
  gap:6px;
  margin-bottom: 24px;
`

export const Status = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  flex-direction: row;
  width: 144px;
  padding: 8px 16px;
  gap: 8px;
  margin-bottom: 240px;
`

export const Circle = styled.View`
  border-radius: 1000px;
  width: 8px;
  height: 8px;
  background-color: ${({ theme }) => theme.COLORS.GREEN_DARK};
`

export const StatusText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.GRAY_2};
`

export const ButtonContainer = styled.View`
  flex-direction: column;
  gap: 9px;
  margin-bottom: 20px;
`