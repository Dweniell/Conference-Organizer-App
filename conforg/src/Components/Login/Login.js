import './Login.css';
import React from 'react'
import { useNavigate } from 'react-router-dom';
function Login(){
    const navig = useNavigate()
    const handleClickBack = () =>{
        navig(-1)
    }
    const handleContinue = () =>{
        navig('/main')
    }
    return(
        <div className='Login'>
          <header className='Login-header'>
            <input type='text' placeholder='username' className='inputs'></input>
            <input type='text' placeholder='password' className='inputs'></input>
            <div className='lButtons'>
              <button type='button' className='lButtonStyle b2'onClick={handleClickBack}>Cancel</button>
              <button type='button' className='lButtonStyle b1'onClick={handleContinue}>Continue</button>
            </div>
          </header>
        </div>
    )
}

export default Login