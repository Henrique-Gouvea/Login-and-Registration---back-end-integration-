import React, { useContext } from 'react';
import CadasterContext from '../../context/CadasterContext';


function Home(){

  const { nameLogin } = useContext(CadasterContext);

  return(
    <>
      <h1>Home!</h1>
      <h2>Welcome, {nameLogin} </h2>
      <p>Thank you for giving me this opportunity!</p>
    </>
  )
}

export default Home;