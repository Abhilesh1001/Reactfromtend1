import React, { useEffect, useState } from 'react'
import { Button, Popover } from '@mui/material'
import {
  Link
} from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { changeCart } from '../../feature/cart/CartSlicer'
import axios from 'axios'

const cart1 = localStorage.getItem('cart')

const Tracker = () => {
  const [order_id, setOrderId] = useState(0)
  const [email, setEmail] = useState('')
  const [tracker, setTracker] = useState([])
  const [cartData, setCartData] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()
    // console.log(email, order_id)
    let data = {
      order_id: parseInt(order_id),
      email: email,
    }
    let token = localStorage.getItem('token')
    // console.log(token)
    const headers = {
      Authorization: `Bearer ${token}`
    };
    try {
      let response = await axios.post('http://127.0.0.1:8000/newshop/OrderUpdate/', data, { headers })

      // console.log(response.data)
      setTracker(response.data.order_updates)
      setCartData(JSON.parse(response.data.order[Object.keys(response.data.order)].items_json))
    } catch (error) {
      console.log(error)
    }

  }
  // let data1 = []
  // for (const i in cartData) {
  //   console.log('cartDatai',cartData[i][0])

  // }
  // // console.log('data1', data1)
  // console.log('cartData',cartData)
  return (
    <div className='container'>
      <div className="col my-4">
        <h2>Enter your order ID and Emateil Id to track your order</h2>
        <form id="trackerForm" onSubmit={handleSubmit} className="row g-3">
          <div className="col-md-6">
            <label htmlFor="name" className="form-label">Order Id</label>
            <input type="text" onChange={(e) => setOrderId(e.target.value)} className="form-control" id="orderId" name='orderId' />
          </div>
          <div className="col-md-6">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" onChange={(e) => setEmail(e.target.value)} className="form-control" id="email" name='email' />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary my-2">Track Order</button>
          </div>
        </form>
        <div>
          <h2>Your order Status</h2>
          {
            Object.keys(tracker).map((items) => {
              console.log(tracker[items].update_id)
              return (
                <div key={items}>
                  <div className="col my-4">
                    <div className="mt-4">
                      <ul className="list-group" id='items'>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                          {tracker[items].update_desc}
                          <span className="badge bg-primary rounded-pill">{tracker[items].timestamp}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })
          }
          <h2>Your Order Details</h2>
          {
            Object.keys(cartData).map((items) => {
              // console.log(cartData[items])
              return (
                <div key={items}>
                  <div className="col my-4">
                    <div className="mt-4">
                      <ul className="list-group" id='items'>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                          {cartData[items][1]}
                          <span className="badge bg-primary rounded-pill">{cartData[items][0]}</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                </div>
              )
            })
          }




        </div>
      </div>
    </div>
  )
}

export default Tracker
