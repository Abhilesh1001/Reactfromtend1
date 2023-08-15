import React, { useEffect, useState } from 'react'
import { Button } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { changePassword, changeEmail, changeUser } from './LoginSlice'
import { changeLen, changeCart, changeTotalSum } from '../../feature/cart/CartSlicer'
import axios from 'axios'
import {useNavigate} from 'react-router'

const Login = () => {
    const email = useSelector((state) => state.login.email)
    const password = useSelector((state) => state.login.password)
    const user = useSelector((state) => state.login.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        let data = {
            email: email,
            password: password,
        }
        try {
            let response = await axios.post('http://127.0.0.1:8000/cus/authlogin/', data)
            let res = response.data
            localStorage.setItem('token', res.token.access)
        } catch (errors) {
            console.log(errors)
        }
        Profile()
        let token = localStorage.getItem('token')
        console.log(token, email)
        try {
            let response = await axios.get(`http://127.0.0.1:8000/newshop/cartGet/${email}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            console.log('getitem', response.data)
            localStorage.setItem('cart', response.data.item_json)
            dispatch(changeCart(response.data.item_json))
            let cart = JSON.parse(response.data.item_json)
            let sum = 0
            let totalSum = 0
            for (let item in cart) {
                sum += cart[item][0]
                totalSum += cart[item][0] * cart[item][2]
            }
            dispatch(changeLen(sum))
            localStorage.setItem('len',sum)
            localStorage.setItem('totalSum',totalSum)
            dispatch(changeTotalSum(totalSum))
        } catch (errors) {
            console.log('loginError', errors)
        }



    }
    useEffect(() => {
        let token = localStorage.getItem('token')
        if (token !== null) {
            Profile()
        }
    }, [])
    const Profile = async () => {
        let token = localStorage.getItem('token')
        try {

            let response = await axios.get('http://127.0.0.1:8000/cus/authuserpro', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            let res = response.data
            console.log(res)
            dispatch(changeUser(res.name))
            localStorage.setItem('UserName', res.name)
            localStorage.setItem('UserId', res.id)
            localStorage.setItem('email', res.email)
        } catch (error) {
            // console.log(error)
            localStorage.removeItem('UserName')
        }
    }
    const handleforgetpassword =()=>{
        navigate('/auth/resetnewpassword')
    }
    
    return (
        <div>
            {/* Login modal<!-- Button trigger modal --> */}
            <Button type="button" color='primary' className="btn btn-primary mx-2" variant="contained" data-bs-toggle="modal" data-bs-target="#login">
                Login
            </Button>
            {/* <!-- Modal --> */}
            <div className="modal fade" id="login" tabIndex="-1" aria-labelledby="login" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="login">Login</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form action="" onSubmit={handleSubmit}>
                            <div className="modal-body">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" onChange={(e) => dispatch(changeEmail(e.target.value))} className="form-control" />
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" onChange={(e) => dispatch(changePassword(e.target.value))} className="form-control" />
                                <div className="modal-footer">
                                    <span><button className='mx-5' onClick={handleforgetpassword} >Forget Password</button><button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Submit</button></span>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
