import './itemDetail.css';

import React, { useState } from 'react';
import { useCartContext } from '../../context/CartContext';
import ItemCount from '../ItemCount';
import { Link } from 'react-router-dom';

export const ItemDetail = ({data}) => {
    const  [goToCart, setGoToCart] = useState(false);
    const { addProduct } = useCartContext();

    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct(data, quantity);
    }
  
  return (
    <div className='container'>
      <div className='detail'>
        <img className='detail__image' src={data.image} alt="" />
        <div className='content'>
          <h1>{data.title}</h1>
          <p>{data.description}</p>
          {
            goToCart
              ? <div>
                  <Link className='text-white btn btn-dark text-white rounded-pill' to='/cart'>Terminar compra</Link><br></br><br></br>
                  <Link className='text-white btn btn-dark text-white rounded-pill' to='/'>Seguir comprando</Link>
                </div>
              : <ItemCount initial={1} stock={10} onAdd={onAdd} />
          }
        </div>
      </div>
    </div>
  )
}

export default ItemDetail;