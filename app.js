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

//patse json
app.use(express.json())

//Example of Post 
app.post('/login', (req,res)=>{
    console.log(req.body)
    const {name} = req.body;
    if(name){return res.status(200).send(`welcome ${name}`)}
    res.status(401).send('Please provide credentials')
})

//add people
app.post('/api/people', (req,res)=>{
    const {name} = req.body
    if(!name){return res.status(400).send({success:false, msg:"Please provide name"})}
    res.status(201).send({success:true,person:name})
})


app.listen(4000, ()=>{console.log("app is listening on port 4000" )})

