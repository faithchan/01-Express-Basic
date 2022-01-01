const express = require('express')
const app = express();
const path = require('path')

//set up static and middleware
app.use(express.static("./public"))


app.all('*', (req,res)=>{res.status(404).send("<h1>resource not found</h1>")})


app.listen(4000, ()=>{console.log("app is listening on port 4000" )})

