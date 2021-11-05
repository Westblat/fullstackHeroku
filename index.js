const moment = require('moment')
const morgan = require('morgan')
const express = require('express')
const cors = require('cors')
const app = express()

let phonebook = [
        {
            "id": 1,
            "name": "Arto Hellas",
            "number": "040-123456"
        },
        {
            "id": 2,
            "name": "Ada Lovelace",
            "number": "39-44-5323523"
        },
        {
            "id": 3,
            "name": "Dan Abramov",
            "number": "12-43-234345"
        },
        {
            "id": 4,
            "name": "Mary Poppendieck",
            "number": "39-23-6423122"
        }
    ]

app.use(express.json())
morgan.token('body', (req, res) => JSON.stringify(req.body));
app.use(morgan(':method :url :status :response-time ms - :res[content-length] :body - :req[content-length]'));
app.use(cors())

//----------------------------------------------------------------------------------------------

app.get('/info', (req, res) => {
    const now = moment().format('LLLL')
    res.send(`<div><p>Phonebook has info for ${phonebook.length} people</p><p>${now}</p></div>`)
})

app.get('/api/persons', (req, res) => {
    res.json(phonebook)
})

app.post('/api/persons/', (req, res) => {
    const data = req.body
    if(!data.name) {
        return res.status(400).json({
            error: "name missing"
        })
    }
    if(!data.number) {
        return res.status(400).json({
            error: "number missing"
        })
    }
    if (phonebook.find(dude=> dude.name === data.name)){
        return res.status(400).json({
            error: "name must be unique"
        })

    }
    const newDude = {...data, id: Math.floor(Math.random() * 1000000000)}
    phonebook.push(newDude)
    res.json(newDude)
})

app.get('/api/persons/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const person = phonebook.find(dude => dude.id === id)
    if (person){
        res.json(person)
    } else {
        res.status(404).end()
    }

})

app.delete('/api/persons/:id', (req, res) => {
    const id = parseInt(req.params.id);
    phonebook = phonebook.filter(dude => dude.id !== id)

    res.status(204).end()
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})