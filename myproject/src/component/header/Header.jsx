import React, { useState } from 'react'
import './style.css'
import { Button} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import Modal from '../modal/Modal';
import {changeCart,changeLen,changeTotalSum} from '../../feature/cart/CartSlicer'
import {useDispatch,useSelector} from 'react-redux'
import {changeUser} from '../../feature/login/LoginSlice'
import {
  Link
} from "react-router-dom"
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
    <div className='headerarea'>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to={"/"}>My Awesome Cart</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to={"/"}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/shop/about"}>About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/shop/tracker"}>Tracker</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/blog"}>Blog</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/shop/contact"}>Contact Us</Link>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#"> </a>
            </li>
          </ul>
          <div className="fleaxitem mx-5">
            <SearchIcon color='primary' />
            <input className='form-control' />
          </div>
          <Button variant='outlined'>Search</Button>
          <Modal />
        </div>
      </nav>
    </div>
  )
}

export default Header
