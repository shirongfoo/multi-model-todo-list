var Todogroup = require('../models/todogroup')

var Todo = require('../models/todo')

function newTodogroup (req, res) {
  // res.send('form to create new todogroups')
  Todo.find({}, function (err, output) {
    if (err)res.send(err)
    res.render('todogroups/new', {
      allTodos: output
    })
  })
}
function create (req, res) {
  Todogroup.create(req.body, (err, output) => {
    if(err) res.send(err)
    console.log(output);
    res.redirect('/todogroups')
  })
}
// function newTodogroup(req, res){
//   Todo.find({}, function(err, output){
//     if(err) res.send(err)
//     res.render('/todogroups/new', {
//       allTodos: output
//     })
//   })
// }

function index(req, res){
  //stuff
  Todogroup.find({}, (err, output) => {
    if(err) res.send(err)
    res.render('todogroups/index', {
      allGroups: output
    })
  })
}

function show(req, res){
  Todogroup.findById(req.params.id).populate('todos').exec((err, output)=> {
    if(err)res.send(err)
   res.render('todogroups/show', {
     output: output
   })
  })
}

function listAllTodos(req, res){
  //1. find the todogroups by id
  Todogroup.findById(req.params.id).populate('todos').exec(err, output) => {
    if(err) return res.send(err)
    res.send(output.todos)
    res.render('todogroups/showtodos', {
      allTodosByGroups: output.todos
    })
  }
}

module.exports = {
  new: newTodogroup,
  create: create,
  index: index,
  show: show,
  listAllTodos: listAllTodos
}
