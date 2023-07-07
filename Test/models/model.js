const mongoose = require('mongoose')

const schema = mongoose.Schema({
  name:{
    type : String,
    required : [true , 'Error message for not adding the name']
  }
},{
    timestamps : true,
  }
)

module.exports = mongoose.model('db', schema)
