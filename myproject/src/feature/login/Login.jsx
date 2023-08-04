import React, { useEffect, useState } from 'react'
import { Button } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { changePassword, changeEmail, changeUser } from './LoginSlice'
import axios from 'axios'

const Login = () => {
    const email = useSelector((state) => state.login.email)
    const password = useSelector((state) => state.login.password)
    const user = useSelector((state) => state.login.user)
    const dispatch = useDispatch()
    // const [user,setUser] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault()
        let data = {
            email: email,
            password: password,
        }
        try {
            let response = await axios.post('http://127.0.0.1:8000/cus/authlogin/', data)
            let res = response.data
            console.log(res.token.access)
            localStorage.setItem('token', res.token.access)
        } catch (errors) {
            console.log(errors)
        }
        Profile()
    }
    useEffect(() => {
        let token = localStorage.getItem('token')
        if (token !==null) {
            Profile()
        }
    }, [])
    const Profile = async () => {
        let token = localStorage.getItem('token')
        try{

            let response = await axios.get('http://127.0.0.1:8000/cus/authuserpro', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            let res = response.data
            // console.log('user', res.name)
            dispatch(changeUser(res.name))
            localStorage.setItem('UserName',res.name)
        }catch(error){
            console.log(error)
        }
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
                            <h5 className="modal-title" id="login">Sign Up</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form action="" onSubmit={handleSubmit}>
                            <div className="modal-body">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" onChange={(e) => dispatch(changeEmail(e.target.value))} className="form-control" />
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" onChange={(e) => dispatch(changePassword(e.target.value))} className="form-control" />
                                <div className="modal-footer">
                                    <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Submit</button>
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
