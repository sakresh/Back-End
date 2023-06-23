const express = require('express')

const router = express.Router()

router.get('/',(req,res) => {
    res.status(200).json({message : 'Get request working perfectly'})
})

router.post('/',(req,res) => {
    res.status(200).json({message : 'Post request working perfectly'})
})

router.put('/:id',(req,res) => {
    res.status(200).json({message : `Put request working on id ${req.params.id}`})
})

router.delete('/:id',(req,res) => {
    res.status(200).json({message : `Delete request working on id ${req.params.id}`})
})

module.exports = router