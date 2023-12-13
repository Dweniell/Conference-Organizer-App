import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Article.css'

function Article(){
    const nav = useNavigate()
    const handleBut = () =>{
        nav(-1)
    }
    return(
        <div className='Article'>
            <div className='ArticleInputs'>
                <input type='text' placeholder='Title' className='ArticleTitle'></input>
                <textarea placeholder='Write your article here' className='ArticleContent'></textarea>
            </div>
            <div className='ArticleButtons'>
                <button type='button' className='ArticleButt ArtCancel' onClick={handleBut}>Cancel</button>
                <button type='button' className='ArticleButt ArtSave'onClick={handleBut}>Save</button>
            </div>
        </div>
    )
}

export default Article