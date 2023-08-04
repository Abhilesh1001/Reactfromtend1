import React,{useEffect, useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'

const ReviewCart = () => {
    const totalSum = useSelector((state)=>state.len.totalSum)
    const cart = useSelector((state)=>state.len.cart)
    const len = useSelector((state)=>state.len.len)
    const [cartItem,setCartItem] = useState({})
    useEffect(()=>{
        if(cart && typeof cart ==='string'){
            setCartItem(JSON.parse(cart))
        }
    },[cart])
    
    // console.log('cartItem',cartItem)
  return (
    <div>
       <div className="col my-4">
                    <h2>Step1 - My Awesome cart checkout - Review your cart items</h2>
                    <div className="mt-4">
                        <ul className="list-group" id='items'>
                            {
                                Object.keys(cartItem).map((item)=>{
                                    // console.log(cartItem[item][0])
                                    return (
                                        <div key={item}>
                                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                                     {cartItem[item][1]}
                    <span className="badge bg-primary rounded-pill">{cartItem[item][0]}</span>
                </li>
                                        </div>
                                    )
                                })
                            }
                        </ul>

                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb my-2">
                                <li className="breadcrumb-item active" aria-current="page">The Total price of your item is <b><span id="totalprice">{totalSum}</span></b></li>
                            </ol>
                        </nav>
                    </div>
                </div>
    </div>
  )
}

export default ReviewCart
