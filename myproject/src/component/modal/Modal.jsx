import React, { useState, useEffect } from 'react'
import './style.css'
import { Button } from '@mui/material'
import axios from 'axios'
import Signup from '../../feature/signup/Signup'
import Login from '../../feature/login/Login'
import { useSelector, useDispatch } from 'react-redux'
import { changeUser } from '../../feature/login/LoginSlice'
import Popup from '../popup/Popup'
import { changeCart, changeLen, changeTotalSum } from '../../feature/cart/CartSlicer'

import { useNavigate } from 'react-router'


const Modal = () => {
  const user = useSelector((state) => state.login.user)
  const item_json = useSelector((state) => state.len.cart)
  const userData = localStorage.getItem('UserId')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [errorlen, setErrorlen] = useState(0)
  const handleLogout = async () => {
    // console.log('ok')
    let gettoken = localStorage.getItem('token')
    let data = {
      item_json: item_json,
      user: parseInt(userData)
    }
    // console.log(data, gettoken)
    // console.log('item_json', item_json, data)
    try {
      const response = await axios.post('http://127.0.0.1:8000/newshop/cartCreate/', data, {
        headers: {
          Authorization: `Bearer ${gettoken}`
        }
      })
      // console.log(response.data)
    } catch (errors) {
      const email = localStorage.getItem('email')
      let data = {
        item_json: item_json
      }
      try {
        const response = await axios.put(`http://127.0.0.1:8000/newshop/cartData/${email}`, data, {
          headers: {
            Authorization: `Bearer ${gettoken}`
          }
        })

      } catch (errors) {
        console.log('errorput', errors)
      }
    }

    let token = localStorage.setItem('token', null)
    localStorage.removeItem('cart')
    localStorage.removeItem('email')
    localStorage.removeItem('UserName')
    localStorage.removeItem('totalSum')
    localStorage.removeItem('len')
    dispatch(changeLen(0))
    dispatch(changeUser(''))
    navigate('/')
  }
  useEffect(() => {

  }, [])


  return (
    <div>
      <div className="modal1">
        {!user == '' ? <span style={{ color: 'white', margin: '4px 20px 4px 10px', textTransform: 'capitalize' }}><span className='mx-2'>{user}</span> <Button variant='contained' type='submit' onClick={handleLogout} color='primary'>Logout</Button></span> : <><Signup /><Login /></>}
        {/* Logout  */}
        <Popup />
      </div>


    </div>
  )
}

export default Modal
