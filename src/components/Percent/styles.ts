import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons'
import { DietVariant } from "@screens/Home";

export type SizeBoxPercent = 'MEDIUM' | 'LARGE';

type Props = {
  SizeBox: SizeBoxPercent;
  variant: DietVariant;
}

export const Container = styled(TouchableOpacity)<Props>`
  width: 100%;
  height: ${({ theme, SizeBox }) => SizeBox === 'MEDIUM' ? theme.BOX_SIZE.MD : theme.BOX_SIZE.LG }px;
  background-color: ${({ theme, variant }) => variant === 'outDiet' ? theme.COLORS.RED_LIGHT  : theme.COLORS.GREEN_LIGHT};
  border-radius: 6px;
  padding: 20px 16px;
  gap: 2px;             
 
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const PercentValue = styled.Text`
  ${({theme}) => css`
  color: ${theme.COLORS.GRAY_1};
  font-family: ${theme.FONT_FAMILY.BOLD};
  font-size: ${theme.FONT_SIZE.XXL}px;
  `}  
  line-height: 41.6px;
`

export const PercentText = styled.Text`
  ${({theme}) => css`
  color: ${theme.COLORS.GRAY_2};
  font-family: ${theme.FONT_FAMILY.REGULAR};
  font-size: ${theme.FONT_SIZE.SM}px;
  `}  
  line-height: 18.2px;
`
export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, variant }) => ({
  size: 24,
  color: variant === 'outDiet' ? theme.COLORS.RED_DARK  : theme.COLORS.GREEN_DARK,
}))`

  position: absolute;
  right: 0;
  top: 0;
  padding: 13.25px;


`