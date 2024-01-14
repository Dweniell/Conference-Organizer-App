import {React, useState, useEffect} from 'react'
import './MainScreen.css'
import logo from '../../logo_actual.png';
import ConferenceTemplate from '../Conference/Conference'
import { useNavigate, useLocation } from 'react-router-dom'
//import {User} from 'conforg/server/user.js';

function MainScreen(){

    const [type,setType]=useState('user')

    const location = useLocation()
    let data = location.state
    useEffect(()=>{
        if(data.type==='O'){
            setType('organizer')
        }
        if(data.type==='A'){
            setType('author')
        }
        if(data.type==='R'){
            setType('reviewer')
        }
    },[])
    const nav = useNavigate()
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
    
    //let user = new User()
    //user=data.user
    //let i = 1
    return(
        <div className='MainScreen'>
            <div className='TopScreen'>
                <header className='Header'>
                    <img src={logo} className='MLogo' alt='logo'/>
                    <h1 className='WelcomeText' >Welcome, {type} {data.name}</h1>
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