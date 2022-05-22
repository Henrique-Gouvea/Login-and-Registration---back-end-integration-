import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Cadaster from '../cadaster';
import Home from '../home';
import Login from '../login';
import NotFound from '../notfound';

function RoutesApp(){
  return(
    <Routes>
      <Route exact path="/" element={ <Login/> } />
      <Route exact path="/login" element={ <Login/> } />
      <Route exact path="/home" element={ <Home/> } />
			<Route exact path="/user/cadaster" element={ <Cadaster/> } />
			<Route path="" element={ <NotFound/> } />
    </Routes>
  )
}

export default RoutesApp;
