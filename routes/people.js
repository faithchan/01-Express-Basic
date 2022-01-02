const express = require('express')
const router =express.Router();

app.get('/api/people', (req,res)=>{
    res.status(200).json({success:true, data:people})
})
//add people
app.post('/api/people', (req,res)=>{
    const {name} = req.body
    if(!name){return res.status(400).send({success:false, msg:"Please provide name"})}
    res.status(201).send({success:true,person:name})
})

//add people to the array using postman
app.post('/api/people/postman', (req,res)=>{
    const {name} = req.body
    if(!name){return res.status(400).send({success:false, msg:"Please provide name"})}
    res.status(201).send({success:true,data:[...people,{name}]})
})

//update data of one person
app.put('/api/people/:id', (req,res)=>{
const {id} =req.params
const {name} = req.body
const person = people.find((person)=>{
    person.id === Number(id)

    if(!person){return res.status(400).json({success:false, msg:"No person with Id"})}
})
const newPeople = people.map((person)=>{
    if (person.id === Number(id)){
        person.name = name
    }
    return person
})
res.status(200).json({success:true, data:newPeople})
})

//delete
app.delete('/api/people/:id', (req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id))
    if (!person) {
      return res
        .status(404)
        .json({ success: false, msg: `no person with id ${req.params.id}` })
    }
    const newPeople = people.filter(
      (person) => person.id !== Number(req.params.id)
    )
    return res.status(200).json({ success: true, data: newPeople })
  })