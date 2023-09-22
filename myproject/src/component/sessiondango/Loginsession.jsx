import React,{useState} from 'react'
import { useGetLoginMutation,useSetSessionTokenMutation } from '../../services/rootApi'
import UserName from './UserName'
import axios from 'axios'
const Loginsession = () => {
    const [email ,setEmail] = useState('')
    const [password , setPassword] = useState('')
    const [session,setSession] = useState('')
   

  const [getLogin,{isLoading}] = useGetLoginMutation()
  const [setSessionToken,{isLoading :issetLoading}] = useSetSessionTokenMutation()
    // console.log(data)
    const handleSubmit = async (e) => {
      e.preventDefault();
      // console.log('email', email, 'password', password);
      const data = {
          email: email,
          password: password
      };
      try {
          const res = await getLogin(data);
          // console.log(res.data.token.access);
          const token = {
              "token": res.data.token.access
          };
          // console.log('tokendata', token);
          
          const setsession = await axios.post('http://127.0.0.1:8000/newshop/settokensession/', token);
          // console.log('setsession result', setsession.data);
          setSession(setsession.data)
          
            const res1 = await axios.get('http://127.0.0.1:8000/newshop/gettokensession/'); 
            // console.log('result', res1.data);
          
      } catch (error) {
          console.error('An error occurred:', error.response.data.token);
      }
  };
  

    
    // console.log(isLoading)
  return (
    <div>
        <div className="container">
          {
            !isLoading && <UserName />
          }
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