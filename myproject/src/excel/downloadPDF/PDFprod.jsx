import React, { useRef } from 'react'
import { useGetAllprodutviewQuery } from '../../services/rootApi'
import ReactToPrint from 'react-to-print'

const PDFprod = () => {
    const { data, isSuccess, isError } = useGetAllprodutviewQuery()
    // console.log(data)
   const componentref = useRef()


  return (

    <div className='container'>
       <div  ref={componentref} className="container" style={{width : '100%'}}>
    <div className='my-4 pd-5' style={{background : 'cornsilk', border: '2px solid black'}}>
        <table className='table table-striped text-center'>
            <thead>
                <tr>
                    <th>Product ID</th>
                    <th>Product Name</th>
                    <th>Category</th>
                    <th>price</th>
                    <th>Image</th>
                </tr>
            </thead>
            <tbody>
                {
                    data?.map((item,index) => {
                        // console.log()
                        return (
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{item.product_name}</td>
                                <td>{item.category}</td>
                                <td>{item.price}</td>
                                <td>{item.image}</td>
                            </tr>
                        )
                    })
                }

            </tbody>
            <tbody>

            </tbody>
        </table>
        
    </div>
    </div>

    <div className="row">
        <div className="col-sm-6"> 
        </div>
        <div className="col-sm-4">
        </div>
        <div className="col-sm-2">
        <ReactToPrint trigger={()=><button className='btn btn-primary my-4'>Print/DownLoad</button>} content={() => componentref.current}  />
        </div>
    </div>
    </div>
  )
}

export default PDFprod