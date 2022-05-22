import React from "react";
import Form from "../components/form.jsx";
import { useNavigate } from 'react-router-dom';

function Cadaster() {

  const navigate = useNavigate();

  return(
    <>
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
    </>
  )
}

export default Cadaster;