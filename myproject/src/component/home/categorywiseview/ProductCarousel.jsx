import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductCategory from './ProductCategory';

const ProductCarousel = ({ items }) => {
  const productResponsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 2000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel responsive={productResponsive} infinite={false} keyBoardControl={true} customTransition='all .5'>
      {items.map((item) => (
        <ProductCategory
          key={item?.product_id}
          id={item.product_id}
          image={`http://127.0.0.1:8000${item.image}`}
          name={item.product_name}
          price={item.price}
          date={item.pub_data}
          category={item.category}
          desc={item.desc}
        />
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
