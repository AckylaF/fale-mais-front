import styled, { css } from 'styled-components';

export const Button = styled.button(
  ({ theme: { colors, spacing }}) => css`
    background-color: ${colors.primary.main};
    color: ${colors.text.button};
    padding: ${spacing(1)};
    font-size: ${spacing(1.8)};
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
    border-radius: 4px;
    cursor: pointer;
    transition: .35s;

    &:hover{
      background-color: #343434;
      color: ${colors.text.inverse};
    }
`)
  

export default function ActionButton({ type, text, fn }) {
  return (
    <Button onClick={fn} type={type} >
      {text}
    </Button>
  );
}
