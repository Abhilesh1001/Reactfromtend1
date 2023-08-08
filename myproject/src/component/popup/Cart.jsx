import React, { useEffect, useState } from 'react'
import {Button, Popover} from '@mui/material'
import {
  Link
} from "react-router-dom"
import {useSelector,useDispatch} from 'react-redux'
import Checkout from '../checkout/Checkout'


const Cart = () => {
  const [cartItem,setCartItem] = useState({})
  const len = useSelector((state)=>state.len.len)
  const cart = useSelector((state)=>state.len.cart)
  useEffect(() => {
    if (cart && typeof cart === 'string') {
      setCartItem(JSON.parse(cart));
    }
  }, [cart]);
  console.log(cartItem)
  useEffect(()=>{

  },[])


  return (
    <div>
      {len>0 && (
  <div>
      {
        Object.keys(cartItem).map((items,index)=>{
          return (
            <div key={items}>
              <b>{index + 1} </b><span id='popover'> Name: {cartItem[items][1]}  Qty :{cartItem[items][0]}  Price : {cartItem[items][2]}</span>
            </div>
          )
        })
      }
    <Link  to={"/shop/checkout"} className='btn btn-primary mx-2'>
      Checkout
    </Link>
  </div>
)}
    </div>
  )
}

export default Cart
