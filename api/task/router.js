// build your `/api/tasks` router here
const express = require('express')
const TaskModel = require('./model')
const { checkNewTaskBody } = require('./middleware')

const router = express.Router()

router.get('/', (req, res, next) => {
    TaskModel.getTasks()
        .then(tasks => {
            res.status(200).json(tasks)
        })
        .catch(next)
})

router.post('/', checkNewTaskBody, (req, res, next) => {
    TaskModel.createTask(req.body)
        .then(task => {
            res.status(201).json(task)
        })
        .catch(next)
})

router.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message,
        error: err.error,
        stack: err.stack,
        broke: 'looks like something broke involving TASK'
    })
})

module.exports = router