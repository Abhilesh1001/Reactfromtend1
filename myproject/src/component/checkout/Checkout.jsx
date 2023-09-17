import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useNavigate} from 'react-router'
import { changeCart, changeLen,changeTotalSum } from '../../feature/cart/CartSlicer'
import { changeUser } from '../../feature/login/LoginSlice'
import axios from 'axios'
import ReviewCart from './ReviewCart'
// const id = localStorage.getItem('UserId')

const Checkout = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [address, serAddress] = useState('')
    const [address2, setAddress2] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zip, setZip] = useState('')
    const [phoneno, setPhoneno] = useState('')
    const [eror,setError] =useState(false)
    const userId = localStorage.getItem('UserId')
    const cart = useSelector((state)=>state.len.cart)
    const navigate = useNavigate()

    const dispatch = useDispatch()

    const handleSubmit = async (e) => {
        e.preventDefault()
        // console.log('ok')
        let data = {
            items_json: cart,
            user : userId,
            name: name,
            email: email,
            address1: address,
            address2: address2,
            city: city,
            state: state,
            zip: zip,
            phoneno: phoneno
        }
        console.log(data)
        try {
            let token = localStorage.getItem('token')
            let response = await axios.post('http://127.0.0.1:8000/newshop/order/', data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            let responseData = response.data
            // console.log('response', responseData)
            console.log(responseData)
            alert(`your order hasbeen placed and your order Id is ${responseData.order_id} track your order bt tracker and email id`)
            localStorage.removeItem('cart')
            localStorage.removeItem('len')
            localStorage.removeItem('totalSum')
            dispatch(changeCart("{}"))
            dispatch(changeTotalSum(0))

            navigate('/')

        } catch (error) {
            console.log('error', error)

            alert('Please login for purchse the item in your cart')
    
        }



        
        // console.log(data)
    }
    return (
        <div>
            <div className="container">
                <ReviewCart />
               
                <div className="col my-4">

                    <h2>Step 2 - Enter Adress and other details</h2>

                    <form onSubmit={handleSubmit} className='row'>
                        <div className="col-md-6">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" onChange={(e) => setName(e.target.value)} className="form-control" id="name" name='name' />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" onChange={(e) => setEmail(e.target.value)} className="form-control" id="email" name='email' />
                        </div>
                        <div className="col-12">
                            <label htmlFor="address" className="form-label">Address</label>
                            <input type="text" onChange={(e) => serAddress(e.target.value)} className="form-control" id="address" name='adress' placeholder="1234 Main St" />
                        </div>
                        <div className="col-12">
                            <label htmlFor="adress2" className="form-label">Address 2</label>
                            <input type="text" onChange={(e) => setAddress2(e.target.value)} className="form-control" id="address2" name='adress2' placeholder="Apartment, studio, or floor" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="city" className="form-label">City</label>
                            <input type="text" onChange={(e) => setCity(e.target.value)} className="form-control" id="city" name='city' />
                        </div>
                        <div className="col-md-4">
                            <div className="col-md-6">
                                <label htmlFor="state" className="form-label">State</label>
                                <input type="text" onChange={(e) => setState(e.target.value)} className="form-control" id="state" name='state' />
                            </div>
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="zip" className="form-label">Zip</label>
                            <input type="text" onChange={(e) => setZip(e.target.value)} className="form-control" id="zip" name='zip' />
                        </div>
                        <div className="col my-4">
                            <label htmlFor="phone" className="form-label">Phone Number</label>
                            <input type="text" className="form-control" onChange={(e) => setPhoneno(e.target.value)} id="phone" name='phone' />
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">Place Order</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Checkout
