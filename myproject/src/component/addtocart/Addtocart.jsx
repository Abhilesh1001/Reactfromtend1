import React, { useEffect, useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { changeLen,changeCart,changeTotalSum} from '../../feature/cart/CartSlicer'

const Addtocart = ({id,name,price}) => {

  if(localStorage.getItem('cart')===null){
    var cart ={}
    }
   else{
cart = JSON.parse(localStorage.getItem('cart'))
}

const handlelocaldis =(sum,totalSum,cart)=>{
  dispatch(changeLen(sum))
  dispatch(changeCart(JSON.stringify(cart)))
  localStorage.setItem('cart',JSON.stringify(cart))
  localStorage.setItem('len',sum)
  localStorage.setItem('totalSum',totalSum)
  dispatch(changeTotalSum(totalSum))
}
    const dispatch = useDispatch()
    const len = useSelector((state)=>state.len.len)
      const handleClick=(e)=>{
        let qty = 1
        var idstr = e.target.id.toString()

        if (cart[idstr]!=undefined){
          qty = parseInt(cart[idstr][0]) + 1
        }else{
          name = name
          price = price
        }
        cart[idstr] = [qty,name,price]
        let sum =0 
        let totalSum = 0
        let obj = Object.keys(cart).length
        for(let item in cart){
            sum +=cart[item][0] 
            totalSum += cart[item][0]* cart[item][2]
        }
        handlelocaldis(sum,totalSum,cart)
    }
    const handleRemove=(e)=>{
      var idstr = e.target.id.toString()
      let sum =0 
      let qty = cart[idstr][0]
      if(len>=0){
        if (cart[idstr]!=undefined){
            qty = Math.max(0,qty-1)
      }else{
        cart[idstr][0]=0
      }
      if(qty==0){
        delete cart[idstr]
      }
      if(qty!=0){

        cart[idstr] = [qty,name,price]
      }
      let obj = Object.keys(cart)
      let totalSum = 0
      // console.log(totalSum)
        for(let item in cart){
          sum +=cart[item][0] 
          totalSum += cart[item][0]* cart[item][2]
        }
        handlelocaldis(sum,totalSum,cart)
      }
  }

    useEffect(()=>{
      let sum =0
      let totalSum = 0
      for(let item in cart){
        sum +=cart[item][0] 
        totalSum += cart[item][0]* cart[item][2]
      }
      handlelocaldis(sum,totalSum,cart)
    },[cart])
    
  return (
    <>
      
      {cart[id]!==undefined && cart[id][0] || 0 ?<span><div id={id} className="btn btn-primary car mx-2" onClick={handleClick} >+</div><span>{cart[id][0]}</span><div id={id} className="btn btn-primary cart mx-2" onClick={handleRemove}>-</div></span>:<div className="btn btn-primary cart" id={id}  onClick={handleClick} >Add to cart</div>}
      </>
    
  )
}

export default Addtocart
