import { ArrowLeft } from "phosphor-react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.SafeAreaView`
  height: 132px;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_5};
`

export const TitleToBack = styled.Text`
  ${({ theme: theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
  `}
`

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  top: 56px;
  padding-left: 24px; 
`

export const BackIcon = styled(ArrowLeft).attrs(({theme}) => ({
  size: 24,
  color: theme.COLORS.GRAY_2
}))``
