require('dotenv').config()
const moment = require('moment')
const morgan = require('morgan')
const express = require('express')
const cors = require('cors')
const Person = require('./models/person')

const app = express()

app.use(express.static('build'))
app.use(express.json())
morgan.token('body', (req) => JSON.stringify(req.body))
app.use(morgan(':method :url :status :response-time ms - :res[content-length] :body - :req[content-length]'))
app.use(cors())

//----------------------------------------------------------------------------------------------

app.get('/info', (req, res) => {
    const now = moment().format('LLLL')
    Person.find({}).then(result => {
        res.send(`<div><p>Phonebook has info for ${result.length} people</p><p>${now}</p></div>`)
    })

})

app.get('/api/persons', (req, res) => {
    Person.find({}).then(result => {
        res.json(result)
    })
})

app.post('/api/persons/', (req, res, next) => {
    const data = req.body

    const dude = new Person(data)
    dude.save().then(() => {
        res.json(dude)
    })
        .catch(error => next(error))

})

app.get('/api/persons/:id', (req, res, next) => {
    Person.findById(req.params.id)
        .then(response => {
            res.json(response)
        })
        .catch(error => next(error))
})

app.put('/api/persons/:id', (req, res, next) => {
    // We could also allow name updates, but we are boring
    const data = { number: req.body.number }
    Person.findByIdAndUpdate(req.params.id, data, { new:true, runValidators: true }).then(result => {
        res.json(result)
    })
        .catch(error => next(error))
})

app.delete('/api/persons/:id', (req, res, next) => {
    Person.findByIdAndRemove(req.params.id)
        .then(() => {
            res.status(204).end()
        })
        .catch(error => next(error))
})

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}
app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
    console.error(error.message)

    switch (error.name) {

    case 'CastError':
        return response.status(400).send({ error: 'There was a problem with id' })

    case 'ValidationError':
        return response.status(400).send({ error: error.message })
    }

    next(error)
}
app.use(errorHandler)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})