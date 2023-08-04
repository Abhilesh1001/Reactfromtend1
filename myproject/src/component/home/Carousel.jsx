import React from 'react'
import Image1 from '../../assets/image4.jpg'
import Image2 from '../../assets/image1.jpg'
import Image3 from '../../assets/image3.jpg'
import Image5 from '../../assets/image5.jpg'

const Carousel = ({product_name, category,desc, price,image ,date}) => {
  return (
    <div>
      <div>
            <h1 className='container'>This is first carousel</h1>
            <div className="container containerheight my-4">
                <div id="carouselExampleIndicators" className="carousel slide">
                   
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>

                    <div className="carousel-inner">
                            <div className="carousel-item active">
                            <div className="carditem">
                            <div className="card" >
                                 
                                <img src={Image1} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">{product_name}</p>
                                </div>
                            </div>
                            <div className="card" >
                                <img src={Image2} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Some </p>
                                </div>
                            </div>
                            <div className="card" >
                                <img src={Image3} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Some </p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                        <div className="carditem">
                            <div className="card" >
                                <img src={Image2} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Some </p>
                                </div>
                            </div>
                            <div className="card" >
                                <img src={Image2} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Some </p>
                                </div>
                            </div>
                            <div className="card" >
                                <img src={Image3} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Some </p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                        <div className="carditem">
                            <div className="card" >
                                <img src={Image3} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Some </p>
                                </div>
                            </div>
                            <div className="card" >
                                <img src={Image2} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Some </p>
                                </div>
                            </div>
                            <div className="card" >
                                <img src={Image5} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Some </p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            
        </div>
  )
}

export default Carousel
