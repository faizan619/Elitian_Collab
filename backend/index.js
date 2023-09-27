const express = require('express')
const app = express();
const dotenv = require('dotenv')
const mongoose = require('mongoose')

const DB = ""

mongoose.connect(DB)
.then(()=>{
    console.log("DataBase Connected")
})
.catch((err)=> {
    console.log(`There is an error : ${err}`)
})