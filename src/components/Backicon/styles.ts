import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'

import { DietVariant } from "@screens/Home";

// export type ButtonIconTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: DietVariant;
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
  color: type === 'inDiet' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK 
}))``