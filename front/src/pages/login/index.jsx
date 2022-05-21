import React from "react";
import ButtonApi from "../components/buttonapi";

function Login() {
    return(
      <>
        <h1>Login</h1>
        <form>
          <label htmlFor="name-login">
            Name
            <input
              name="name-login"
              type="email"
            //   onChange={ (ele) => setNameLogin(
            //     ele.target.value,
            //   ) }
            //   value={ nameLogin }
            />
          </label>
          <label htmlFor="password-login">
            Password
            <input
              type="password"
              name="password-login"
            //   onChange={ (ele) => setPasswordLogin(
            //     ele.target.value,
            //   ) }
            //   value={ passwordLogin }
            />
          </label>
          <ButtonApi />
        </form>
      </>
    )
  }
  
  export default Login;