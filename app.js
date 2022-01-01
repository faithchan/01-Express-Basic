const express = require('express')
const app = express();
const yearLog = require('./logger')
const authorize = require('./authorize')
const morgan = require('morgan')
//req = > middleware => res

// Options of middleware - our own / express / third party
//express
// app.use(express.static('./public')) -express

//third party
app.use(morgan('tiny'))

// app.use([yearLog, authorize]) -our own

app.get('/',(req,res)=>{

    res.send('Home')
})

app.get('/about',(req,res)=>{
    res.send('About')
})

//example of passing two middlewares into a specific route
app.get('/api/products',(req,res)=>{
    res.send('products')
})

app.get('/api/items',(req,res)=>{
    res.send('Items')
})


app.listen(4000, ()=>{console.log("app is listening on port 4000" )})

