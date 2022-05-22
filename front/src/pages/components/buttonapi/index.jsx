import React, { useContext } from 'react';
import CadasterContext from '../../../context/CadasterContext'
import { apiRequest } from '../../../services/api';
import { useNavigate } from 'react-router-dom';

function ButtonApi({ cadaster }){

  const {
    btnDisabled,
    // setBtnDisabled,
    btnDisabledCadaster,
    // setBtnDisabledCadaster,
    nameLogin,
    passwordLogin,
  } = useContext(CadasterContext)

  const navigate = useNavigate();

  const clickSubmitLogin = (event) =>{
    event.preventDefault();
    console.log(nameLogin);
    console.log(passwordLogin);
    apiRequest({ name: nameLogin, password: passwordLogin })
    .then((e) => e.ok
    ? (
        alert (`${e.user.name}, sucess `),
        navigate('/login')
      )
    : alert(e.why))
    .catch(function (err) {
      console.log(err);
    });
  }
  
  return(
    <>
      <button
        type='submit'
        onClick={ clickSubmitLogin }
        disabled = { cadaster ? btnDisabledCadaster : btnDisabled }
      >
      { cadaster ? 'Submit' : 'Login'}
      </button>
    </>
  )
}

export default ButtonApi;