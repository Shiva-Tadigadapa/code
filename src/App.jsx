import React from 'react';
import Sidebar from '../src/components/Sidebar';
import Details from '../src/components/Details';
import { Route, Routes } from 'react-router-dom';
import Dash from './components/Dash';

function App() {
  const gradient = `background: rgb(87,25,43);
   background: linear-gradient(0deg, rgba(87,25,43,1) 0%, rgba(15,21,73,0.9332107843137255) 100%, rgba(75,38,72,1) 100%);`;

  return (
   <Routes>

    <Route path="/" element={ <Dash /> } /> 
    <Route path="/details" element={ <Details /> } />
    </Routes>
  );
}

export default App;