const express = require('express')
const app = express()
const cors = require('cors')
const sqlite3 = require('sqlite3').verbose()


app.use(cors())
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin',"*")
    next()
})
app.use(express.json())

let db = new sqlite3.Database('auth.db', (err)=>{
    if(err){
        console.error(err.message)
    }
    console.log('Connected to the access db.')
})

app.post('/validatePassword',(req, res)=>{
    const {username, password} = req.body

    db.all(`select * from authentication where username='${username}' and password = '${password}'`,
    (err,rows)=>{
        if(err){
            console.error(err.message)
        }
        if(rows.length > 0){
            res.send({validation:true})
        }else{
            res.send({validation: false})
        }
    })
})
app.listen(3001, ()=>console.log('Listening at port 3001'))