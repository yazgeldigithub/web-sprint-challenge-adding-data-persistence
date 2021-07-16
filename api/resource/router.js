// build your `/api/resources` router here
const express = require('express')
const ResourceModel = require('./model')
const { checkNewResourceBody } = require('./middleware')

const router = express.Router()

router.get('/', (req, res, next) => {
    ResourceModel.getResources()
        .then(resources => {
            res.status(200).json(resources)
        })
        .catch(next)
})

router.post('/', checkNewResourceBody, (req, res, next) => {
    ResourceModel.createResource(req.body)
        .then(resource => {
            res.status(201).json(resource)
        })
        .catch(next)
})

router.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message,
        error: err.error,
        stack: err.stack,
        broke: 'looks like something broke involving RESOURCE'
    })
})

module.exports = router