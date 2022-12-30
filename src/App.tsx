import './App.scss'
import Nav from './components/Nav';
import Home from './views/Home';
import LaureatesByCategory from './components/LaureatesByCategory';
import PrizeAmount from './components/PrizeAmount';
import TotalWinners from './components/TotalWinners';
import WinnersByGender from './components/WinnersByGender';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';


function App() {
	
  
  return (
    <div className="App">
      <Nav />
      <Routes>
		    <Route path='/' element={ <Home /> } />
		    <Route path='/prizePerYear' element={ <PrizeAmount /> } />
        <Route path='/winnersByCategory' element={ <LaureatesByCategory />  } />
        <Route path='/totalWinners' element={ <TotalWinners /> } />
        <Route path='/winnersByGender' element={ <WinnersByGender /> } />
      </Routes>
    </div>
  );
}

export default App
