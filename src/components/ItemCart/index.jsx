import React from 'react'
import { useCartContext } from '../../context/CartContext';
import "./itemCart.css";

const ItemCart = ({ product }) => {
    const { removeProduct } = useCartContext();
  return (
    <div className='itemCart'>
        <img className='carta' src={product.image} alt={product.title} />
        <div className='carta'>
            <p>{product.title}</p>
            <p>Cantidad: {product.quantity}</p>
            <p>Precio por unidad: ${product.price}</p>
            <p>Subtotal: $ {product.quantity * product.price}</p>
            <button className='btn btn-dark text-white rounded-pill' onClick={() => removeProduct(product.id)}>Eliminar</button>
        </div>
    </div>
  )
}

export default ItemCart;