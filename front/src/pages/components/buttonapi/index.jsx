import React, { useContext } from 'react';
import CadasterContext from '../../../context/CadasterContext'

function ButtonApi({ cadaster }){

  const {
    btnDisabled,
    setBtnDisabled,
    btnDisabledCadaster,
    setBtnDisabledCadaster,
  } = useContext(CadasterContext)

  const disabledButton = () =>{

  }

  return(
    <>
      <button
        type='submit'
        disabled = { cadaster ? btnDisabledCadaster : btnDisabled }
      >
      { cadaster ? 'Submit' : 'Login'}
      </button>
    </>
  )
}

export default ButtonApi;