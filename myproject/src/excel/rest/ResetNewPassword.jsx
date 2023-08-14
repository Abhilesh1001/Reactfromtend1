import React, { useState } from 'react'
import axios from 'axios'

const ResetNewPassword = () => {
    const [email,setEmail] = useState('')
    const [message,setMessage] = useState('')
    const [error,setError] = useState('')
    const handleSubmit = async (e)=>{
        e.preventDefault()
        console.log('ok')
        const data = {
            email : email 
        }
        try{
            const response = await axios.post('http://127.0.0.1:8000/cus/send-reset-password/',data)
        const res = response.data 
         setMessage(res.msg)   
        console.log(res)
            
        }catch(error){
            setError(error.response.data.errors.non_field_errors)
        }
        
    }

  return (
    <div className=' container my-5' style={{ backgroundColor: 'lemonchiffon', fontFamily: 'monospace' }} >
            <div className='container fs-1'>
                Reset Password
            </div>
            <div className="container m-2">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email" className='form-label'>Enter Email</label>
                    <input type="email" value={email} className="form-control my-2" onChange={(e) => setEmail(e.target.value)} />
                    <button type='submit' style={{ margin: '10px' }} className='btn btn-success'>Submit</button>
                    {
                        error!=='' && <div style={{color:'red'}}>{error}</div>  
                    }
                    {
                        message!='' && <div style={{color:'green'}}>{message}</div>
                    }
                </form>
            </div>

        </div>
  )
}

export default ResetNewPassword