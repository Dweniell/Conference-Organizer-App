//IMPORT Class Files
//import {Conference} from './conference.js';
//import {User} from './user.js';
//import {Article} from './article.js';
//import {Review} from './review.js';

const express = require('express')
const app = express()

const {Sequelize,DataTypes} = require('sequelize')

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.db'
  });
const Users =sequelize.define('Users',{
id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    primaryKey:true,
    defaultValue:0
},
username:{
type:DataTypes.STRING,
allowNull:false,
unique:true


},
password:{
    type:DataTypes.STRING,
allowNull:false

},
permission:{
    type:DataTypes.STRING(1),
    allowNull:false
}


})
sequelize.sync({ alter: true })

const cors = require('cors')
const sqlite3 = require('sqlite3').verbose()
app.use(cors())
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin',"*")
    next()
})
app.use(express.json())

async function test(){
const jane = await Users.create({username:"Jon",password:"does",permission:"O"})

console.log(jane)
}
//test()
async function test2(){
const users =await Users.findByPk(0)
console.log(users instanceof Users);
console.log("All users:", JSON.stringify(users));
}
test2()



// let db = new sqlite3.Database('auth.db', (err)=>{
//     if(err){
//         console.error(err.message)
//     }
//     console.log('Connected to the access db.')
// })


//userArray
// let userArray=[]
// let alphabet=[]
// let user = new User(1,'asdf','asdfadf','O')

// db.all('select * from accounts',(err,rows)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         let i=0
//         rows.forEach(function(row)
//         {
//             //console.log(userArray.length)
//             user.setUser(row.accIndex,row.accUsername,row.accPassword,row.accType)
//             userArray.push(user)
//             alphabet.push({letter:"a"})
//             console.log(userArray[i])
//             i++            
//         })


        
//         console.log(userArray[3])
//     }
// }
// );

// console.log(userArray[3])

// functio=()=>{
//     for(let i=0;i<alphabet.length;i++){
//         console.log(alphabet[i])
        
//     }
// }

// functio();




app.listen(3001, ()=>console.log('Listening at port 3001'))

app.get('/validatePassword/:username/:password', async (req, res, next)=>{
    const users = await Users.findAll({where: {username: req.params.username, password: req.params.password}})
    if (users.length>0){
        res.json({validation:true})
        //res.send({validation:true, acc:{name:user.username, type:user.permission, index:user.id}})
    }
    else{
        res.json({validation: false})
    }
    
})
    

/*
    

app.post('/registerUser',(req,res)=>{
    const username = req.body.user
    const password = req.body.pass
    const accType = req.body.accType
    db.all(`INSERT INTO accounts(accUsername, accPassword, accType) VALUES ('${username}','${password}','${accType}');
    COMMIT;`,
    (err)=>{console.log(err)})
    console.log('Added user')
})

//commented this, messes with the login system
/*app.post('/create-conference', checkRole('organizer'), (req, res) => {
    const { id, name, organizer } = req.body;

    const newConference = new Conference(id, name, organizer);

    res.status(201).send({ message: "Conference created successfully", conference: newConference });
});*/

// app.post('/conference/:conferenceId/add-author', (req, res) => {
//     const conferenceId = req.params.conferenceId;

//     const author = req.body.author;

//     const conference = getConferenceById(conferenceId);

//     conference.addAuthor(author);

//     res.status(200).send({ message: "Author added successfully", conference });
// });

// app.put('/conference/:conferenceId/update', (req, res) => {
//     const conferenceId = req.params.conferenceId;

//     const { newName } = req.body;

//     const conference = getConferenceById(conferenceId);
    
//     conference.updateConferenceDetails(newName);

//     res.status(200).send({ message: "Conference updated successfully", conference });
// });
