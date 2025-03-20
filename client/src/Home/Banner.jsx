import React from "react";
import Slider from "react-slick"; // Import Slider from react-slick
import {Link} from 'react-router-dom'
const Banner = () => {
  // Slider settings
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite scrolling
    speed: 300, // Transition speed (in milliseconds)
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, 
    fade: true, // Slide fade effect
    autoplay: true, // Automatically move to the next slide
    autoplaySpeed: 3000, // Speed of the autoplay (3 seconds)
    cssEase: "ease-in-out", // Smooth transition
  };

  return (
    <div className="slider-container ">
      <Slider {...settings}>
        {/* Slide 1 */}
        <div className="item">
          <img src="/Images/slider-3-1920x706.jpg" alt="Slide 1" />
          <div className="info">
            <h2 className="heading">Fashion,<br></br> Tech & More </h2>
            <p className="para">
              Your best shopping or money back
            </p>
            <Link to="/Shop">
            <button className="shop-button">Shop All Products</button>
            </Link>
          </div>
        </div>
        {/* Slide 2 */}
        <div className="item">
          <img src="/Images/10001.jpg" alt="Slide 2" />
          <div className="info">
            <h2 className="heading"> {"\u00A0\u00A0\u00A0\u00A0"}Exclusive Deals,<br></br> Just for You</h2>
            <p className="para">
              Your best shopping or money back
            </p>
            <Link to="/Shop">
            <button className="shop-button">Shop All Products</button>
            </Link>
          </div>
        </div>
        {/* Slide 3 */}
        <div className="item">
          <img src="/Images/slider-1-1920x706.jpg" alt="Slide 2" />
          <div className="info">
            <h2 className="heading">Be Unique,<br></br> Shop Unique</h2>
            <p className="para">
              Your best shopping or money back
            </p>
            <Link to="/Shop">
            <button className="shop-button">Shop All Products</button>
            </Link>
            
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
