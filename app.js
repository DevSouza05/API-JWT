require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const app = express(); 
app.listen(3000);

//config json
app.use(express.json());


//public route
app.get('/', (req,res) =>{
   res.status(200).json({msg:"Bem vindo a nossa API"});
})


//authentication
const db_user = process.env.db_user
const db_pass=process.env.db_pass

//register
app.post('/auth/register', async (req,res)=>{
const {name,password,confirmpassword} = req.body;

    if(!name){
        return res.status(422).json({msg:"O nome é obrigatório!"})
    }
})



