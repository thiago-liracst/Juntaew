import React from 'react';

import logoImg from './assets/DathApp.png';

import './global.css';

import Routes from './routes';

function App() {
  return (
    <div className="container">
      <img src={logoImg} alt="DathApp" className="logo"/>
      
      <Routes />  
      
    </div>
  );
}

export default App;
