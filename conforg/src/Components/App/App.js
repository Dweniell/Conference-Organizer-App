import logo from '../../logo_actual.png';
import './App.css';
import React from 'react'
import {useNavigate} from "react-router-dom"

function App() {
  const nav = useNavigate()
  const handleClickL = () =>{
    nav('/login')
  }
  const handleClickR = () =>{
    nav('/register')
  }
  return (
      <div className="App">
          <header className='App-header'>
              <img src={logo} className="App-logo" alt="logo" />
              <button type='button' className='button but1' onClick={handleClickL}>Login</button>
              <button type='button' className='button but2'onClick={handleClickR}>Register</button>
          </header>
      </div>
      
  );
}

export default App;
