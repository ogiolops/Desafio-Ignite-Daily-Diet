import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'

export type ButtonIconTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: ButtonIconTypeStyleProps;
}

export const Container = styled(TouchableOpacity)`
  width: 24px;
  height: 24px;

  justify-content: center;
  align-items: center;

  margin-left: 12px;

  position: absolute;
  margin-top: 20px;
`


export const Icon= styled(MaterialIcons).attrs<Props>(({ theme, type }) => ({
  size: 30,
  color: type === 'PRIMARY' ? theme.COLORS.RED_DARK : theme.COLORS.GREEN_DARK
}))``