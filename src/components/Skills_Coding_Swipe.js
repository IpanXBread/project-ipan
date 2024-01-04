import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Skills_Coding_Swipe() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <div>
      <div className="skills-container">
        <Slider {...settings}>
          <div className="align-right">
            <h2 className="raleway">LeetCode</h2>
            <p  className="quicksand">Loved to solving LeetCode problems with friends.</p>
          </div>
          <div className="align-right">
          <h2 className="raleway">Problem Solver</h2>
          <p  className="quicksand">Average time of 25 seconds in solving rubiks cube.</p>
          <p  className="quicksand">the number is true, but this is just a joke, please dont take it seriously</p>
          </div>
          <div className="align-right">
          <h2 className="raleway">WPM</h2>
          <p  className="quicksand">Reach 120 WPM.</p>
          </div>
          <div className="align-right">
          <h2 className="raleway">Always learning</h2>
          <p  className="quicksand">Up-to-date with current technology, such as ChatGPT, Blackbox AI.</p>
          </div>
        </Slider>
      </div>
    </div>
  );
}