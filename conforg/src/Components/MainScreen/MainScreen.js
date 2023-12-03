import React from 'react'
import './MainScreen.css'
import logo from '../../placeholder.jpg';
import { useNavigate } from 'react-router-dom'

function MainScreen(){
    const nav = useNavigate()
    const handleLogout = ()=>{
        nav('/')
    }
    return(
        <div className='MainScreen'>
            <div className='TopScreen'>
                <header className='Header'>
                    <img src={logo} className='MLogo' alt='logo'/>
                    <h1 className='WelcomeText'>Welcome, user</h1>
                    <button type='button' className='LogoutBtn' onClick={handleLogout}>Logout</button>
                </header>
            </div>
            <div className='MidScreen'>
            </div>
            <div className='BottomScreen'>
                    <button type='button' className='LogoutBtn'>Join conference</button>
                    <button type='button' className='LogoutBtn'>Add/Edit article</button>
                    <button type='button' className='LogoutBtn'>Review article</button>
                    <button type='button' className='LogoutBtn'>Delete article</button>
                    <button type='button' className='LogoutBtn'>Add conference</button>
            </div>
        </div>
    )
}

export default MainScreen