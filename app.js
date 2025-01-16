require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const app = express(); 


//config json
app.use(express.json());


//public route
app.get('/', (req,res) =>{
   res.status(200).json({msg:"Bem vindo a nossa API"});
})


//authentication
const db_user = process.env.DB_USER
const db_pass = process.env.DB_PASS

//register
app.post('/auth/register', async (req,res)=>{
const {name,password,confirmpassword} = req.body;

    if(!name){
        return res.status(422).json({msg:"O nome é obrigatório!"})
    }
})

mongoose
.connect(`mongodb+srv://${db_user}:${db_pass}@cluster0.btd9u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`).then(()=>{
    app.listen(3000);
    console.log("conectado ao banco de dados!")
}).catch((err)=>{console.log(err)})



