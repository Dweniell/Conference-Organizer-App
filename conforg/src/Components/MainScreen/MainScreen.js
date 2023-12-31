import {React} from 'react'
import './MainScreen.css'
import logo from '../../logo_actual.png';
import ConferenceTemplate from '../Conference/Conference'
import { useNavigate, useLocation } from 'react-router-dom'
import {User} from 'conforg/server/user.js';

function MainScreen(){
    const nav = useNavigate()
    const location = useLocation()
    let data = location.state
    const handleLogout = ()=>{
        nav('/')
    }
    const handleConference = ()=>{
        nav('/newconference')
    }
    const handleArticle = () =>{
        nav('/article')
    }
    const handleReview = () =>{
        nav('/review')
    }
    let user = new User()
    user=data.user
    //let i = 1
    return(
        <div className='MainScreen'>
            <div className='TopScreen'>
                <header className='Header'>
                    <img src={logo} className='MLogo' alt='logo'/>
                    <h1 className='WelcomeText' >Welcome, {user.Username}</h1>
                    <button type='button' className='LogoutBtn' onClick={handleLogout}>Logout</button>
                </header>
            </div>
            <div className='MidScreen'>
                <ul className='Conferences'>
                        <li className='ConferenceItem NextArticle'>←</li>
                        <li className='ConferenceItem'>
                            <ConferenceTemplate/>
                        </li>
                        <li className='ConferenceItem'>
                            <ConferenceTemplate/>
                        </li>
                        <li className='ConferenceItem'>
                            <ConferenceTemplate/>
                        </li>
                        <li className='ConferenceItem NextArticle'>→</li>
                    </ul>
            </div>
            <div className='BottomScreen'>
                    <button type='button' className='LogoutBtn'>Join conference</button>
                    <button type='button' className='LogoutBtn' onClick={handleArticle}>Add/Edit article</button>
                    <button type='button' className='LogoutBtn' onClick={handleReview}>Review article</button>
                    <button type='button' className='LogoutBtn'>Delete article</button>
                    <button type='button' className='LogoutBtn' onClick={handleConference}>Add conference</button>
            </div>
        </div>
    )
}

export default MainScreen