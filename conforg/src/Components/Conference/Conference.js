import {React, useState} from 'react'
import './Conference.css'
import axios from 'axios'

function ConferenceTemplate({prop}){
    const [confName, setName] = useState('Conference example')
    const [confDate, setDate] = useState(new Date())
    const getNameAndDate = () =>{
        axios.get(`http://localhost:3001/getConfData/${prop}`)
        .then(res=>{
            if(res.data.validation){
                setName(res.data.conf.name)
                setDate(res.data.conf.date)
            }
            else{
                setName('Conference example')
                setDate(new Date())
            }
        })
        
    }
    setTimeout(getNameAndDate, 10)
    return(
        <div className='Conf' tabIndex={1}>
            <div className='ConfName'>
                <p>{prop} {confName}</p>
            </div>
            <div className='ConfDate'>
                <p>Date: {confDate.toDateString}</p>
            </div>
            <div className='Articles'>
                <ul className='ArticleList'>
                    <li className='ArticleItem' tabIndex={2}> Article 1 test text</li>
                    <li className='ArticleItem' tabIndex={2}> Article 2 test text</li>
                    <li className='ArticleItem' tabIndex={2}>  Article 3 test text</li>
                </ul>
            </div>
            <div className='UDButtons'>
                <button type='button' className='CButtons'>↑</button>
                <button type='button' className='CButtons'>↓</button>
            </div>
        </div>
    )
}

export default ConferenceTemplate