import React from 'react'
import {useGetProdViewQuery} from '../../../services/rootApi'
import ProductList from './ProductList'

const Prodview = () => {
    
    const {data,isLoading,error} = useGetProdViewQuery()
    console.log(data,isLoading)
  return (
      <div>
      <div>
      <h1>Product Catalog</h1>
{!isLoading && <ProductList data={data} />}
    </div>
    </div>
  )
}

export default Prodview
