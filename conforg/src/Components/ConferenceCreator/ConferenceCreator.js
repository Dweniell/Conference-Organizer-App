import React from "react";
import './ConferenceCreator.css'
import { useNavigate } from "react-router-dom";
function ConferenceCreator(){
    const nav = useNavigate()
    const handleClick = () =>{
        nav(-1)
    }
    return(
        <div className="CreateConference">
            <input type='text' placeholder="Conference name" className="ConfInputs"></input>
            <input type='date' className="ConfInputs"></input>
            <div className="ConferenceButtons">
                <button type='button' className="ConferenceButt Cancel" onClick={handleClick}>Cancel</button>
                <button type='button' className="ConferenceButt Add" onClick={handleClick}>Add Conference</button>
            </div>
        </div>
    )
}

export default ConferenceCreator