import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick/lib/slider';

const HomeSlider = () => {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  return (
    <div className='mb-5 mx-auto px-12'>
      <h2 className='py-4 text-center text-3xl font-semibold'>We Featured On</h2>
      
      <div>
        <div className='py-12'>
          <Slider {...settings}>
            <div className=''>
              <img src="https://i.ibb.co/c8zn7jd/business-standard-logo-2.png" className='img-fluid' alt="" />
            </div>
            <div>
              <img src="https://i.ibb.co/X34rq6H/daily-star.png" className='img-fluid w-75' alt="" />
            </div>
        
            <div>
              <img src="https://i.ibb.co/s1ZcCwh/download.png" className='img-fluid w-50' alt="" />
            </div>
            <div>
              <img src="https://i.ibb.co/rygrn8m/New-York-Times-Logo.jpg" className='img-fluid w-50' alt="" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default HomeSlider;