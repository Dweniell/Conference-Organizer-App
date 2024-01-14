import {React,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './Article.css'
import axios from 'axios'
function Article(){
    const nav = useNavigate()
    const [checkTitle, setTitle] = useState('')
    const [checkContent,setContent] = useState('')
    //const [checkauthorId,setauthorId] = useState('')

    const handleBut = () =>{
        nav(-1)
    }
    const handleButCont = () =>{
        //axios.post(`http://localhost:3001/createArticle/${checkTitle}/${checkContent}/${checkauthorId}`)
        axios.post(`http://localhost:3001/createArticle/${checkTitle}/${checkContent}`)
        console.log('article creator')
        handleBut()
    }
    return(
        <div className='Article'>
            <div className='ArticleInputs'>
                <input type='text' placeholder='Title' className='ArticleInput' onChange={(e)=>{setTitle(e.target.value)}}></input>
                <textarea placeholder='Write your article here' className='ArticleInput' onChange={(e)=>{setContent(e.target.value)}}></textarea>
            </div>
            <div className='ArticleButtons'>
                <button type='button' className='ArticleButt ArtCancel' onClick={handleBut}>Cancel</button>
                <button type='button' className='ArticleButt ArtSave'onClick={handleButCont}>Save</button>
            </div>
        </div>
    )
}

export default Article