import styled, { css } from "styled-components/native";

export type FeedbacksColor = 'POSITIVE' | 'NEGATIVE';

type Props = {
  type: FeedbacksColor
}

export const Container = styled.View`
  flex:1;
  align-items: center;
  justify-content: center;
`

export const Title = styled.Text<Props>`
  ${({ theme, type }) => css`
    color: ${ type === 'POSITIVE' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK };
    font-family: ${ theme.FONT_FAMILY.BOLD};
    font-size: ${ theme.FONT_SIZE.XL}px;
  `}
  margin-bottom: 8px;
`

export const Text = styled.Text`
  ${({ theme }) => css`
    color: ${ theme.COLORS.GRAY_1};
    font-family: ${ theme.FONT_FAMILY.REGULAR};
    font-size: ${ theme.FONT_SIZE.MD}px;
  `}
  margin-bottom: 40px;
  text-align: center;
`

export const Logo = styled.Image`
  width: 224px;
  height: 288px;
`

export const ButtonContainer = styled.View`
  width: 200px;
  margin-top: 32px;
`
