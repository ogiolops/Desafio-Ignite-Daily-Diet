import styled, { css } from "styled-components/native";
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import { TextInputProps } from 'react-native';

export type InputProps = TextInputProps;

export type ButtonStyleProps = {
  isActive?: boolean;
}

export const Container = styled.View`
  flex: 1;
  padding-top: 24px;
`

export const Text = styled.Text`
  color: ${({theme}) => theme.COLORS.GRAY_2};
  font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
  font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
  align-self: flex-start;
  margin: 12px 0;
`

export const Input = styled(TextInput)`
  width: 100%;
  height: 48px;
  border: 1px solid ${({theme}) => theme.COLORS.GRAY_5};
  border-radius: 6px;
  padding: 14px;
`

export const InputDescription = styled(TextInput)`
  border: 1px solid ${({theme}) => theme.COLORS.GRAY_5};
  padding: 10px;
`

export const ButtonsOption = styled.View`
  flex-direction: row;
  gap: 12px;
`

export const ButtonsDietin = styled(TouchableOpacity)<ButtonStyleProps>`
  background-color: ${({ theme, isActive }) => isActive  ?  theme.COLORS.GREEN_LIGHT :  theme.COLORS.GRAY_7 };
  border: 1px solid ${({ theme, isActive }) => isActive  ?  theme.COLORS.GREEN_DARK :  theme.COLORS.WHITE };
  flex: 1;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
`

export const ButtonsDietOut = styled(TouchableOpacity)<ButtonStyleProps>`
  background-color: ${({ theme, isActive }) => isActive  ?  theme.COLORS.RED_LIGHT :  theme.COLORS.GRAY_7 };
  border: 1px solid ${({ theme, isActive }) => isActive  ?  theme.COLORS.RED_DARK :  theme.COLORS.WHITE };
  flex: 1;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
`

export const TextButton = styled.Text`
  color: ${({theme}) => theme.COLORS.GRAY_2};
  font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
  font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
  margin: 12px 0;
`

