

const ItemDetail = ({producto}) => {
    return (
        <div>
            <h1>Detalle de Compra</h1>
            <p>Producto: {producto.name}</p><br></br>
            <p>Descripción: {producto.description}</p><br></br>
            <p>Stock disponible: {producto.stock}</p><br></br>
            <p>ID de producto: {producto.id}</p>
        </div>
    )
} 

export default ItemDetail