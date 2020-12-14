import styled, { css } from 'styled-components';
import ActionButton from '../components/ActionButton';

import PhoneCall from '../assets/images/phone_call.svg';

const ImageContainer = styled.section(
  ({ theme: { colors, spacing }}) => css`
    background-color: ${colors.primary.main};
    padding: ${spacing(2)};
  `
)

const Image = styled.img(
  () => css`
    max-width: 100%;
    max-height: 100%;
  `
)

const FormContainer = styled.section(
  ({ theme: { colors, spacing }}) => css`
    background-color: ${colors.secondary};
    height: 100%;
    width: 100%;
    padding: ${spacing(10)};
  `
)

const Form = styled.form(
  ({ theme: { spacing, colors }}) => css`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: ${spacing(1)};

    input, select {
      padding: ${spacing(1)};
      font-size: ${spacing(2)};
      border-radius: 4px;
      margin-bottom: ${spacing(1)};
    }
  `
)

const Label = styled.label(
  ({ theme: { colors, spacing }}) => css`
    color: ${colors.text.inverse};
    text-transform: uppercase;
    font-size: ${spacing(1.8)};
    letter-spacing: 2px;
  `
)

export default function Home() {
  return (
    <>
      <ImageContainer>
        <Image src={PhoneCall} alt="Phone call"/>
      </ImageContainer>
      <FormContainer>
        <Form action="">
          <Label htmlFor="duration">Duração da chamada em minutos</Label>
          <input type="text" id="duration" name="duration" placeholder="Ex: 45" required />

          <Label htmlFor="originCode">Origem da ligação</Label>
          <select name="originCode" id="originCode" required >
            <option disabled selected value="">Selecione um DDD</option>
            <option value="011">011</option>
            <option value="016">016</option>
            <option value="017">017</option>
            <option value="018">018</option>
          </select>
          
          <Label htmlFor="destinationCode">Destino da ligação</Label>
          <select name="destinationCode" id="destinationCode" required >
            <option disabled selected value="">Selecione um DDD</option>
            <option value="011">011</option>
            <option value="016">016</option>
            <option value="017">017</option>
            <option value="018">018</option>
          </select>

          <Label htmlFor="phonePlan">Plano FaleMais</Label>
          <select name="phonePlan" id="phonePlan" required >
            <option disabled selected value="">Selecione um plano</option>
            <option value="30">FaleMais 30</option>
            <option value="60">FaleMais 60</option>
            <option value="120">FaleMais 120</option>
          </select>

          <ActionButton text="Calcular chamada" />

        </Form>
      </FormContainer>
    </>
  )
}