const express = require('express')
const router = express.Router()
// const todoController = require('../controllers/todo_controller')
const todogroupController = require('../controllers/todogroup_controller')

router.route('/') // this is essentially going to /todogruops.  See index.js create new routes section.
.get(todogroupController.index)
// .post((req, res) => res.send(req.body))
.post(todogroupController.create)

router.get('/new', todogroupController.new)

router.route('/:id')
.get((req, res) => res.send('specific group'))

router.route('/:id/edit')
.get((req, res) => res.send('edit group'))

router.get('/:id/todos', todoController.listAllTodos
})

module.exports = router
