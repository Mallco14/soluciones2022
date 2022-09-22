const mongoose = require('mongoose')
const url = 'mongodb://localhost/contactos_SN'
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})
const db = mongoose.connection
db.on('error', console.error.bind(console, 'Error'))
db.once('open', function callback() {
    console.log("Conectado mongoose")
})
module.exports = db