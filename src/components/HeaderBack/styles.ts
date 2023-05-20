import { ArrowLeft } from "phosphor-react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  height: 100px;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_5};
`

export const TitleToBack = styled.Text`
  color: ${({ theme: theme }) => theme.COLORS.GRAY_1};
  font-family: ${({ theme: theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme: theme }) => theme.FONT_SIZE.LG}px;
`

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  padding-left: 24px; 
`

export const BackIcon = styled(ArrowLeft).attrs(({theme}) => ({
  size: 24,
  color: theme.COLORS.GRAY_2
}))``
