import { Router } from "express";

const router = Router()

router.get('/contacts', (req, res) => {
    res.json(contacts)
})

router.post('/contacts', (req, res) => {
    const newContact = { ...req.body }
    res.send(newContact)
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