import styled from "styled-components/native";
import { TextInput } from "react-native";

export type InputProps = 'DEFAULT' | 'HIGHT';

type Props = {
  heightInput: InputProps;
}

export const Container = styled.View`
  flex-direction: column;
`

export const Label = styled.Text`
  color: ${({theme}) => theme.COLORS.GRAY_2};
  font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
  font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
  align-self: flex-start;
  margin-bottom: 8px;
`

export const InputText = styled(TextInput)<Props>`
  height: ${({ theme, heightInput }) => heightInput === 'DEFAULT' ? theme.INPUT_HIGHT_SIZE.DF : theme.INPUT_HIGHT_SIZE.HG }px;
  border: 1px solid ${({theme}) => theme.COLORS.GRAY_5};
  border-radius: 6px;
  padding: 14px;
  margin-bottom: 24px;
`