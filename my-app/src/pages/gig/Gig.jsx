import React from 'react'
import "./Gig.scss"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



const Gig = () => {

  const settings = {
    dots: true,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="gig">
      <div className="container">
        <div className="left">
          <span className="breadCrumbs">FIVERR  GRAPHIC & DESIGN</span>
          <h1>I will create a wordpress website for you!</h1>
          <div className="user">
            <img className="pp" src="https://images.pexels.com/photos/7715640/pexels-photo-7715640.jpeg" alt="" />
            <span>Abdul Salam</span>
            <div className="stars">
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <span>5</span>
            </div>
          </div>
          <Slider {...settings}  className="slider">
            <div>
              <img src="https://images.pexels.com/photos/7502112/pexels-photo-7502112.jpeg" alt="" />
            </div>
            {/* <div>
              <img src="https://images.pexels.com/photos/8044117/pexels-photo-8044117.jpeg" alt="" />
            </div>
            <div>
              <img src="https://images.pexels.com/photos/7715640/pexels-photo-7715640.jpeg" alt="" />
            </div> */}
          </Slider>
          <h2>About this Gig</h2>
          <p>
          Throughout my academic journey, 
          I have actively participated in several community service projects,
           such as organizing local awareness campaigns on environmental 
           sustainability and volunteering at local shelters for underprivileged families.
          </p>
          <div className="seller">
            <h2>About the Seller</h2>
            <div className="user">
              <img className='pp'
              src="https://images.pexels.com/photos/7715640/pexels-photo-7715640.jpeg" 
              alt="" />
              <div className="info">
                <span>Abdul Salam</span>
                <div className="stars">
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                </div>
                <button>Contact Me</button>
              </div>
            </div>
            <div className="box">
              <div className="items">
                <div className="item">
                  <span className='title'>From</span>
                  <span className='desc'>USA</span>
                </div>
                <div className="item">
                  <span className='title'>Member Since</span>
                  <span className='desc'>Aug 2025</span>
                </div>
                <div className="item">
                  <span className='title'>Avg. response time</span>
                  <span className='desc'>2 Hours</span>
                </div>
                <div className="item">
                  <span className='title'>Last Delivery</span>
                  <span className='desc'>1 Day</span>
                </div>
                <div className="item">
                  <span className='title'>Language</span>
                  <span className='desc'>English</span>
                </div>
              </div>
            </div>
            <hr />
              <p>
                Throughout my academic journey, 
                I have actively participated in several community service projects,
                 such as organizing local awareness campaigns on environmental 
                 sustainability and volunteering at local shelters for underprivileged families.
              </p>
           
          </div>
          <div className="reviews">
              <h2>Reviews</h2>
              <div className="item">
                <div className="user">
                  <img className='pp'
                  src="https://images.pexels.com/photos/7715640/pexels-photo-7715640.jpeg" 
                  alt="" />
                  <div className="info">
                    <span>Ali</span>
                    <div className="country">
                      {/* <img src="https://images.pexels.com/photos/7715640/pexels-photo-7715640.jpeg" alt="" /> */}
                      <span>Pakistan</span>
                    </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
               </div>
               <p>This is the testing review of this gig.</p>
               <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
               </div>
            </div>
            {/* <hr/> */}
          </div>
        </div>
        <div className="right">
          <div className="price">
            <h3>Wordpress Website Development</h3>
            <h2>$ 59.99</h2>
          </div>
          <p>I will create a complete wordpress website</p>
          <div className="details">
            <div className="item">
              <img src="/img/clock.png" alt="" />
              <span>2 Days Delivery</span>
            </div>
            <div className="item">
              <img src="/img/recycle.png" alt="" />
              <span>3 Revisions</span>
            </div>
          </div>
          <div className="features">
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Responsive Design</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Responsive Design</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Responsive Design</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Responsive Design</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Responsive Design</span>
            </div>
          </div>
          <button>Continue</button>
        </div>
      </div>
    </div>
  )
}

export default Gig