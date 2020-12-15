import { useReducer } from "react";
import api from "../../services/api";
import qs from "querystring";

//COMPONENTS
import { ImageContainer, Image, FormContainer } from "./styles";
import Form from "../../components/patterns/Form";
import PhoneCall from "../../assets/images/phone_call.svg";
import Modal from "../../components/Modal";

export const ACTIONS = {
  SET_DURATION: "set-duration",
  SET_ORIGIN_CODE: "set_origin_code",
  SET_DESTINATION_CODE: "set_destination_code",
  SET_PLAN_FRANCHISE: "set_plan_franchise",
  SET_RESULT: "set_result",
};

function reducer(call, action) {
  switch (action.type) {
    case ACTIONS.SET_DURATION:
      return { ...call, duration: action.payload.duration };

    case ACTIONS.SET_ORIGIN_CODE:
      return { ...call, originCode: action.payload.originCode };

    case ACTIONS.SET_DESTINATION_CODE:
      return { ...call, destinationCode: action.payload.destinationCode };

    case ACTIONS.SET_PLAN_FRANCHISE:
      return { ...call, planFranchise: action.payload.planFranchise };

    case ACTIONS.SET_RESULT:
      return { ...call, result: action.payload.result };

    default:
      return call;
  }
}

export default function Home() {
  const [call, dispatch] = useReducer(reducer, {
    duration: 0,
    originCode: "",
    destinationCode: "",
    planFranchise: 0,
    result: false,
  });

  const calculate = async () => {
    const data = {
      duration: Number(call.duration),
      originCode: call.originCode,
      destinationCode: call.destinationCode,
      planFranchise: Number(call.planFranchise),
    };

    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };

    try {
      await api
        .post("fee", qs.stringify(data), config)
        .then((response) =>
          dispatch({
            type: ACTIONS.SET_RESULT,
            payload: { result: response.data },
          })
        );
    } catch (error) {
      throw error;
    }
  };

  return (
    <>
      <ImageContainer>
        <Image src={PhoneCall} alt="Phone call" />
      </ImageContainer>
      <FormContainer>
        <Form dispatch={dispatch} calculate={calculate} />
      </FormContainer>
      {call.result !== false ? (
        <Modal
          valueWithPlan={call.result.valueWithPhonePlan}
          valueWithoutPlan={call.result.valueWithoutPhonePlan}
          dispatch={dispatch}
        />
      ) : null}
    </>
  );
}
