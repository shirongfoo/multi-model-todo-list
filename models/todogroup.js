const mongoose = require('mongoose')
let todogroupSchema = new mongoose.Schema({
  name: String,
  color: String,
  todos: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Todo' //this is the name of the collection name e.g. it is 'Todo' in this case

  }]
})


let Todogroup = mongoose.model('Todogroup', todogroupSchema)

module.exports = Todogroup
