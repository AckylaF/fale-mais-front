import styled, { css } from 'styled-components';

const Container = styled.div(
  ({ theme: { colors, spacing }}) => css`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    background-color: rgba(33, 37, 41, .5);

    div{  
      background-color: ${colors.secondary};
      height: ${spacing(26)};
      width: ${spacing(70)};
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: ${colors.text.inverse};
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
  
    p{
      font-size: ${spacing(2.2)};
      margin: ${spacing(2)};
    }
    }
  `
)

const Close = styled.span(
  () => css`
    font-weight: bold;
    font-size: 1.1rem;
    position: absolute;
    right: 2%;
    top: 5%;
    cursor: pointer;
  `
)

export default function Modal({ valueWithPlan, valueWithoutPlan, fn}) {
  return (
    <Container>
      <div>
        <Close onClick={fn}>X</Close>
        <p>O valor da sua ligação com o plano FaleMais é R${valueWithPlan}</p>
        <p>O valor da sua ligação sem o plano FaleMais é R${valueWithoutPlan}</p>
      </div>
    </Container>
  )
}