const express = require('express')
const router = express.Router()
const todoController = require('../controllers/todo_controller')

router.get('/', (req, res) => {
  res.send('homepage')
})

router.get('/about', (req, res) => {
  res.send('about')
})

router.get('/faq', (req, res) => {
  res.send('faq')
})

module.exports = router
