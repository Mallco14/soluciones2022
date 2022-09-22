const express = require('express')
const router = express.Router()

const contactoController = require('../controllers/contactoController')

//CONTACTOS MOSTRAR
router.get('/', contactoController.mostrar)
//CREAR
router.post('/crear', contactoController.crear)
//EDIT
router.post('/editar', contactoController.editar)
//BORRAR
router.get('/borrar/:id', contactoController.borrar)
module.exports = router