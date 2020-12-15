import styled, { css } from "styled-components";

import { ACTIONS } from "../../pages/Home/index";
import ActionButton from "../../components/ActionButton";

const FormContainer = styled.form(
  ({ theme: { spacing } }) => css`
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

export default function Form({ dispatch, calculate }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    calculate();
  };

  return (
    <>
      <FormContainer onSubmit={handleSubmit}>
        <Label htmlFor="duration">Duração da chamada em minutos</Label>
        <input
          type="number"
          id="duration"
          name="duration"
          placeholder="Ex: 45"
          onChange={(e) =>
            dispatch({
              type: ACTIONS.SET_DURATION,
              payload: { duration: e.target.value },
            })
          }
          required
        />

        <Label htmlFor="originCode">Origem da ligação</Label>
        <select
          name="originCode"
          id="originCode"
          onChange={(e) =>
            dispatch({
              type: ACTIONS.SET_ORIGIN_CODE,
              payload: { originCode: e.target.value },
            })
          }
          defaultValue={"default"}
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
          onChange={(e) =>
            dispatch({
              type: ACTIONS.SET_DESTINATION_CODE,
              payload: { destinationCode: e.target.value },
            })
          }
          defaultValue={"default"}
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
          onChange={(e) =>
            dispatch({
              type: ACTIONS.SET_PLAN_FRANCHISE,
              payload: { planFranchise: e.target.value },
            })
          }
          defaultValue={"default"}
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
      </FormContainer>
    </>
  );
}
