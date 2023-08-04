import React,{useState,useEffect} from 'react'
import './style.css'
import {Button} from '@mui/material'
import axios from 'axios'
import Signup from '../../feature/signup/Signup'
import Login from '../../feature/login/Login'
import {useSelector,useDispatch} from 'react-redux'
import { changeUser } from '../../feature/login/LoginSlice'
import Popup from '../popup/Popup'
 
import {useNavigate} from 'react-router'

const Modal = () => {
  const  user = useSelector((state)=>state.login.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleLogout =()=>{
    console.log('ok')
    let token =localStorage.setItem('token',null)
    dispatch(changeUser(''))
    navigate('/')
  }
  useEffect(()=>{
    
  },[])
  

  return (
    <div>
        <div className="modal1">
        {!user=='' ? <span style={{color:'white',margin:'4px 10px 4px 10px',textTransform:'capitalize'}}> {user}<Button variant='contained' type='submit' onClick={handleLogout} color='primary'>Logout</Button></span> :<><Signup /><Login /></>}
        {/* Logout  */}
        <Popup />
        </div>
        

    </div>
  )
}

export default Modal
