import './Login.css';
import {React, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
//import '../../../server/user.js'
function Login(){
    const [checkUser, setUser] = useState('')
    const [checkPass, setPass] = useState('')
    const navig = useNavigate()
    const handleClickBack = () =>{
        navig(-1)
    }
    
    const onFinish = () =>{

        axios.get(`http://localhost:3001/validatePassword/${checkUser}/${checkPass}`)
          .then(res=>{
            let user = res.data.userdata
            if(res.data.validation){
              console.log('Exists!')
              navig('/main',{state:user})
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