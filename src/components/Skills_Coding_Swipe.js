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
    autoplaySpeed: 3500,
    arrows: false,
  };

  return (
    <div>
      <div className="skills-container">
        <Slider {...settings}>
          <div className="align-right">
            <h2 className="raleway">LeetCode</h2>
            <p  className="quicksand">Loves to solve LeetCode problems with friends.</p>
          </div>
          <div className="align-right">
          <h2 className="raleway">Problem Solver</h2>
          <p  className="quicksand">Average time of 25 seconds in solving rubiks cube.</p>
          <p  className="quicksand text-even-less-color">while the record is true, but this is just a joke, please dont take it seriously</p>
          </div>
          <div className="align-right">
          <h2 className="raleway">Typing Speed</h2>
          <p  className="quicksand">Reach highest of 120 WPM.</p>
          <p  className="quicksand text-even-less-color">Thats top 0.001%! Crazy!</p>
          </div>
          <div className="align-right">
          <h2 className="raleway">Always learning</h2>
          <p  className="quicksand">Up-to-date with current technology, such as ChatGPT.</p>
          <p  className="quicksand">Prefer to use all shortcut key existed.</p>
          </div>
          <div className="align-right">
          <h2 className="raleway">Always learning</h2>
          <p  className="quicksand">Up-to-date with current technology, such as ChatGPT.</p>
          <p  className="quicksand">Prefer to use all shortcut key existed.</p>
          </div>
        </Slider>
      </div>
    </div>
  );
}