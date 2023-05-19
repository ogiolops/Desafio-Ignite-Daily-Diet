import { ArrowUpRight } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons'

export type   ColorTypeStyleProps = 'PRIMARY' | 'SECONDARY';
export type SizeBoxPercent = 'MEDIUM' | 'LARGE';

type Props = {
  type: ColorTypeStyleProps;
  SizeBox: SizeBoxPercent;
}

export const Container = styled(TouchableOpacity)<Props>`
  width: 100%;
  height: ${({ theme, SizeBox }) => SizeBox === 'MEDIUM' ? theme.BOX_SIZE.MD  : theme.BOX_SIZE.LG}px; 

  background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.RED_LIGHT  : theme.COLORS.GREEN_LIGHT};
  border-radius: 6px;
  padding: 20px 16px;             
 
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
`

export const PercentText = styled.Text`
  ${({theme}) => css`
  color: ${theme.COLORS.GRAY_2};
  font-family: ${theme.FONT_FAMILY.REGULAR};
  font-size: ${theme.FONT_SIZE.XS}px;
  `}  
  line-height: 18px;
`
export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, type }) => ({
  size: 24,
  color: type === 'PRIMARY' ? theme.COLORS.RED_DARK  : theme.COLORS.GREEN_DARK,
}))`

  position: absolute;
  right: 0;
  top: 0;
  padding: 13.25px;


`