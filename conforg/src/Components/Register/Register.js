import '../Login/Login.css';
import {React, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
function Register(){
    const navig = useNavigate()
    const [regUser, setRegUser] = useState('')
    const [regPass, setRegPass] = useState('')
    const handleClickBack = () =>{
        navig(-1)
    }
    const handleClickCont = () => {
      axios.post('http://localhost:3001/validatePassword', {user:regUser,pass:regPass})
          .then(res=>{
            if(res.data.validation){
              alert('Username already exists')
            }
            else{
              axios.post('http://localhost:3001/registerUser', {user:regUser, pass:regPass, accType:type})
              navig('/main')
            }
          })
    }
    let type = 'Z'
    return(
        <div className='Login'>
          <header className='Login-header'>
            <input type='text' placeholder='username' className='inputs' onChange={(e)=>setRegUser(e.target.value)}></input>
            <input type='text' placeholder='password' className='inputs'onChange={(e)=>setRegPass(e.target.value)}></input>
            <input type='text' placeholder='enter the password again' className='inputs'></input>
            <div className='rButtons'>
                <input type='radio' id='Author' name='option' onClick={()=>{type='A'}}></input>
                <label htmlFor='Author'>Author</label>
                <input type='radio' id='Organizer' name='option' onClick={()=>{type='O'}}></input>
                <label htmlFor='Organizer'>Organizer</label>
                <input type='radio' id='Reviewer' name='option' onClick={()=>{type='R'}}></input>
                <label htmlFor='Reviewer'>Reviewer</label>
            </div>
            <div className='lButtons'>
              <button type='button' className='lButtonStyle b2'onClick={handleClickBack}>Cancel</button>
              <button type='button' className='lButtonStyle b1'onClick={handleClickCont}>Continue</button>
            </div>
          </header>
        </div>
    )
}

export default Register