import React from 'react'
import axios from 'axios'
import { useGetAllprodutviewQuery } from '../../services/rootApi'
import ExcelProdPage from './ExcelProdPage'

const ProductPage = () => {
    const { data, isSuccess, isError } = useGetAllprodutviewQuery()
    // console.log(data)
    const prodData = [{
        category : "prodview",
        data : data
    }]
    // console.log(prodData)
    return (
        <div className='container'>
        <div className='my-4' style={{background : 'cornsilk', border: '2px solid black'}}>
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
                            console.log()
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
        <div className="row">
            <div className="col-sm-6"> 
            </div>
            <div className="col-sm-4">
            </div>
            <div className="col-sm-2">
                <ExcelProdPage finaldata = {prodData} />
            </div>
        </div>
        </div>
    )
}

export default ProductPage
