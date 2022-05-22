import React, { useContext } from "react";
import CadasterContext from "../../context/CadasterContext";
import { useNavigate } from 'react-router-dom';
import Form from "../components/form";
import * as S from './style'

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

	return (
		<S.LoginContainer>
			<h1>Login</h1>
			<div>
				<Form />
				<div>
					<p>Don't have an account?</p>
					<button
						type="submit"
						onClick={buttonCadasterClick}
					>
						Sign up
					</button>
				</div>
			</div>
		</S.LoginContainer>
	)
}

export default Login;
