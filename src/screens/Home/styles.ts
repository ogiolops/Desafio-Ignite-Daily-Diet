import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  margin: 24px;
`

export const Heading = styled.Text`
  ${({theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_1};
  `}
  width: 100%;
  padding-top: 22px;
`

export const SectionListContainer = styled.View`
  flex: 1;
  margin-top: 10px;
`