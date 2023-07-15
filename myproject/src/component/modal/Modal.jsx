import React,{useState} from 'react'
import './style.css'
import {Button} from '@mui/material'
import axios from 'axios'
import Signup from '../../feature/signup/Signup'


const Modal = () => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setpassword] = useState('')
    const [password2,setpassword2] = useState('')
    const [checkbox,setCheckbox] = useState("off")

    const submitform = async (e)=>{
        e.preventDefault();
        
        let data1 = {
            name : name,
            email : email,
            password : password,
            password2 : password2,
            tc : checkbox,
        }
        console.log(data1)
        let {data} = await axios.post('http://127.0.0.1:8000/cus/authreg/',data1,{
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
        console.log(data)
    }

  return (
    <div>
        <Signup />
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
        <input type="email" onChange={(e)=>setEmail(e.target.value)} className='form-control'/>

        <label htmlFor='name' className="form-label">Name</label>
        <input type="text" onChange={(e)=>setName(e.target.value)} className='form-control'/>

        <label htmlFor='password' className="form-label">Password</label>
        <input type="password" onChange={(e)=>setpassword(e.target.value)} className='form-control'/>
        <label htmlFor='password2' className="form-label">Confirm Password</label>
        <input type="password" onChange={(e)=>setpassword2(e.target.value)} className='form-control'/>
        <input onChange={(e)=>setCheckbox(e.target.value)} type="checkbox"/>
        <label htmlFor="auth">Sure you want to SignUp</label>
      <div className="modal-footer">
        <button type="submit" onClick={submitform} className="btn btn-primary">Sign Up</button>
      </div>
      </div>
      </form>
    </div>
  </div>
</div>



        
         

      {/* Login modal<!-- Button trigger modal --> */}
<Button type="button" color='primary' className="btn btn-primary mx-2" variant="contained" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Login 
</Button>

{/* <!-- Modal --> */}
<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Sign Up</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

{/* Logout  */}

<Button variant='contained' color='primary'>Logout</Button>
    </div>
  )
}

export default Modal
