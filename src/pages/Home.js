import { useState } from "react";
import styled, { css } from "styled-components";
import api from "../services/api";
import qs from 'querystring'

import PhoneCall from "../assets/images/phone_call.svg";
import ActionButton from "../components/ActionButton";
import Modal from "../components/Modal";

const ImageContainer = styled.section(
  ({ theme: { colors, spacing } }) => css`
    background-color: ${colors.primary.main};
    padding: ${spacing(2)};
  `
);

const Image = styled.img(
  () => css`
    max-width: 100%;
    max-height: 100%;
  `
);

const FormContainer = styled.section(
  ({ theme: { colors, spacing } }) => css`
    background-color: ${colors.secondary};
    height: 100%;
    width: 100%;
    padding: ${spacing(10)};
  `
);

const Form = styled.form(
  ({ theme: { spacing, colors } }) => css`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: ${spacing(1)};

    input,
    select {
      padding: ${spacing(1)};
      font-size: ${spacing(2)};
      border-radius: 4px;
      margin-bottom: ${spacing(1)};
    }
  `
);

const Label = styled.label(
  ({ theme: { colors, spacing } }) => css`
    color: ${colors.text.inverse};
    text-transform: uppercase;
    font-size: ${spacing(1.8)};
    letter-spacing: 2px;
  `
);

export default function Home() {
  const [duration, setDuration] = useState(0);
  const [originCode, setOriginCode] = useState("");
  const [destinationCode, setDestinationCode] = useState("");
  const [planFranchise, setPlanFranchise] = useState(0);
  const [result, setResult] = useState(false);

  const handleCalculation = async (e) => {
    e.preventDefault();

    const data = {
      duration: Number(duration),
      originCode,
      destinationCode,
      planFranchise: Number(planFranchise),
    };

    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }

    try {
      await api.post("fee", qs.stringify(data), config)
      .then(response => setResult(response.data))
      
    } catch (error) {
      throw error;
    }
  };

  const closeModal = () => {
    setResult(false);
  }

  return (
    <>
      <ImageContainer>
        <Image src={PhoneCall} alt="Phone call" />
      </ImageContainer>
      <FormContainer>
        <Form onSubmit={handleCalculation} >
          <Label htmlFor="duration">Duração da chamada em minutos</Label>
          <input
            type="number"
            id="duration"
            name="duration"
            placeholder="Ex: 45"
            onChange={e => setDuration(e.target.value)}
            required
          />

          <Label htmlFor="originCode">Origem da ligação</Label>
          <select 
            name="originCode" 
            id="originCode" 
            onChange={e => setOriginCode(e.target.value)}
            defaultValue={'default'}
            required
          >
            <option disabled value="default">
              Selecione um DDD
            </option>
            <option value="011">011</option>
            <option value="016">016</option>
            <option value="017">017</option>
            <option value="018">018</option>
          </select>

          <Label htmlFor="destinationCode">Destino da ligação</Label>
          <select 
            name="destinationCode" 
            id="destinationCode" 
            onChange={e => setDestinationCode(e.target.value)}
            defaultValue={'default'}
            required
          >
            <option disabled value="default">
              Selecione um DDD
            </option>
            <option value="011">011</option>
            <option value="016">016</option>
            <option value="017">017</option>
            <option value="018">018</option>
          </select>

          <Label htmlFor="planFranchise">Plano FaleMais</Label>
          <select 
            name="planFranchise" 
            id="planFranchise" 
            onChange={e => setPlanFranchise(e.target.value)}
            defaultValue={'default'}
            required
          >
            <option disabled value="default">
              Selecione um plano
            </option>
            <option value="30">FaleMais 30</option>
            <option value="60">FaleMais 60</option>
            <option value="120">FaleMais 120</option>
          </select>

          <ActionButton type="submit" text="Calcular chamada" />
        </Form>
      </FormContainer>
      { result !== false ? 
          <Modal 
            valueWithPlan={result.valueWithPhonePlan}
            valueWithoutPlan={result.valueWithoutPhonePlan}
            fn={closeModal} 
          /> 
        : 
          null 
      }
    </>
  );
}
