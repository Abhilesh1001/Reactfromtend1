import React,{useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { changeLen,changeProductID } from '../../../feature/cart/CartSlicer'
import {
  Link
} from "react-router-dom"
import Addtocart from '../../addtocart/Addtocart'
import './style.css'


const ProductCategory = ({id,image,name, price, date,category,desc}) => {
    const dispatch = useDispatch()     
    const handleQuickView=(e)=>{
      // console.log('ok')
      // console.log(e.target.id)
      dispatch(changeProductID(e.target.id))
    }



  return (
    <div className='my-4'>
        <div className="card" style={{width:'18rem'}}>
  <img src={image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text">Product Name : <b>{name}</b></p>
    <p className="card-text">MRP Rs.<b>{price}</b></p>
    <p className="card-text">Publish Date : <b>{date}</b></p>
    <p className="card-text">{desc}</p>
  </div>
  <span><Addtocart id={`pr${id}`} /><Link className="btn btn-primary mx-2" to={"/shop/QuivkView"} id={id} onClick={handleQuickView}>Quick View</Link></span>
  

  </div>
</div>

  )
}
export default ProductCategory
