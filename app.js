const express = require('express')
const app = express();
const yearLog = require('./logger')
//req = > middleware => res

//middleware appplied to all routes
app.use(yearLog)

app.get('/',(req,res)=>{

    res.send('Home')
})
app.get('/about',(req,res)=>{
    res.send('About')
})

app.get('/api/products',(req,res)=>{
    res.send('products')
})

app.get('/api/items',(req,res)=>{
    res.send('Items')
})


app.listen(4000, ()=>{console.log("app is listening on port 4000" )})

