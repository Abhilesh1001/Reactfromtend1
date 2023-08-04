import React,{useEffect,useState} from 'react'
import './style.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Product from './Product';
import HomeCategoty from './categorywiseview/HomeCategoty';

import axios from 'axios'
// import Carousel from './Carousel'

const Home = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 2000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };


    const [loading,setLoading] = useState(false)
    const [data,setData] =useState()
    useEffect(()=>{
        product()
    },[])
    
    const product =  async () =>{

        try {
            let response = await axios.get('http://127.0.0.1:8000/newshop/prod/')
            setLoading(true)
            let data1 = response?.data
            setData(data1)

        }catch(errors){
            console.log('prodcut not found')
        }
    }
    // console.log(data)
    const productData = data?.map((item)=>{
        const ImageUrl = `http://127.0.0.1:8000${item.image}`
        return (
            <Product key={item?.product_id} id={item.product_id} image={ImageUrl} name={item.product_name} price={item.price} date={item.pub_data} category={item.category} desc={item.desc} />
        )
    })

    return (
        <div className='container '>
        <Carousel responsive={responsive}>
        {loading && productData}
        </Carousel>
        <HomeCategoty />
        </div>
    )
}

export default Home

