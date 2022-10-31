import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import ItemCart from '../ItemCart';

import Swal from 'sweetalert2'

const Cart = () => {
  const { cart, totalPrice, deleteAll, totalProducts} = useCartContext();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const order = {
      buyer: {
        name: name,
        email: email,
        phone: phone,
        address: address 
      },
      items: cart.map(product => ({id: product.id, title: product.title, price: product.price, quantity: product.quantity})),
      date: new Date(),
      total: totalPrice(),
  }

  const handleClick = ()=> {
    if (name !== '' && email !== '' && !isNaN(phone) && address !== '') {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Tu compra está siendo procesada',
        showConfirmButton: false,
        timer: 2500
      })
      const db = getFirestore();
      const orderCollection = collection(db, 'orders');
      addDoc(orderCollection, order)
        .then(({ id }) => (
          Swal.fire(
          `Id de compra Nº ${ id }
          Fecha: ${order.date}
          Nombre: ${order.buyer.name}
          Email: ${order.buyer.email}
          Teléfono: ${order.buyer.phone}
          Dirección: ${order.buyer.address}
          Items: ${totalProducts()}
          Total: $${order.total}
          ¡Muchas gracias por confiar en nosotros!`
          ))
          ,
          deleteAll()
          )
    } else {
      Swal.fire(
        'Atención',
        'Debe ingresar correctamente sus datos para finalizar la compra'
      )
    }
  }

  if (cart.length === 0) {
    return(
      <div className='text-center'>
        <p>No hay elementos en el carrito</p>
        <Link className='btn btn-dark text-white rounded-pill' to='/'>Ir al inicio</Link>
      </div>
    )
  }

  return (
    <>
      <div>
        {
        cart.map(product => <ItemCart key={product.id} product={product} />) 
        }
        <div className='text-center'>
          <p className='h3'>
          Total: $ {totalPrice()}
        </p>
        </div>
      </div>
      <br />
      <div>
        <input type="text" required placeholder='Nombre' value={name} size="50" onChange={(e) => setName(e.target.value)}/><br />
        <input type="text" required placeholder='Email' value={email} size="50" onChange={(e) => setEmail(e.target.value)}/><br />
        <input type="text" required placeholder='Teléfono' value={phone} size="50" onChange={(e) => setPhone(e.target.value)}/><br />
        <input type="text" required placeholder='Dirección' value={address} size="50" onChange={(e) => setAddress(e.target.value)}/><br />
        <button className='btn btn-dark border text-white rounded-pill' onClick={handleClick}>Comprar</button><br /><br />
        <Link className='btn btn-dark text-white rounded-pill' to='/'>Seguir comprando</Link>
        <button className='btn btn-dark text-white rounded-pill' onClick={deleteAll}>Vaciar carrito</button>
      </div>
      
    </>
  )
}

export default Cart;