import React,{useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {changeName,changeEmail,changePassword,changePassword2,changeCheckbox} from './SignUpSlice'
import { Button } from '@mui/material'
import axios from 'axios'
import {useNavigate} from 'react-router'


const Signup = () => {

  const name = useSelector((state)=>state.sign.name)
  const email = useSelector((state)=>state.sign.email)
  const password = useSelector((state)=>state.sign.password)
  const password2 = useSelector((state)=>state.sign.password2)
  const tc= useSelector((state)=>state.sign.tc)
  const [inputvalue,setInputval] = useState('')
  const [inputemail,setInputEmail] = useState('')
  const [inputpassword,setInputpasswordl] = useState('')
  const [inputpassword2,setInputpassword2l] = useState('')
  const [inputtc,setInputtc] = useState("off")
  const [successdata,setSuccessData] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [error,setError] = useState('')

  const submitform = async (e)=>{
    e.preventDefault();
    dispatch(changeName(inputvalue))
    dispatch(changeEmail(inputemail))
    dispatch(changePassword(inputpassword))
    dispatch(changePassword2(inputpassword2))
    dispatch(changeCheckbox(inputtc))
    // console.log(name)
    let data1 = {
        name : inputvalue,
        email : inputemail,
        password : inputpassword,
        password2 : inputpassword2,
        tc : inputtc,
    }
    // console.log(data1)
    try {
      const response = await axios.post('http://127.0.0.1:8000/cus/authreg/', data1)  
      const data2 = response.data.msg
      // console.log(data2)
      setInputval('')
      setInputEmail('')
      setInputpasswordl('')
      setInputpassword2l('')
      setInputtc("off")
      setSuccessData(data2)
    }catch (errors){
      console.log(errors.response.data.errors)
      setError(errors.response.data.errors)
    }
    navigate('/')

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
        <input type="email"  value={inputemail} onChange={(e)=>setInputEmail(e.target.value)} className='form-control'/>
        {error.email}

        <label htmlFor='name' className="form-label">Name</label>
        <input type="text" value={inputvalue} onChange={(e)=>setInputval(e.target.value)} className='form-control'/>

        <label htmlFor='password' className="form-label">Password</label>
        <input type="password" value={inputpassword} onChange={(e)=>setInputpasswordl(e.target.value)} className='form-control'/>
        <label htmlFor='password2' className="form-label">Confirm Password</label>
        <input type="password" value={inputpassword2} onChange={(e)=>setInputpassword2l(e.target.value)} className='form-control'/>
        <input value={inputtc} onChange={(e)=>setInputtc(e.target.checked)} type="checkbox"/>
        <label htmlFor="auth">Sure you want to SignUp</label>
        {successdata!=='' && <div><b>{successdata} Please login by providing your Email Id and password</b> </div>}
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
