import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Skills_Swipe() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div>
      <Slider {...settings}>
        <div className="skills-container">
          <h3>LeetCode</h3>
          <p>Master on solving LeetCode problems.</p>
        </div>
        <div className="skills-container">
          <h3>Problem Solver</h3>
          <p>Average time of 25 seconds in solving rubiks cube.</p>
          <p>the number is true, but this is just a joke, please dont take it seriously</p>
        </div>
        <div className="skills-container">
          <h3>WPM</h3>
          <p>Reach 120 WPM.</p>
        </div>
        <div className="skills-container">
          <h3>Always learning</h3>
          <p>Up-to-date with current technology, such as ChatGPT, Blackbox AI.</p>
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
}