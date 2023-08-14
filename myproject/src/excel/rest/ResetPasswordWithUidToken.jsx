import React,{useState} from 'react'
import { useParams } from 'react-router' 
import axios from 'axios'

const ResetPasswordWithUidToken = () => {

    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [message,setMessage] = useState('')
    const [error,setError] = useState('')
    const {id,token} = useParams()
    console.log(id,token)
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("ok")
       
        const data = {
            password: password,
            password2: password2
        }
        try{
            const response = await axios.post(`http://127.0.0.1:8000/cus/send-reset-password/${id}/${token}/`,data)
          const res = response.data.msg  
          console.log('response',res)
          setPassword('')
            setPassword2('') 
            setMessage(res)
            console.log(res)
        }

        catch(error){
            console.log('error',error)
            // setError(error)
        }
    }


  return (
    <div className=' container my-5' style={{ backgroundColor: 'lemonchiffon', fontFamily: 'monospace' }} >
            <div className='container fs-1'>
                Change Password
            </div>
            <div className="container m-2">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="password" className='form-label'>New Password</label>
                    <input type="password" value={password} className="form-control my-2" onChange={(e) => setPassword(e.target.value)} />
                    <label htmlFor="password" className='form-label'>Confirm Password</label>
                    <input type="password"   className="form-control my-2" onChange={(e) => setPassword2(e.target.value)} />
                    <button type='submit' style={{ margin: '10px' }} className='btn btn-success'>Submit</button>
                    {/* {
                        error!=='' && <div style={{color:'red'}}>{error}</div>  
                    } */}
                    {
                        message!='' && <div style={{color:'green'}}>{message}</div>
                    }
                </form>
            </div>

        </div>
  )
}

export default ResetPasswordWithUidToken