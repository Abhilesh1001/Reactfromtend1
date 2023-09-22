import React from 'react'
import ProductCategory from './ProductCategory'

const ProductList = ({data}) => {
    // console.log('data',data)
  return (
    <div>
      {Object?.keys(data)?.map((category) => (
        <ProductCategory key={category} category={category} products={data[category]} />
      ))}
    </div>
  )
}

export default ProductList
