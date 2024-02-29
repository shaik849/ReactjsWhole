import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ItemList from './ItemList'
import { clearCart } from '../../utils/cartSlice'

const Cart = () => {
  
    const cartItems = useSelector((store) => store.cart.items)
    const dispatch = useDispatch();

    const clearCartItems = () => {
       dispatch(clearCart())
    }

  return (
    <div className='m-10 p-10 text-center'>
        <h1 className='font-bold'>Cart</h1>
        <div>
            <button className='p-2 m-2 bg-black text-white rounded-lg' onClick={clearCartItems}>Clear Cart</button>
        </div>
        <div className='w-6/12 m-auto'>
        <ItemList items={cartItems} />
        {
            cartItems.length === 0 && <h1>Cart is empty. Add items</h1>
        }
        </div>
    </div>
  )
}

export default Cart