import mongoose from "mongoose"


const productoScheme=new mongoose.Schema({
    nombre:String,
    precio: Number,
    imagen:String
})

export const Producto=mongoose.model('Producto',productoScheme)