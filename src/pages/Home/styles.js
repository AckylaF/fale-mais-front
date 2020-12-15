import styled, { css } from "styled-components";

export const ImageContainer = styled.section(
  ({ theme: { colors, spacing, media } }) => css`
    background-color: ${colors.primary.main};
    padding: ${spacing(2)};

    @media screen and (min-width: ${media.small}) and (max-width: ${media.medium}) {
      padding: ${spacing(2)} ${spacing(10)};
      align-self: end;
    }
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
