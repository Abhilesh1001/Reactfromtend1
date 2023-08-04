import React,{useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { changeName,changeEmail,changePhone,changeDescription} from '../../feature/signup/SignUpSlice'
import axios from 'axios'


const Contact = () => {
    const name = useSelector((state)=>state.sign.name)
    const email = useSelector((state)=>state.sign.email)
    const phone = useSelector((state)=>state.sign.phone)
    const desc = useSelector((state)=>state.sign.desc)
    const [buttonthrott,setButtonthrttling] = useState(true)
    // const [token,setToken] = useState(null)
    const dispatch = useDispatch()
    const handleSubmit= async (e)=>{
        e.preventDefault()
        console.log('ok')
        let data ={
            name : name,
            email : email,
            phone : phone,
            desc: desc,
        }
        setButtonthrttling(false)
        let token=localStorage.getItem('token')
        console.log(data)
        let response = await axios.post('http://127.0.0.1:8000/newshop/newshonContact/',data,{
          headers :{
            Authorization : `Bearer ${token}`
          }
        })
        setTimeout(() => {
          setButtonthrttling(true)
        }, 4000);
        
        let result = response.data
        console.log(result)        
    }

  return (
    <div>
      <div className="container">
    <h1>Contact Us</h1>
    <form  onSubmit={handleSubmit} > 

    <div className="mb-3">
        <label htmlFor="name" className="form-label">Enter Your Name</label>
        <input type="text" onChange={(e)=>dispatch(changeName(e.target.value))} className="form-control" id="name" name = 'name' placeholder="Enter Your Name" />
      </div>

      <div className="mb-3">
        <label htmlFor="name" className="form-label">Email</label>
        <input type="text" onChange={(e)=>dispatch(changeEmail(e.target.value))} className="form-control" id="email" name = 'email'placeholder="Enter Your Email" />
      </div>

      <div className="mb-3">
        <label htmlFor="name" className="form-label">Phone</label>
        <input type="tel" className="form-control"onChange={(e)=>dispatch(changePhone(e.target.value))}  id="phone" name = 'phone' placeholder="Enter Your Phone No" />
      </div>
      <div className="mb-3">
        <label htmlFor="desc" className="form-label">Tell How may we help you</label>
        <textarea className="form-control" onChange={(e)=>dispatch(changeDescription(e.target.value))} id="desc" name = 'desc' rows="3"></textarea>
      </div>
    {buttonthrott && <button type="submit" className="btn btn-success">submit</button>}
</form>
</div>
    </div>
  )
}

export default Contact
