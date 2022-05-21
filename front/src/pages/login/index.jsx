import React, { useContext } from "react";
import CadasterContext from "../../context/CadasterContext";
import { useNavigate } from 'react-router-dom';
import Form from "../components/form.jsx";

function Login() {
  const {
	setNameLogin,
	setPasswordLogin,
	setBtnDisabled,
  } = useContext(CadasterContext);
	
  const navigate = useNavigate()

  const buttonCadasterClick = () => {
	setPasswordLogin('')
	setNameLogin('')
	setBtnDisabled(true)
	navigate('/user/cadaster')
  }
	
	return(
		<>
			<div>
				<h1>Login</h1>
				<div>
					<Form/>
					<div>
						<p>Don't have an account?</p>
						<button
							type="submit"
							onClick={ buttonCadasterClick }
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
