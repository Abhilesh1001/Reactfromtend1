import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import './search.css'
import {useNavigate} from 'react-router-dom'

const Search = () => {
    const queryName = useSelector((state) => state.len.query)
    const [data, setData] = useState('')
    console.log('qname', queryName)
    const navigate = useNavigate()

    useEffect(() => {
        searchItems()
    }, [queryName])

    const searchItems = async () => {
        const data = {
            "search": queryName
        }
        console.log(data)
        try {
            const response = await axios.post('http://127.0.0.1:8000/newshop/searchItem/', data)
            console.log('res', response.data)
            setData(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    const handdleQuickView = (e)=>{
        // console.log('paint',e.target.id)
        localStorage.setItem('ProductID',e.target.id)
        navigate('/shop/QuivkView')
    }

    return (
        <div className='container'>
            <div className="row">
                <div className="col-sm-1">
                </div>
                <div className="col-sm-11 box  my-4">
                <div><h3 className='my-2'>Your Search Result</h3></div>
               <div className="box">
                
                        {
                           Object.keys(data).map((item,index)=>{
                            console.log(data[item])
                            const Image = data[item].image
                            return <div key={index} className="boxChild mx-1 my-2">
                                <img src={`http://127.0.0.1:8000/${Image}`} onClick={handdleQuickView} id={data[item].product_id} style={{width:'80%',height:'60%'}} />
                                <div className='my-2 mx-2'>Product Name<b> : {data[item].product_name}</b></div>
                                <div className='my-2 mx-2'>MRP Rs.<b> : {data[item].price}</b></div>
                                <div className='my-2 mx-2'>{data[item].desc}</div>
                            </div>
                           }) 
                        }
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Search