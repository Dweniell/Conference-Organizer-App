import {React,useState} from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import './Article.css'
import axios from 'axios'
function Article(){
    const nav = useNavigate()
    const location = useLocation()
    const user = location.state
    const [checkTitle, setTitle] = useState('')
    const [checkContent,setContent] = useState('')

    const handleBut = () =>{
        nav(-1)
    }
    const handleButCont = () =>{
        axios.post(`http://localhost:3001/createArticle/${checkTitle}/${checkContent}/${user.id}`)
        .then(res=>{
            if(res.data.validation){
                handleBut()
            }
        })
        console.log('article creator')
    }
    return(
        <div className='Article'>
            <div className='ArticleInputs'>
                <input type='text' placeholder='Title' className='ArticleTitle' onChange={(e)=>{setTitle(e.target.value)}}></input>
                <textarea placeholder='Write your article here' class='ArticleContent' onChange={(e)=>{setContent(e.target.value)}}></textarea>
            </div>
            <div className='ArticleButtons'>
                <button type='button' className='ArticleButt ArtCancel' onClick={handleBut}>Cancel</button>
                <button type='button' className='ArticleButt ArtSave'onClick={handleButCont}>Save</button>
            </div>
        </div>
    )
}

export default Article