const express = require('express')
const app = express()
const path = require('path')
const ejsLayouts = require('express-ejs-layouts')
const mongoose = require('mongoose')
const todo = require('./routes/todo_router')
const pageRouter = require('./routes/pages_router')
const todogroupRouter = require('./routes/todogroup_router')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

mongoose.connect('mongodb://localhost/myapp')

mongoose.Promise = global.Promise

app.use(express.static(path.join(__dirname, 'public')))

app.use(methodOverride('_method'))

app.use(bodyParser.urlencoded({ extended: false }))

app.use(ejsLayouts)

app.set('view engine', 'ejs')

// create new routes
app.use('/', pageRouter)
app.use('/todos', todo)
app.use('/todogroups', todogroupRouter)

app.listen(process.env.PORT || 5000, function () {
  console.log('app is running')
})
