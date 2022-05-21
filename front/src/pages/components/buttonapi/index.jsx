import React from 'react';

function ButtonApi({ cadaster }){
  return(
    <>
      <button
        type='submit'
      >
      { cadaster ? 'Submit' : 'Login'}
      </button>
    </>
  )
}

export default ButtonApi;