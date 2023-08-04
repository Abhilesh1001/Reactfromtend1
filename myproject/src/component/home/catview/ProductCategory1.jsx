import React from 'react'

const ProductCategory1 = ({ id, image, name, price, date, category, desc }) => {
  return (
        <div className='my-4'>
          <div className='card' style={{ width: '18rem' }}>
            <img src={image} className='card-img-top' alt='...' />
            <div className='card-body'>
              <p className='card-text'>
                Product Name : <b>{name}</b>
              </p>
              <p className='card-text'>
                MRP Rs.<b>{price}</b>
              </p>
              <p className='card-text'>
                Publish Date : <b>{date}</b>
              </p>
              <p className='card-text'>{desc}</p>
            </div>
    
          </div>
        </div>
  )
}

export default ProductCategory1
