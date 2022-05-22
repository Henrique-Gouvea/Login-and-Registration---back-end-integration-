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
    apiRequest({ name: nameLogin, password: passwordLogin }, cadaster)
    .then((e) => {
      if (e.ok) {
        if (cadaster) {
          alert (`${e.user.name}, sucess `)
          navigate('/login')
        } else navigate('/home');
      } else alert(e.why);
    })
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