const express = require('express')
const app = express();
const path = require('path')
const {products} =require('./data')

//Create first API
app.get('/', (req,res)=>{
    res.json(products)
})

app.listen(4000, ()=>{console.log("app is listening on port 4000" )})

