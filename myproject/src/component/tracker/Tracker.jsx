import React, { useEffect, useState } from 'react'
import axios from 'axios'


const Tracker = () => {
    const [order_id, setOrderId] = useState(0)
    const [email, setEmail] = useState('')
    const [tracker, setTracker] = useState([])
    const [cartData, setCartData] = useState([])
    const emailID = localStorage.getItem('email')
    const [orderDetail,setOrderDetails] = useState('') 
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
    useEffect( ()=>{
      orderDetails()
    },[])

    const orderDetails = async ()=>{
      let token = localStorage.getItem('token')
      const emailData = {
        email : emailID
      }
      // console.log(token,emailData)
      const headers = {
        Authorization: `Bearer ${token}`
      };
      try{
        const response = await axios.post(`http://127.0.0.1:8000/newshop/orderDetail/`,emailData,{headers})
        // console.log(response.data)
        
        setOrderDetails(response.data)

      }catch(error){
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
      <div className="row">
      <div className="col-sm-6">
      <div className="col my-4">
        <h2>Enter your order ID and Email Id to track your order</h2>
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
              // console.log(tracker[items].update_id)
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
      <div className="col-sm-4 my-6 container">
          <h2>Your Order Details</h2>
          <table className="table table-success table-striped">
            <thead>
              <tr>
                <th>Order No.</th>
                <th>Email Id</th>
              </tr>
            </thead>
            {
              Object.keys(orderDetail).map((items,index)=>{
                // console.log(orderDetail[items].email)
                return <tbody key={index}>
                <tr>
                  <td>{orderDetail[items].order_id}</td>
                  <td>{orderDetail[items].email}</td>
                </tr>
              </tbody>
              })
            }
            
          </table>

      </div>
      </div>
    </div>
  )
}

export default Tracker
