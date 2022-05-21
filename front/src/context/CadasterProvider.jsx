import React, { useState, useEffect } from 'react';
import CadasterContext from './CadasterContext';

function CadasterProvider({ children }) {
  const [ nameLogin, setNameLogin ] = useState('');
  const [ passwordLogin, setPasswordLogin ] = useState('');
  const [ passwordConfirm, setPasswordConfirm ] = useState('');

  useEffect(() => {
    
  }, []);

  const stateValue = {
    nameLogin,
    setNameLogin,
    passwordLogin,
    setPasswordLogin,
    passwordConfirm,
    setPasswordConfirm,
  };

  return (
    <CadasterContext.Provider value={ stateValue }>
      {children}
    </CadasterContext.Provider>

  );
}

export default CadasterProvider;