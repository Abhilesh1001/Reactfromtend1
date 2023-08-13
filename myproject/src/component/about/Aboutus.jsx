import React,{useEffect,useState} from 'react'
import './style.css'
import Excel from '../../excel/Excel'

const Aboutus = () => {
  const [productdetail,setProduct] = useState([])
  const [postData,setPostData] = useState([])
  const [finalData,setFinalData] = useState([])
  useEffect(()=>{
    // product API 
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(json=>{
      const data ={
        category : "product",
        data : json.products
      }
      setProduct([data]) // staet with [] is important for array use after another push not require if require in seprate manner the we can use []
    }); 
    //  user dummy API  
    
  },[])


  useEffect(()=>{

     fetch('https://dummyjson.com/posts')
    .then(res=>res.json())
    .then(json=>{
      const result = [...productdetail]
      result.push({
        category : "post",
        data : json.posts
      })
      setPostData(result)
    })
    
  },[productdetail])

  useEffect(()=>{
    // console.log("post",postData)
      fetch('https://dummyjson.com/users')
    .then(res=>res.json())
    .then(json=>{
      const res = [...postData]
      res.push({
        category : "user",
        data : json.users
      })
      setFinalData(res)
    })
    // console.log('finaldata',finalData)
    
  },[postData])
  

  return (
    <div>

      <Excel finaldata={finalData} />
      This page is realeted to About us
    </div>
  )
}

export default Aboutus
