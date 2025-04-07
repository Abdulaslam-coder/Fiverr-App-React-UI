import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slide.scss';

const Slide = ({ children, slidesToShow, slidesToScroll }) => {
  const settings = {
    slidesToShow, // Number of slides to show at once
    slidesToScroll, // Number of slides to scroll at once
   // dots: true, // Show navigation dots
    //infinite: true, // Infinite scrolling
    arrows: true, // Show arrows for navigation
    autoplay: false, // Optional, enable autoplay
  };

  return (
    <div className="slide">
      <div className="container">
        <Slider {...settings}>
          {children}
        </Slider>
      </div>
    </div>
  );
};

export default Slide;
