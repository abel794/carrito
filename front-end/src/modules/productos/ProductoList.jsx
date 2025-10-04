import { useEffect, useState } from "react";
import { obtenerProductos } from "./productoService";
import ProductosCard from "../../components/productoCard/ProductoCard";

export default function ProductoList() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    obtenerProductos()
    .then(setProductos)
    .catch(()=>setError("Error al obtener los productos"))
    .finally(()=>setLoading(false))
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;
  if (productos.length === 0) return <p>No hay productos</p>;


  return (
    <section>
        <h2>Galeria de productos</h2>
    <div className="producto-list">
      
        {productos.map(p => (
          <ProductosCard key={p._id} producto={p} />
        ))}
    </div>
    </section>
  );
}
