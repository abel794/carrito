import express from "express"
import dotenv from 'dotenv'
import cors from 'cors'
import { connectDB } from "../src/config/db.js";
import productoRoutes from './modules/productos/producto.routes.js'

dotenv.config({path:'../.env'});
const app=express();

app.use(cors())
app.use(express.json())



connectDB()

app.use('/api/productos', productoRoutes);

const port=5000;
app.listen(port,()=>{
    console.log(`🚀 servidor corriendo en el puerto ${port}`)
})
