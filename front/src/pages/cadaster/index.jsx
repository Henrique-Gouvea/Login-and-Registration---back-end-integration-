import React from "react";
import Form from "../components/form";
import { useNavigate } from 'react-router-dom';
import * as S from './style'

function Cadaster() {

  const navigate = useNavigate();

  return(
    <S.CadasterContainer>
      <div>
        <h1>Create Account</h1>
      </div>
      <div>
        <Form cadaster = 'cadaster'/>
        <button
            type="submit"
            onClick={ () => navigate('/login') }
        >
          Back Login
        </button>
      </div>
      </S.CadasterContainer>
  )
}

export default Cadaster;