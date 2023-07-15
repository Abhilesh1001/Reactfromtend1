import React from 'react'
import './style.css'
import { Button} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import Modal from '../modal/Modal';


const Header = () => {
  return (
    <div >
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/shop">My Awesome Cart</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/shop">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/shop/about">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/shop/tracker">Tracker</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/blog">Blog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/shop/contact">Contact Us</a>
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
