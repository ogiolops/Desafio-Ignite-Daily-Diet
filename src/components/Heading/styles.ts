import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
`

export const HeaderMeals = styled.Text`
  ${({theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_1};
  `}
  width: 100%;
  padding-top: 22px;
`


export const MealsContainer = styled.Text`
  width: 100%;
  height: 49px;
  border: 1px solid ${({theme }) => theme.COLORS.GRAY_5};
  padding: 14px 0;
  margin-top: 15px;
  border-radius: 6px;
  justify-content: center;
  flex-direction: row;
`