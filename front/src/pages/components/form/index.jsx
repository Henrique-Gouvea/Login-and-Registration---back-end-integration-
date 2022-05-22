/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import ButtonApi from "../buttonapi";
import CadasterContext from "../../../context/CadasterContext";
import * as S from "./style"

function Form({ cadaster }) {
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
  }, [])

  return (
    <S.FormContainer>
      <form>
        <S.InputContainer>
          <input
            name="name-login"
            type="text"
            onChange={(ele) => setNameLogin(
              ele.target.value,
            )}
            value={nameLogin}
            placeholder="Name"
          />
          {cadaster
            ? (
              <p>
                {nameLogin.length > 2
                  ? 'Accept'
                  : 'Name length min 2'}
              </p>) : ''}
          <input
            type="password"
            name="password-login"
            onChange={(ele) => setPasswordLogin(
              ele.target.value,
            )}
            value={passwordLogin}
            placeholder="Password"
          />
          {cadaster
            ? (
              <p>
                {passwordLogin.length > 5
                  ? 'Accept'
                  : 'Password length min 6'}
              </p>) : ''}

          {cadaster
            ? (
              <>
                {' '}
                <input
                  type="password"
                  name="password-confirm"
                  onChange={(ele) => setPasswordConfirm(
                    ele.target.value,
                  )}
                  placeholder="Confirm Password"
                  value={passwordConfirm}
                />

                <p>
                  {passwordConfirm && (passwordConfirm === passwordLogin)
                    ? 'Accept'
                    : 'Confirm equal password'}
                </p>
              </>
            )
            : ''}
        </S.InputContainer>
        <ButtonApi cadaster={cadaster} />
      </form>
    </S.FormContainer>
  )
}

export default Form;
