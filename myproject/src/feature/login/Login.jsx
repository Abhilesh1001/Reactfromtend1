import React from 'react'
import {Button} from '@mui/material'
import {useSelector,useDispatch} from 'react-redux'
import {changePassword,changeEmail,changeCheckbox,changePassword2} from './LoginSlice'

const Login = () => {
    const email = useSelector((state)=>state.login.email)
    const password = useSelector((state)=>state.login.password)
    const password2 = useSelector((state)=>state.login.password2)
    const dispatch = useDispatch()
    const handleSubmit =(e)=>{
        e.preventDefault()
        let data = {
            email : email,
            password : password,
            password2 : password2
        }
        console.log(data)
        console.log('ok')
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
                            <input type="email" onChange={(e)=>dispatch(changeEmail(e.target.value))}  className="form-control" />
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password"  onChange={(e)=>dispatch(changePassword(e.target.value))} className="form-control" />
                            <label htmlFor="password2" className="form-label">Confirm Password</label>
                            <input type="password"  onChange={(e)=>dispatch(changePassword(e.target.value))} className="form-control" />
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
