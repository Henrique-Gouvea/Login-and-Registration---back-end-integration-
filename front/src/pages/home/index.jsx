import React, { useContext } from 'react';
import CadasterContext from '../../context/CadasterContext';
import * as S from './style'

function Home(){

  const { nameLogin } = useContext(CadasterContext);

  return(
    <S.HomeContainer>
      <h1>Home!</h1>
      <h2>Welcome, {nameLogin} </h2>
      <p>Thank you for giving me this opportunity!</p>
    </S.HomeContainer>
  )
}

export default Home;