import styled, { css } from 'styled-components';

export const Button = styled.button(
  ({ theme: { colors, spacing }}) => css`
    background-color: ${colors.primary.main};
    color: ${colors.text.button};
    padding: ${spacing(2)};
    width: 90%;
    font-size: ${spacing(2)};
    font-weight: bold;
    border-radius: 4px;
    cursor: pointer;
    transition: .35s;

    &:hover{
      background-color: #343434;
      color: ${colors.text.inverse};
    }
`)
  

export default function ActionButton({ text, fn }) {
  return (
    <Button onClick={fn} type="button">
      {text}
    </Button>
  );
}
