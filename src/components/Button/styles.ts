import styled, { css } from "styled-components/native";
import { TouchableOpacity, Text } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

export type ButtonTypeProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: ButtonTypeProps;
} 

export const Container = styled(TouchableOpacity)<Props>`
  height: 50px;
  width: 100%;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: ${({ theme, type }) => type === 'PRIMARY' ?  theme.COLORS.GRAY_2 :  theme.COLORS.WHITE };
  gap: 12px;
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

  margin-left: 5px;
`;