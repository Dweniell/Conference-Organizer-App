import {React, useState, useEffect} from 'react'
import './MainScreen.css'
import logo from '../../logo_actual.png';
import ConferenceTemplate from '../Conference/Conference'
import { useNavigate, useLocation } from 'react-router-dom'
//import {User} from 'conforg/server/user.js';

function MainScreen(){

    const location = useLocation()
    const user = location.state
    const nav = useNavigate()
    const handleLogout = ()=>{
        nav('/')
    }
    const handleConference = ()=>{
        if(user.permission==='O'){
            nav('/newconference')
        }
        else{
            alert('Only organizers can create new conferences')
        }
    }
    const handleArticle = () =>{
        nav('/article', {state: user})
    }
    const handleReview = () =>{
        if(user.permission==='R'){
            nav('/review')
        }
        else{
            alert('Only reviewers can add reviews')
        }
    }
    
    let indexer = 0
    return(
        <div className='MainScreen'>
            <div className='TopScreen'>
                <header className='Header'>
                    <img src={logo} className='MLogo' alt='logo'/>
                    <h1 className='WelcomeText' >Welcome, {user.username} </h1>
                    <button type='button' className='LogoutBtn' onClick={handleLogout}>Logout</button>
                </header>
            </div>
            <div className='MidScreen'>
                <ul className='Conferences'>
                        <li className='ConferenceItem NextArticle' onClick={(indexer)=>{
                            if(indexer>0){
                                indexer--
                            }else if(indexer===0){
                                indexer=0
                            }
                        }}>←</li>
                        <li className='ConferenceItem'>
                            <ConferenceTemplate prop={indexer}/>
                        </li>
                        <li className='ConferenceItem'>
                            <ConferenceTemplate prop={indexer+1}/>
                        </li>
                        <li className='ConferenceItem'>
                            <ConferenceTemplate prop={indexer+2}/>
                        </li>
                        <li className='ConferenceItem NextArticle' onClick={(indexer)=>{indexer++; console.log(indexer)}}>→</li>
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