import styled, { css } from "styled-components/native";
import { TouchableOpacity, Text } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

export type ButtonTypeProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: ButtonTypeProps;
} 

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;
  min-height: 50px;
  max-height: 50px;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: ${({ theme, type }) => type === 'PRIMARY' ?  theme.COLORS.GRAY_2 :  theme.COLORS.WHITE };
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_2};
`
export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, type }) => ({
  size: 24,
  color: type === 'PRIMARY' ? theme.COLORS.WHITE :  theme.COLORS.GRAY_2,
}))`
  
`

export const Title = styled(Text)<Props>`
${({ theme, type }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_2};
  `}
  margin: 0 10px;
`;