import React, { useContext } from "react";
import ButtonApi from "../buttonapi";
import CadasterContext from "../../../context/CadasterContext";

function Form(){
  const {
    nameLogin,
    setNameLogin,
    passwordLogin,
    setPasswordLogin,
} = useContext(CadasterContext);

  return(
    <form>
      <label htmlFor="name-login">
        Name
        <input
          name="name-login"
          type="email"
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
      <ButtonApi />
    </form>
  )
}

export default Form;
