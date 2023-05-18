import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

export const Container = styled.View`
  width: 100%;
`

export const HeaderMeals = styled.Text`
  width: 100%;
  padding-top: 22px;
  font-family: ${({theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({theme }) => theme.FONT_SIZE.MD}px;
  color: ${({theme }) => theme.COLORS.GRAY_1};
`


export const MealsContainer = styled(TouchableOpacity)`
  width: 100%;
  height: 49px;
  border: 1px solid ${({theme }) => theme.COLORS.GRAY_5};
  padding: 14px 0;
  margin-top: 15px;
  border-radius: 6px;
  justify-content: center;
  flex-direction: row;
`