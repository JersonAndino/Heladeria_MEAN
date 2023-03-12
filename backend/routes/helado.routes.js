'use strict'
var express=require('express');
var router=express.Router();
var heladoController=require('../controllers/helado.controller');

var multiparty=require('connect-multiparty');
var multipartyMiddleWare=multiparty({uploadDir:'./uploads'});

// guardar helado
router.post('/helado',heladoController.guardarHelado);
// obtener helado por nombre
router.get('/helados/:tipo',heladoController.obtenerHeladosPorTipo)
router.get('/helado/:id',heladoController.obtenerHeladoPorId)
// obtener helados
router.get('/helado',heladoController.obtenerHelados);
// actualizar helado por nombre
router.put('/helado',heladoController.actualizarHeladoPorId);
// eliminar tipo por nombre
router.delete('/helado/:id',heladoController.eliminarHeladoPorId);

//agregar una imagen
router.post('/subir-imagen/:id',multipartyMiddleWare,heladoController.uploadImage);
//recuperar una imagen
router.get('/get-imagen/:imagen',heladoController.getImage);

module.exports=router;