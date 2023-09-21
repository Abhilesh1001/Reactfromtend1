import React, { useEffect, useState } from 'react'
import {
  Link
} from "react-router-dom"
import SearchIcon from '@mui/icons-material/Search';
import './style.css'
import Modal from '../modal/Modal';
import { Button } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { changeCart, changeLen, changeTotalSum, changeQuery } from '../../feature/cart/CartSlicer'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const len = useSelector((state) => state.len.len)
  const [query, setQuery] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate('')
  const handleSearch = (e) => {
    e.preventDefault()
    localStorage.setItem('query', query)
    dispatch(changeQuery(query))
    navigate('/shop/search')
  }


  const ClearCart = () => {
    // console.log('ok')
    localStorage.removeItem('cart')
    localStorage.removeItem('len')
    dispatch(changeCart(localStorage.getItem('cart')))
    dispatch(changeLen(localStorage.getItem('len')))
    console.log(localStorage.getItem('len'))
    dispatch(changeTotalSum(localStorage.getItem('totalSum')))
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/"}>AbhileshCart</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to={"/"}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/shop/about"}>About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/shop/tracker"}>Tracker</Link>
              </li>
              {/* <li className="nav-item">
              <Link className="nav-link" to={"/blog"}>Blog</Link>
            </li> */}
              <li className="nav-item">
                <Link className="nav-link" to={"/shop/contact"}>Contact Us</Link>
              </li>
              {/* <li className="nav-item">
              <Link className="nav-link" to={"/login/session"}>Login Page</Link>
            </li> */}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to={'/auth/resetpassword'}>Reset Password</Link></li>
                  <li><Link className="dropdown-item" to={'/shop/productpage'}>Product Page</Link></li>
                  <li><Link className="dropdown-item" to={'/shop/productpdf'}>Product PDF</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
            </ul>

            <form onSubmit={handleSearch} >
              <div className='d-flex flex-row'>
                <div className="fleaxitem mx-5">
                  <SearchIcon color='primary' />
                  <input className='form-control' onChange={(e) => setQuery(e.target.value)} />
                </div>
                <Button type='submit' variant='outlined'>Search</Button>
              </div>
            </form>

            <Modal />
            {len > 0 && <button type='button' onClick={ClearCart} className='btn btn-primary mx-2'>Clear Cart</button>}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
