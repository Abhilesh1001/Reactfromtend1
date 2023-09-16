import React,{useEffect,useState} from 'react'
import './style.css'
import Image from '../../assets/1.png'

const Aboutus = () => {
  
  return (
    <div>
      <div className="container">
        <div className="row">
          <h1>Welcome to AbhileshCart</h1>
          <div className="col-sm-6">
          <img src={Image} alt="" style={{width:'20vw'}} className='my-4' />
          </div>
          <div className="col-sm-6">

          </div>
        </div>
      </div>

     
    </div>
  )
}

export default Aboutus
