import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Service from '../pages/Service';
import NotFound from '../pages/NotFound';
import Report from '../pages/Report';


const Router = () => (
  <Routes>
    <Route exact path="/home" element={ <Home /> } />
    <Route exact path="/service" element={ <Service /> } />
    <Route exact path="/report" element={ <Report /> } />
    <Route exact path="/" element={ <Navigate to="/home" /> } />
    <Route path="*" element={ <NotFound /> } />
  </Routes>
);

export default Router;
