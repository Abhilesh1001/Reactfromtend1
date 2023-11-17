import React, { useEffect } from 'react'
import {useGetSingleProdQuery} from '../../services/rootApi'
import {useDispatch, useSelector} from 'react-redux'
import Addtocart from '../addtocart/Addtocart'
import {FacebookShareButton} from 'react-share'
import FacebookPlugin from './FacebookPlugin'
import Comment from '../../comment/Comment'
import './quick.css'


const QuickView = () => {
    const name = useSelector((state)=>state.len.name)
    const price = useSelector((state)=>state.len.price)
    // console.log(name,price)
    const id = localStorage.getItem("ProductID")
    const { data, error, isLoading }= useGetSingleProdQuery(id)
    // console.log(data?.image,isLoading)
    // {data?.product_name}
  return (
    <div>
      {!isLoading &&
        <div className="container">
        <div className="row">
            <div className="col-md-4 posFixed">
              <div   style={{position:'fixed', backgroundColor:'white', width:'400px', height:'400px'}}>
                <div className="row my-4" >
                    <img src={`http://127.0.0.1:8000${data?.image}`} style={{width:'300px',height:'300px'}} />
                </div>
                <span >
                    <button className="btn btn-primary mx-2">Buy Now</button>
                    <Addtocart id={`pr${id}`} name={name} price={price} />
                </span>
                </div>
                
            </div>
            <div className="col-md-8 posChange">  
                <h1>{data?.product_name}</h1>
                <p><b>Rs.{data?.price}</b></p>
                <p>{data?.desc}</p>
               
                <FacebookShareButton url='http://127.0.0.1:5173/shop/QuivkView'>Share button</FacebookShareButton><br />
                <FacebookPlugin />
                <div className='my-4'>

                <Comment productid={id}/>
                </div>

            </div> 

        </div>
    </div>
    }
      
    </div>
  )
}

export default QuickView
