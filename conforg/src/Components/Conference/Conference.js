import React from 'react'
import './Conference.css'
function ConferenceTemplate(){
    return(
        <div className='Conf' tabIndex={1}>
            <div className='ConfName'>
                <p>Conference name</p>
            </div>
            <div className='ConfDate'>
                <p>Date: 00/00/0000</p>
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