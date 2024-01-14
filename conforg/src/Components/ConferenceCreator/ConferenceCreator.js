import {React,useState} from "react";
import './ConferenceCreator.css'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
function ConferenceCreator(){
    const [checkName, setName] = useState('')
    const [checkDate, setDate] = useState('')
    const nav = useNavigate()
    const handleClick = () =>{
        nav(-1)
    }
    const handleClickCont = () =>{

        axios.post(`http://localhost:3001/createConference/${checkName}/${checkDate}`)
        console.log('conference creator')
        handleClick()
    }
    return(
        <div className="CreateConference">
            <input type='text' placeholder="Conference name" className="ConfInputs" onChange={
              (e)=>{setName(e.target.value)}
            }></input>
            <input type='date' className="ConfInputs"onChange={
              (e)=>{setDate(e.target.value)}
            }></input>
            <div className="ConferenceButtons">
                <button type='button' className="ConferenceButt Cancel" onClick={handleClick}>Cancel</button>
                <button type='button' className="ConferenceButt Add" onClick={handleClickCont}>Add Conference</button>
            </div>
        </div>
    )
}


export default ConferenceCreator