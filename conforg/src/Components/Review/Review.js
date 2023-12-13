import React from "react";
import { useNavigate } from "react-router-dom";
import './Review.css'

function Review(){
    const nav = useNavigate()
    const handleClick = () =>{
        nav(-1)
    }
    return(
        <div className="Review">
            <div className="ReviewUnmod">
                <input type='text' placeholder="Article title" className="ReviewTitle"disabled></input>
                <textarea placeholder="Article content"className="ReviewContent" disabled></textarea>
            </div>
            <textarea placeholder="Write your review here" className="ReviewContent"></textarea>
            <div className="ReviewButtons">
                <button type='button' className='ReviewButt RevCancel' onClick={handleClick}>Cancel</button>
                <button type='button' className='ReviewButt RevSend'onClick={handleClick}>Send feedback</button>
                <button type='button' className='ReviewButt RevApprove'onClick={handleClick}>Approve</button>
            </div>
        </div>
    )
}
export default Review