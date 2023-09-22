import React from 'react'
import ProductCategory1 from './ProductCategory1';

const ProductCategory = ({ category, products }) => {
        // console.log(category)      
  return (
    <div>
    <h2>{category}</h2>
    <div className='product container' style={{display:'flex'}}>
      {products.map((product) => {
        // console.log('category',product['category'])
        
        return (
            (
                <ProductCategory1
                key={product?.product_id}
                id={product.product_id}
                image={`http://127.0.0.1:8000${product.image}`}
                name={product.product_name}
                price={product.price}
                date={product.pub_data}
                category={product.category}
                desc={product.desc}
                />
                
                )
        )
      })}
          </div>
  </div>)
}

export default ProductCategory
