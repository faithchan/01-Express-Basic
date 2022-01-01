const express = require('express')
const app = express();
const yearLog = require('./logger')
//req = > middleware => res



//add middleware manually here as a parameter
app.get('/', yearLog ,(req,res)=>{

    res.send('Home')
})
app.get('/about',(req,res)=>{
    res.send('About')
})


app.listen(4000, ()=>{console.log("app is listening on port 4000" )})

