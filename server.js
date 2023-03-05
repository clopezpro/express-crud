import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()
const PORT = process.env.PORT || 3000
const contacts = []

const app = express() //express server(initialize the express package)

app.use(express.json())
// app.use(express.static('src'))

app.get('/contacts', (req, res) => {
  res.json(contacts)
})

app.post('/contacts', (req, res) => {
  const newContact = { id: contacts.length+1, ...req.body}

  contacts.push(newContact)

  res.send(newContact)
})

app.put('/contacts/:id', (req, res) => {
  res.send('Contact updated.')
})

app.delete('/contacts/:id', (req, res) => {
  res.send('Contact deleted.')
})

app.get('/contacts/:id', (req, res) => {
  res.send(`This is ${req.params.name} contact info.`)
})


app.listen(PORT, () => {
  console.log(`App listening on http://localhost:${PORT}/`)
})
