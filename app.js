const express = require('express')
const app = express();
let {people} = require('./data')

//static
app.use(express.static('./methods-public'))

app.get('/api/people', (req,res)=>{
    res.status(200).json({success:true, data:people})
})

//Example of Post 
app.post('/login', (req,res)=>{
    res.send('POST')
})

//

app.listen(4000, ()=>{console.log("app is listening on port 4000" )})

