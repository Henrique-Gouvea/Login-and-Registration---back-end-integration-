/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import ButtonApi from "../buttonapi";
import CadasterContext from "../../../context/CadasterContext";

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
        {' '}
        <input
          name="name-login"
          type="text"
          onChange={ (ele) => setNameLogin(
            ele.target.value,
          ) }
          value={ nameLogin }
        />
      </label>
      {cadaster
        ? (
        <p>
          { nameLogin.length > 2
        ? 'Accept'
        : 'Name length min 2' }
        </p>) : ''}
      <label htmlFor="password-login">
        Password
        {' '}
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
        <p>
          { passwordLogin.length > 5
          ? 'Accept'
          : 'Password length min 6' }
        </p>) : ''}
      
      {cadaster
        ? (
        <>
          <label htmlFor="password-confirm">
          Confirm Password
          {' '}
          <input
            type="password"
            name="password-confirm"
            onChange={ (ele) => setPasswordConfirm(
              ele.target.value,
            ) }
            value={ passwordConfirm }
          />
          </label>
          <p>
            { passwordConfirm &&(passwordConfirm === passwordLogin)
            ? 'Accept'
            : 'Confirm equal password' }
          </p>
        </>
        )
        :  ''}
       <ButtonApi cadaster= { cadaster }/>
    </form>
  )
}

export default Form;
