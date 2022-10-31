import React from 'react';
import { useCartContext } from '../../context/CartContext';

export const CartWidget = () => {
const {totalProducts} = useCartContext();
    return (
      <>
        <i className="bi bi-minecart"></i>
        <span className='h5 mx-auto px-2' >{totalProducts() || ''}</span>
      </>
    );
}

export default CartWidget;