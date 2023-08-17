import React,{useEffect, useState} from 'react'
import { useGetSessionTokenQuery } from '../../services/rootApi'
import axios from 'axios'

const UserName = () => {
    const [user,setUser] = useState('Guest')
    // const {data,isLoading} = useGetSessionTokenQuery() 
    
    // console.log('data',data)
    useEffect(()=>{
        tokenfun()
    },[])
    const tokenfun =  async ()=>{
        // console.log(data)
        try {
            const res = await axios.get('http://127.0.0.1:8000/newshop/gettokensession/')
            // const result = res
            console.log('result',res)
        }catch(error){
            console.log(error.response.data.token)
        }

       
    }
  return (
    <div>
        
      Welcome {user} 
    </div>
  )
}

export default UserName
