import { Router } from "express";
import{
    ObtenerProducto,
    crearProducto,
    actualizarProducto,
    eliminarProducto
} from './producto.controller.js'

const router=Router();

router.get('/',ObtenerProducto)
router.post('/',crearProducto)
router.put('/:id',actualizarProducto)
router.delete('/:id',eliminarProducto)

export default router;