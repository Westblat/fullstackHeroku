const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('Please provide the password as an argument: node mongo.js <password>')
    process.exit(1)
}

const password = process.argv[2]

const url =
    `mongodb+srv://fullstack:${password}@cluster0.dqc6v.mongodb.net/phonebook-app?retryWrites=true&w=majority`

mongoose.connect(url)

const personSchema = new mongoose.Schema({
    name: String,
    number: String,
})

const Person = mongoose.model('Person', personSchema)

if (process.argv.length > 3) {
    const dude = new Person({
        name: process.argv[3],
        number: process.argv[4],
    })
    dude.save().then(result => {
        console.log(`Added ${process.argv[3]} number ${process.argv[4]} to phonebook`)
        mongoose.connection.close()
    })
} else {
    console.log("phonebook")
    Person.find({}).then(result => {
        result.forEach(dude => {
            console.log(dude)
        })
        mongoose.connection.close()
    })
}


