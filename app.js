const express = require('express')
const app = express();
const path = require('path')
const {products} =require('./data')

//sending html
app.get('/', (req,res)=>{
    res.send('<h1>Home Page</h1><a href="/api/products">products</a>')
})

app.get('/api/products', (req,res)=>{
    const newProducts = products.map((product)=>{
        const {id, name, image} = product;
    return {id,name, image}})  
    res.json(newProducts)
})


app.listen(4000, ()=>{console.log("app is listening on port 4000" )})

