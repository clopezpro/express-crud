import { connect } from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

try {
    const db = await connect(process.env.DB_CONNECTION)
    console.log(`Connected to ${db.connection.name}`)
} catch (err) {
    console.error(err)
}