const Contacto = require('../model/Contacto')


//Mostrar Contacto
module.exports.mostrar = (req, res)=>{
    Contacto.find({}, (error, contactos)=>{
        if(error) {
            return res.status(500).json({
                message: 'Error mostrando los contactos'
            })
        }
        return res.render('index', {contactos: contactos})
    })
}

//Crear
module.exports.crear = (req, res)=>{
    //console.log(req.body)
    const contacto = new Contacto({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        edad: req.body.edad,
        email: req.body.email,
        telefono: req.body.telefono
    })
    contacto.save(function(error,contacto){
        if(error){
            return res.status(500).json({
                message: 'Error al crear el Contacto'
            })
        }
        res.redirect('/')
    })
}

//Editar
module.exports.editar = (req,res)=>{
    const id = req.body.id_editar
    const nombre = req.body.nombre_editar
    const apellido = req.body.apellido_editar
    const edad = req.body.edad_editar
    const email = req.body.email_editar
    const telefono = req.body.telefono_editar
    Contacto.findByIdAndUpdate(id, {nombre,apellido,edad,email,telefono}, (error, contacto)=>{
        if(error){
            return res.status(500).json({
                message: 'Error actualizando el Contacto'
            })
        }
        res.redirect('/')
    })
}

//Borrar
module.exports.borrar = (req, res)=>{
    const id = req.params.id
    Contacto.findByIdAndRemove(id, (error, contacto)=>{
        if(error){
            return res.status(500).json({
                message: 'Error eliminando el Contacto'
            })
        }
        res.redirect('/')
    })
}