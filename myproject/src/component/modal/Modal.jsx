import React,{useState} from 'react'
import './style.css'
import {Button} from '@mui/material'
import axios from 'axios'
import Signup from '../../feature/signup/Signup'
import Login from '../../feature/login/Login'

const Modal = () => {
  return (
    <div>
        <div className="modal1">
        <Signup />
         <Login />
        {/* Logout  */}
        <Button variant='contained' color='primary'>Logout</Button>
        </div>
        

    </div>
  )
}

export default Modal
