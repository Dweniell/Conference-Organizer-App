//IMPORT Class Files
//import {Conference} from './conference.js';
//import {User} from './user.js';
//import {Article} from './article.js';
//import {Review} from './review.js';

const express = require('express')
const app = express()

const {Sequelize,DataTypes, json} = require('sequelize')

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.db'
  });
const Users =sequelize.define('Users',{
id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    primaryKey:true,
    
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
const Conferences =sequelize.define('Conference',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        
    },
    name:{
    type:DataTypes.STRING,
    allowNull:false,
    unique:true
    },
    date:{
    type:DataTypes.DATE,
    allowNull:false
    }
})

const Articles = sequelize.define('Articles',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
    },
    title:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    
    
    },
    content:{
        type:DataTypes.TEXT('medium')
    },
    authorId:{
        type:DataTypes.INTEGER,
        allowNull:false
    
    },
    approved:{
        type:DataTypes.BOOLEAN
    },
    conferenceId:{
        type:DataTypes.INTEGER
    }
})

const Reviews=sequelize.define('Review',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    reviewContent:{
        type:DataTypes.STRING
    },
    reviewAuthor:{
        type:DataTypes.INTEGER
    },
    articleApproved:{
        type:DataTypes.BOOLEAN
    }
})

const ReviewArticles=sequelize.define('ReviewArticles',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    }
    
    // articleId:{
    //     type:DataTypes.INTEGER,
    //     refernces:{
    //         model:Articles,
    //         key:'id'
    //     }
    // },
    // reviewId:{
    //     type:DataTypes.INTEGER,
    //     refernces:{
    //         model:Reviews,
    //         key:'id'
    //     }
    // }
})

const ConferenceUsers=sequelize.define('Conference-User',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true
    }
    // conferenceId:{
    //     type:DataTypes.INTEGER,
    //     refernces:{
    //         model:Conferences,
    //         key:'id'
    //     }
    // },
    // userId:{
    //     type:DataTypes.INTEGER,
    //     refernces:{
    //         model:Users,
    //         key:'id'
    //     }
    // }
})
Articles.belongsToMany(Reviews,{through:ReviewArticles})
Reviews.belongsToMany(Articles,{through:ReviewArticles})
Conferences.belongsToMany(Users,{through:ConferenceUsers})
Users.belongsToMany(Conferences,{through:ConferenceUsers})

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
const conf = await Conferences.findAll()

console.log(conf)
}
test()
async function test2(){
const users =await Users.findByPk(0)
console.log(users instanceof Users)
console.log("All users:", JSON.stringify(users))
}
//test2()

app.get('/validatePassword/:username/:password', async (req, res, next)=>{
    const users = await Users.findAll({where: {username: req.params.username, password: req.params.password}})
    if (users.length>0){
        res.json({validation:true, userdata:users[0]})
        //res.send({validation:true, acc:{name:user.username, type:user.permission, index:user.id}})
    }
    else{
        res.json({validation: false})
    }
    
})
    
app.post('/registerUser/:username/:password/:accountType',async (req,res)=>{

    const users = await Users.create({username:req.params.username, password:req.params.password,permission:req.params.accountType})
    console.log(users)
})
app.post('/createConference/:confname/:confdate',async (req,res)=>{

    const conf = await Conferences.create({name:req.params.confname, date:req.params.confdate})
    console.log(conf)

})
app.post('/createArticle/:artname/:artcontent/:id',async (req,res)=>{

    const art = await Articles.create({title:req.params.artname, content:req.params.artcontent,authorId: req.params.id})
    console.log(art)
    res.json({validation:true})
})
app.get('/getConfData/:id', async(req, res)=>{
    const conference = await Conferences.findAll(
        {
        where:
        {
            id: req.params.id
        }
    })
    if(conference.length > 0){
        console.log(conference)
        res.json({validation: true, conf: conference[0]})
    }
    else res.json({validation: false})
})
app.listen(3001, ()=>console.log('Listening at port 3001'))
