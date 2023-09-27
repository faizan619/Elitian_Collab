const dotenv = require('dotenv');
dotenv.config({path:'./config.env'});
const express = require('express');
const app = express();
const port = process.env.PORT;

require('./database/conn');

/*
app.use(cors()); 
app.use(express.json()); 
app.use(require('./router/auth'));
 */
app.use(express.json());


app.get('/',(req,res)=>{
    res.send('Welcome to Backend File')
})

app.post('/upload', async (req,res)=>{
    const {name,email} = req.body;
    if(!name || !email){
        return res.status(400).send("Please Fill The Details");
    }
    // try{
    //     const userExist = await User.findOne({email:email});
    // }
    // catch(err){
    //     console.log(err)
    // }

})

app.listen(port,()=>{
    console.log(`localhost:${port}`)
})
