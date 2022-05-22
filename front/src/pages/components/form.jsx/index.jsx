import React, { useContext, useEffect } from "react";
import ButtonApi from "../buttonapi";
import CadasterContext from "../../../context/CadasterContext";
import { useNavigate } from 'react-router-dom';

function Form({ cadaster }){
  const {
    nameLogin,
    setNameLogin,
    passwordLogin,
    setPasswordLogin,
    passwordConfirm,
    setPasswordConfirm,
    setBtnDisabled,
    setBtnDisabledCadaster,
  } = useContext(CadasterContext);

  const navigate = useNavigate();

  useEffect(() => {
    setNameLogin('');
    setPasswordLogin('');
    setBtnDisabled(true);
    setPasswordConfirm('');
    setBtnDisabledCadaster(true);
  },[])

  return(
    <form>
      <label htmlFor="name-login">
        Name
        <input
          name="name-login"
          type="text"
          onChange={ (ele) => setNameLogin(
            ele.target.value,
          ) }
          value={ nameLogin }
        />
      </label>
      <label htmlFor="password-login">
        Password
        <input
          type="password"
          name="password-login"
          onChange={ (ele) => setPasswordLogin(
            ele.target.value,
          ) }
          value={ passwordLogin }
        />
      </label>
      {cadaster
        ? (
        <>
          <label htmlFor="password-confirm">
          Confirm Password
          <input
            type="password"
            name="password-confirm"
            onChange={ (ele) => setPasswordConfirm(
              ele.target.value,
            ) }
            value={ passwordConfirm }
          />
          </label>
        </>
        )
        :  ''}
      <>  
        <ButtonApi cadaster= { cadaster }/>
        {cadaster
          ?(
          <button
            type="submit"
            onClick={ () => navigate('/login') }
          >Back Login</button>)
          : ''
        }
      </>
    </form>
  )
}

export default Form;
