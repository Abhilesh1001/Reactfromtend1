import React, { useState } from 'react'
import { Button} from '@mui/material'
import './header.css'
import SearchIcon from '@mui/icons-material/Search';
import Modal from '../modal/Modal';
import {changeCart,changeLen,changeTotalSum} from '../../feature/cart/CartSlicer'
import {useDispatch,useSelector} from 'react-redux'
import {changeUser} from '../../feature/login/LoginSlice'
import {
  Link
} from "react-router-dom"
import Navbar from './Navbar';
const cart = localStorage.getItem('cart')
const len = localStorage.getItem('len')
const TotalSum = localStorage.getItem('totalSum')
const UserName = localStorage.getItem('UserName')

const Header = () => {
  const dispatch = useDispatch()

  useState(()=>{
    dispatch(changeCart(cart))    
    dispatch(changeLen(len))    
    dispatch(changeTotalSum(TotalSum))    
    dispatch(changeUser(UserName))
  },[])


  return (
    <div className='headerarea' >
      <Navbar />
    </div>
  )
}

export default Header
