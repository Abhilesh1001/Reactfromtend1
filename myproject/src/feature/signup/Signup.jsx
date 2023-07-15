import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {changeName,changeEmail,changePassword,changePassword2,changeCheckbox} from './SignUpSlice'
import { Button } from '@mui/material'
import axios from 'axios'


const Signup = () => {

  const name = useSelector((state)=>state.sign.name)
  const email = useSelector((state)=>state.sign.email)
  const password = useSelector((state)=>state.sign.password)
  const password2 = useSelector((state)=>state.sign.password2)
  const tc= useSelector((state)=>state.sign.tc)
  const dispatch = useDispatch()

  const submitform = async (e)=>{
    e.preventDefault();
    console.log(name)
    let data1 = {
        name : name,
        email : email,
        password : password,
        password2 : password2,
        tc : tc,
    }
    console.log(data1)
    const response = await axios.post('http://127.0.0.1:8000/cus/authreg/', data1)
    const data2 = response.data
    console.log('data2',data2)
}

  return (
    <div>
      {/* Sign Up modal  */}
        <Button type="button" color='primary' className="btn btn-primary mx-2" variant="contained"   data-bs-toggle="modal" data-bs-target="#exampleModal">
  SignUp 
</Button>

{/* <!-- Modal --> */}
<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Sign Up</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <form action="" >    
      <div className="modal-body">

        <label htmlFor='email' className="form-label">Email Id</label>
        <input type="email" onChange={(e)=>dispatch(changeEmail(e.target.value))} className='form-control'/>

        <label htmlFor='name' className="form-label">Name</label>
        <input type="text" onChange={(e)=>dispatch(changeName(e.target.value))} className='form-control'/>

        <label htmlFor='password' className="form-label">Password</label>
        <input type="password" onChange={(e)=>dispatch(changePassword(e.target.value))} className='form-control'/>
        <label htmlFor='password2' className="form-label">Confirm Password</label>
        <input type="password" onChange={(e)=>dispatch(changePassword2(e.target.value))} className='form-control'/>
        <input onChange={(e)=>dispatch(changeCheckbox(e.target.value))} type="checkbox"/>
        <label htmlFor="auth">Sure you want to SignUp</label>
      <div className="modal-footer">
        <button type="submit" onClick={submitform} className="btn btn-primary">Sign Up</button>
      </div>
      </div>
      </form>
    </div>
  </div>
</div>
    </div>
  )
}

export default Signup
