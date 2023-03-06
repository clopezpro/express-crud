import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import routes from './routes/index.js'
import './db.js'

dotenv.config()
const PORT = process.env.PORT || 3000

const app = express() //express server(initialize the express package)

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(routes)
// app.use(express.static('src'))

app.listen(PORT, () => {
  console.log(`App listening on http://localhost:${PORT}/`)
})
