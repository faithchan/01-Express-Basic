const express = require('express')
const app = express();
const people = require('./routes/people')

//Example of Post 
app.post('/login', (req,res)=>{
    console.log(req.body)
    const {name} = req.body;
    if(name){return res.status(200).send(`welcome ${name}`)}
    res.status(401).send('Please provide credentials')
})

app.use('api/people', people)

//static
app.use(express.static('./methods-public'))


//parse form data
app.use(express.urlencoded({extended:false}))

//patse json
app.use(express.json())




app.listen(4000, ()=>{console.log("app is listening on port 4000" )})

