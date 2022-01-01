const express = require('express')
const app = express();
let {people} = require('./data')

//static
app.use(express.static('./methods-public'))

app.get('/api/people', (req,res)=>{
    res.status(200).json({success:true, data:people})
})

//parse form data
app.use(express.urlencoded({extended:false}))

//Example of Post 
app.post('/login', (req,res)=>{
    console.log(req.body)
    const {name} = req.body;
    if(name){return res.status(200).send(`welcome ${name}`)}
    res.status(401).send('Please provide credentials')
})

//

app.listen(4000, ()=>{console.log("app is listening on port 4000" )})

