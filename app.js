const express = require('express')
const app = express();
const path = require('path')
const {products} =require('./data')

//sending html
app.get('/', (req,res)=>{
    res.send('<h1>Home Page</h1><a href="/api/products">products</a>')
})

//filter information
app.get('/api/products', (req,res)=>{
    const newProducts = products.map((product)=>{
        const {id, name, image} = product;
    return {id,name, image}})  
    res.json(newProducts)
})

//filter futher via Id, get single product
app.get('/api/products/:productId', (req,res)=>{
    console.log(req.params)
   const singleProduct = products.find((product)=>product.id === Number(req.params.productId))
   //You can refactor Number(req.params.productId) => const {productId} = Number(req.params)
   res.json(singleProduct)
})



app.listen(4000, ()=>{console.log("app is listening on port 4000" )})

