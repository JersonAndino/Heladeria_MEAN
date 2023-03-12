'use strict'
var fs = require('fs');
const path = require('path');
var Helado = require('../models/helado');
const session = require('express-session');

var controller = {
    guardarHelado: function (req, res) {
        var helado = new Helado();
        helado.tipo=req.body.tipo;
        helado.sabor=req.body.sabor;
        helado.descripcion=req.body.descripcion;
        helado.precio=req.body.precio;
        helado.imagen=null;
        helado.save()
            .then(result => {
                if (!result) return res.status(404).send({ message: "No se han podido guardar los datos" });
                return res.status(200).send({ result });
            })
            .catch(err => {
                console.log(err);
            });
    },

    obtenerHeladosPorTipo: function (req, res) {
        // console.log(req.body);
        var tipoBuscar = req.params.tipo;
        Helado.find({ tipo: tipoBuscar})
            .then(result => {
                if (!result) return res.status(404).send({ message: 'No se encontraron datos con los valores proporcionados' });
                return res.status(200).send({ result });
            })
            .catch(err => {
                console.log(err);
            });
    },
    obtenerHeladoPorId: function (req, res) {
        var idBuscar = req.params.id;
        Helado.findById(idBuscar)
            .then(result => {
                if (!result) return res.status(404).send({ message: 'No se pudo eliminar el registro' });
                return res.status(200).send({ result });
            })
            .catch(err => {
                console.log(err);
            });
    },
    obtenerHelados: function (req, res) {
        Helado.find({}).sort().exec()
            .then(result => {
                if (!result) return res.status(404).send({ message: 'No se encontraron datos' });
                return res.status(200).send({ result });
            })
            .catch(err => {
                console.log(err);
            });
    },
    actualizarHeladoPorId: function (req, res) {
        var helado = req.body;
        
        Helado.findByIdAndUpdate(helado._id, helado/*se pasa todos los parametros del helado*/, { new: true })
            .then(result => {
                if (!result) return res.status(404).send({ message: 'No se han podido actualizar los datos' });
                return res.status(200).send({ result });
            })
            .catch(err => {
                console.log(err);
            });
    },
    eliminarHeladoPorId: function (req, res) {
        var idBuscar = req.params.id;
        Helado.findByIdAndDelete(idBuscar)
            .then(result => {
                if (!result) return res.status(404).send({ message: 'No se pudo eliminar el registro' });
                return res.status(200).send({ result });
            })
            .catch(err => {
                console.log(err);
            });
    },
    uploadImage:function(req,res){
        var idHelado=req.params.id;
        var fileName='Imagen no subida';

        if(req.files){
            var filePath=req.files.imagen.path;
            var file_split=filePath.split('\\');
            var fileName=file_split[1];
            var extSplit=fileName.split('\.');
            var fileExt=extSplit[1];
            if(fileExt=='png'||fileExt=='jpg'||fileExt=='jpeg'||fileExt=='gif'){
                Helado.findByIdAndUpdate(idHelado,{imagen:fileName},{new:true})
                .then(result => {
                    if (!result) return res.status(404).send({message:'No se pueden actualizar los datos'});
                    return res.status(200).send({result});
                })
                .catch(err => {
                    return res.status(200).send({message:'Error al actualizar los datos'});
                });
            }else{
                fs.unlink(filePath,(err)=>{
                    return res.status(200).send({message:'La extension no es valida'});
                });
            }
        }else{
            return res.status(200).send({message:fileName});
        }
    },
    getImage:function(req,res){
        var file=req.params.imagen;
        // console.log(file);
        var path_file="./uploads/"+file;
        fs.exists(path_file,(exists)=>{
            if (exists){
                return  res.sendFile(path.resolve(path_file));
            }else{
                res.status(200).send({message:"La imagen no existe"});
            }
        })
    }
}

module.exports = controller;