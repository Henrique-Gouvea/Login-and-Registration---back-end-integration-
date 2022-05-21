import React, { useContext } from "react";
import CadasterContext from "../../context/CadasterContext";
import ButtonApi from "../components/buttonapi";
import { useNavigate } from 'react-router-dom';

function Login() {
	const {
			nameLogin,
			setNameLogin,
			passwordLogin,
			setPasswordLogin,
  } = useContext(CadasterContext);
	
	const navigate = useNavigate()
	
	return(
		<>
			<div>
				<h1>Login</h1>
				<div>
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
					<div>
						<p>Don't have an account?</p>
						<button
							type="submit"
							onClick={ () => navigate('/user/cadaster')}
						>
							Sign up
						</button>
					</div>
				</div>
			</div>
		</>
	)
}
  
  export default Login;
