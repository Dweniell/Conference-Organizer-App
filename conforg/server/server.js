//IMPORT Class Files
import {Conference} from './conference.js';
import {User} from './user.js';
import {Article} from './article.js';
import {Review} from './review.js';

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
    const username = req.body.user
    const password = req.body.pass
    db.all(`select * from accounts where accUsername='${username}' and accPassword ='${password}'`,
    (err,rows)=>{
        if(err){
            res.send({err: err})
        }
        if(rows.length > 0){
            res.send({validation:true})
        }else{
            res.send({validation: false})
        }
    })
})

app.post('/registerUser',(req,res)=>{
    const username = req.body.user
    const password = req.body.pass
    const accType = req.body.accType
    db.all(`INSERT INTO accounts(accUsername, accPassword, accType) VALUES ('${username}','${password}','${accType}');
    COMMIT;`,
    (err)=>{console.log(err)})
    console.log('Added user')
})
app.listen(3001, ()=>console.log('Listening at port 3001'))
//commented this, messes with the login system
/*app.post('/create-conference', checkRole('organizer'), (req, res) => {
    const { id, name, organizer } = req.body;

    const newConference = new Conference(id, name, organizer);

    res.status(201).send({ message: "Conference created successfully", conference: newConference });
});*/

app.post('/conference/:conferenceId/add-author', (req, res) => {
    const conferenceId = req.params.conferenceId;

    const author = req.body.author;

    const conference = getConferenceById(conferenceId);

    conference.addAuthor(author);

    res.status(200).send({ message: "Author added successfully", conference });
});

app.put('/conference/:conferenceId/update', (req, res) => {
    const conferenceId = req.params.conferenceId;

    const { newName } = req.body;

    const conference = getConferenceById(conferenceId);
    
    conference.updateConferenceDetails(newName);

    res.status(200).send({ message: "Conference updated successfully", conference });
});
