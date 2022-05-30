import React, { useContext } from 'react';
import CadasterContext from '../../context/CadasterContext';
import * as S from './style'
import { useNavigate } from 'react-router-dom';

function Home(){

  const { nameLogin } = useContext(CadasterContext);
  const navigate = useNavigate();

  return(
    <S.HomeContainer>
      <h1>Home!</h1>
      <h2>Welcome, {nameLogin} </h2>
      <button
        onClick={ () => navigate('/login') }
        type="submit"
      >
      Quit
      </button>
    </S.HomeContainer>
  )
}

export default Home;