import styled, { css } from "styled-components";

export const ImageContainer = styled.section(
  ({ theme: { colors, spacing } }) => css`
    background-color: ${colors.primary.main};
    padding: ${spacing(2)};
  `
);

export const Image = styled.img(
  () => css`
    max-width: 100%;
    max-height: 100%;
  `
);

export const FormContainer = styled.section(
  ({ theme: { colors, spacing } }) => css`
    background-color: ${colors.secondary};
    height: 100%;
    width: 100%;
    padding: ${spacing(10)};
  `
);
