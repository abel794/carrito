import { Producto } from "./producto.model.js"

export const ObtenerProducto=async(req, res)=>{
    console.log("🎁 obteniendo producto")
    const producto=await Producto.find()
    res.json(producto)
};

export const crearProducto=async(req,res)=>{
    console.log("👷 creando producto")
    const nuevo= new Producto(req.body);
    await nuevo.save()
    res.json(nuevo)
};

export const actualizarProducto=async (req,res)=>{
    console.log("🔄 actualisando producto")
    const {id}=req.params;
    const actualizar=await Producto.findByIdAndUpdate(id, req.body,{new:true})
    res.json(actualizar)
}
export const eliminarProducto=async(req,res)=>{
    console.log("🗑️ eliminando producto")
    const {id}=req.params;
    await Producto.findByIdAndDelete(id);
    res.json({mensaje:'Producto eliminado'})
}
