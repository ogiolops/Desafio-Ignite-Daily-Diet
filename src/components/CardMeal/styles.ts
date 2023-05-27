import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";

export type CircleTypeStyleProps = true | false;

type Props = {
  type: CircleTypeStyleProps
}

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 49px;
  border: 1px solid ${({theme }) => theme.COLORS.GRAY_5};
  padding: 14px 0;
  margin-top: 15px;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`

export const HourMeal = styled.Text`
  ${({theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;  
  `}
  margin-left: 12px;
`
export const NameMeal = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `} 
  flex: 1;
`

export const Divider = styled.Text` 
  ${({theme }) => css`
    border: 1px solid ${theme.COLORS.GRAY_5};
    background-color: ${theme.COLORS.GRAY_5};
  `}
  margin: 0 12px;
`

export const StatusMeal = styled.View<Props>`
  background-color: ${({ theme, type }) => type === true ?  theme.COLORS.RED_MID :  theme.COLORS.GREEN_MID };
  border-radius: 100px;
  width: 14px;
  height: 14px;
  margin-right: 16px;
`
