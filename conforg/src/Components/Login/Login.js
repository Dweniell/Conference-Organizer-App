import './Login.css';
import {React, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
function Login(){
    const [checkUser, setUser] = useState('')
    const [checkPass, setPass] = useState('')
    const navig = useNavigate()
    let data = {name: checkUser}
    const handleClickBack = () =>{
        navig(-1)
    }
    const handleContinue = () =>{
        navig('/main',{state:data})
    }
    
    const onFinish = () =>{

        axios.post('http://localhost:3001/validatePassword', {user:checkUser,pass:checkPass})
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
            <input type='text' placeholder='username' className='inputs' onChange={
              (e)=>{setUser(e.target.value)}
            }></input>
            <input type='text' placeholder='password' className='inputs'onChange={
              (e)=>{setPass(e.target.value)}
            }></input>
            <div className='lButtons'>
              <button type='button' className='lButtonStyle b2'onClick={handleClickBack}>Cancel</button>
              <button type='button' className='lButtonStyle b1'onClick={onFinish}>Continue</button>
            </div>
          </header>
        </div>
    )
}

export default Login