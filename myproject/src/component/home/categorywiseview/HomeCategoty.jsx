import React,{useEffect,useState} from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductCategory from './ProductCategory';
import axios from 'axios'
import Product from '../Product';



const HomeCategoty = () => {
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
            let response = await axios.get('http://127.0.0.1:8000/newshop/categorywiseview/')
            setLoading(true)
            let data1 = response?.data
            setData(data1)
            console.log(data1.Electrical)

        }catch(errors){
            console.log('prodcut not found')
        }
    }
    // console.log('data',Object.keys(data))
    

    return (
        <div className='container'>
        {loading && (Object.keys(data).map((category)=>{
            return (
                <div key={category}>
                    <h1>{category}</h1>
                    <div>
                        <Carousel responsive={responsive}>
                    {
                        data[category].map((item)=>{
                            return (
                               
                                <Product key={item?.product_id} id={item.product_id} image={`http://127.0.0.1:8000${item.image}`} name={item.product_name} price={item.price} date={item.pub_data} category={item.category} desc={item.desc} />    
                                
                            )
                        })
                    }
                    </Carousel>
                    </div>
                </div>
            )
        }))}
        </div>
    )
}
export default HomeCategoty
