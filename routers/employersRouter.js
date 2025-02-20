const express = require('express')

const router = express.Router()

// INDEX 

router.get('/', (req, res) => {
    res.send('Lista dei post')
})

// SHOW

router.get('/:id', (req, res) => {
  res.send(`Dettagli del post : ${req.params.id}`)
})

// CREATE

router.post('/', (req, res) => {
  res.send('Crea nuovo post')
})

// UPTADE

router.put('/:id', (req, res) => {
  res.send(`Modifica del post : ${req.params.id}`)
})

// MODIFY 

router.patch('/:id', (req, res) => {
  res.send(`Modifica parziale del post : ${req.params.id}`)
})

// DELETE

router.delete('/:id', (req, res) => {
  res.send(`Eliminazione del post : ${req.params.id}`)
})

module.exports = router;