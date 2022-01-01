const express = require('express')
const app = express();
const path = require('path')

//Create first API
app.get('/', (req,res)=>{
    res.json([{name:"john"},{name:"susan"}])
})

app.listen(4000, ()=>{console.log("app is listening on port 4000" )})

