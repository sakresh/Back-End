const asyncHandler = require('express-async-handler')

const dataBase = require('../models/model')

//Get request function
const get = asyncHandler(async(req, res) => {
    const result = await dataBase.find()
    res.status(200).json(result);
})

//Post request function
const post = asyncHandler(async(req, res) => {
  if(!req.body.name){
    res.status(400)
    throw new Error("Please add a text to the field") // By default it throws a HTML document as a response. So we will create a middle ware function for handling errors.
  }
    const result = await dataBase.create({
      name : req.body.name,
    })
    res.status(200).json(result);
})

//Put request function
const put = asyncHandler(async(req, res) => {
    const result = await dataBase.findById(req.params.id)
    if(!result){
      res.status(400)
      throw new Error("Data not found")
    }
    const updated = await dataBase.findByIdAndUpdate(req.params.id, req.body, {new : true})
    res.status(200).json(updated);
})

//Delete request function
const del = asyncHandler(async(req, res) => {
    const result = await dataBase.findById(req.params.id)
    if(!result){
      res.status(400)
      throw new Error("Data not found")
    }
    await result.remove()
    res.status(200).json({id:req.params.id});
})

module.exports = {
  get,
  post,
  put,
  del,
}

