import React,{useState} from 'react'
import { useGetLoginMutation } from '../../services/rootApi'

const Loginsession = () => {
    const [email ,setEmail] = useState('')
    const [password , setPassword] = useState('')

  const [getLogin,{isLoading}] = useGetLoginMutation()
    // console.log(data)
    const handleSubmit = async (e)=>{
        e.preventDefault()
        console.log('email',email,'password',password)
        const data = {
            email : email,
            password : password
        }
        const res = await getLogin(data)
        console.log(res)
    }
  return (
    <div>
        <div className="container">
            <form onSubmit={handleSubmit}>
            <label htmlFor="email" className="form-label">Email</label>
            <input type="text" className="form-control" onChange={(e)=>setEmail(e.target.value)} />
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" onChange={(e)=>setPassword(e.target.value)} />
            <button className="btn-primary my-4" type='submit'>Submit</button>
            </form>
        </div>

    </div>
  )
}

export default Loginsession