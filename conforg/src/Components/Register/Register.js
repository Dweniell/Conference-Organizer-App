import '../Login/Login.css';
import React from 'react'
import { useNavigate } from 'react-router-dom';
function Register(){
    const navig = useNavigate()
    const handleClickBack = () =>{
        navig(-1)
    }
    return(
        <div className='Login'>
          <header className='Login-header'>
            <input type='text' placeholder='username' className='inputs'></input>
            <input type='text' placeholder='password' className='inputs'></input>
            <input type='text' placeholder='enter the password again' className='inputs'></input>
            <div className='rButtons'>
                <input type='radio' id='Author' name='option'></input>
                <label htmlFor='Author'>Author</label>
                <input type='radio' id='Organizer' name='option'></input>
                <label htmlFor='Organizer'>Organizer</label>
                <input type='radio' id='Reviewer' name='option'></input>
                <label htmlFor='Reviewer'>Reviewer</label>
            </div>
            <div className='lButtons'>
              <button type='button' className='lButtonStyle b2'onClick={handleClickBack}>Cancel</button>
              <button type='button' className='lButtonStyle b1'>Continue</button>
            </div>
          </header>
        </div>
    )
}

export default Register