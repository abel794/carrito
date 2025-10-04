import { api } from "../../services/api";
export const obtenerProductos = async () => {
    const res=await api.get("/productos");
    return res.data
}
