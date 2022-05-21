import React, { useState, useEffect } from 'react';
import CadasterContext from './CadasterContext';

function CadasterProvider({ children }) {
  const [ nameLogin, setNameLogin ] = useState('');
  const [ passwordLogin, setPasswordLogin ] = useState('');
  const [ passwordConfirm, setPasswordConfirm ] = useState('');
  const [ btnDisabled, setBtnDisabled ] = useState(true);
  const [ btnDisabledCadaster, setBtnDisabledCadaster ] = useState(true);
  const MIN_LENGTH_NAME = 2;
  const MIN_LENGTH_PASSWORD = 5;

  useEffect(() => {
    if (
      nameLogin.length > MIN_LENGTH_NAME
      && passwordLogin.length > MIN_LENGTH_PASSWORD
    ) { 
        if (passwordLogin === passwordConfirm) {
          setBtnDisabledCadaster(false)
        } else setBtnDisabledCadaster(true)
        setBtnDisabled(false)
    } else setBtnDisabled(true)
  }, [nameLogin, passwordLogin, passwordConfirm]);

  const stateValue = {
    nameLogin,
    setNameLogin,
    passwordLogin,
    setPasswordLogin,
    passwordConfirm,
    setPasswordConfirm,
    btnDisabled,
    setBtnDisabled,
    btnDisabledCadaster,
    setBtnDisabledCadaster,
  };

  return (
    <CadasterContext.Provider value={ stateValue }>
      {children}
    </CadasterContext.Provider>

  );
}

export default CadasterProvider;