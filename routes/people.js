const express = require('express')
const router =express.Router();
let {people} = require('../data')
const {
    getPeople, createPerson, updatePerson, createPersonPostman,deletePerson
} = require('../controllers/people')

// router.get('/',getPeople )
// //add people
// router.post('/',createPerson )

// //add people to the array using postman
// router.post('/postman', createPersonPostman )

// //update data of one person
// router.put('/:id',updatePerson )

// //delete
// router.delete('/:id', deletePerson)

//chaining
router.route('/').get(getPeople).post(createPerson)
router.route('/postman').post(createPersonPostman)
router.route('/:id').put(updatePerson).delete(deletePerson)

  module.exports =router