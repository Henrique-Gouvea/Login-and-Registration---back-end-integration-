import React, { useContext } from 'react';
import CadasterContext from '../../../context/CadasterContext'
import { apiRequest } from '../../../services/api';
import { useNavigate } from 'react-router-dom';
import * as yup from "yup";
import userSchema from "../../../validations/UserValidation";

function ButtonApi({ cadaster }){

  const {
    btnDisabled,
    btnDisabledCadaster,
    nameLogin,
    passwordLogin,
    passwordConfirm,
  } = useContext(CadasterContext)

  const navigate = useNavigate();

  const validate = async () => {
    let formData = {
      name: nameLogin,
      password: passwordLogin,
      confirmPassword: passwordConfirm,
    }
    console.log(`${nameLogin} ${passwordLogin} ${passwordConfirm}`);
    const isValid = await userSchema.isValid(formData);
    console.log(isValid);
  }

  const clickSubmitLogin = (event) =>{
    event.preventDefault();
    validate();
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