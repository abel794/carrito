import '../productoCard/productoCard.css'; // ✅ solo la hoja de estilos

export default function ProductosCard({ producto }) {
    return (
        <div className="producto-card">
            <div className='producto-nombre'>{producto.nombre}</div>
            <div className='producto-precio'>${producto.precio}</div>
        </div>
    );
}
