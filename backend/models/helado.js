'use strict'
var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var heladoSchema=Schema({
    tipo:String,
    sabor:String,
    precio:Number,
    descripcion:String,
    imagen:String
});

module.exports=mongoose.model('Helado',heladoSchema);