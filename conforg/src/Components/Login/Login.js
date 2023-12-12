import './Login.css';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
function Login(){
    const navig = useNavigate()
    const handleClickBack = () =>{
        navig(-1)
    }
    const handleContinue = () =>{
        navig('/main')
    }
    
    const onFinish = () =>{
      const username = document.getElementById('username').value
      const password = document.getElementById('password').value
        axios.post('http://localhost:3001/validatePassword', {username,password})
          .then(res=>{
            if(res.data.validation){
              handleContinue()
            }
            else{
              alert('Invalid username or password')
            }
          })
    }
    return(
        <div className='Login'>
          <header className='Login-header'>
            <input type='text' placeholder='username' className='inputs' id='username'></input>
            <input type='text' placeholder='password' className='inputs' id='password'></input>
            <div className='lButtons'>
              <button type='button' className='lButtonStyle b2'onClick={handleClickBack}>Cancel</button>
              <button type='button' className='lButtonStyle b1'onClick={onFinish}>Continue</button>
            </div>
          </header>
        </div>
    )
}

export default Login