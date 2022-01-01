const express = require('express')
const app = express();
//req = > middleware => res

//Middleware
const yearLog =(req, res,next)=>{    
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time)
// res.send('testing')}
next();}

//add middleware manually here as a parameter
app.get('/', yearLog ,(req,res)=>{

    res.send('Home')
})
app.get('/about',(req,res)=>{
    res.send('About')
})


app.listen(4000, ()=>{console.log("app is listening on port 4000" )})

