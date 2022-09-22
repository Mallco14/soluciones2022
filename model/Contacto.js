const mongoose = require('mongoose')
const Schema = mongoose.Schema
const contactoSchema = new Schema ({
    nombre: String,
    apellido:String,
    edad:Number,
    email:String,
    telefono:Number,
    

}, {versionKey:false})
module.exports = mongoose.model('contacto', contactoSchema)