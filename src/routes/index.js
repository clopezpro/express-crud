import { Router } from "express";
import Contact from "../models/Contact.js";

const router = Router()

router.get('/contacts', (req, res) => {
    res.json(contacts)
})

router.post('/contacts', async (req, res) => {
    const contact = Contact(req.body)
    const saved = await contact.save()
    console.log(saved)
    res.send('Contact saved.')
})

router.put('/contacts/:id', (req, res) => {
    res.send('Contact updated.')
})

router.delete('/contacts/:id', (req, res) => {
    res.send('Contact deleted.')
})

router.get('/contacts/:id', (req, res) => {
    res.send(`This is ${req.params.name} contact info.`)
})


export default router