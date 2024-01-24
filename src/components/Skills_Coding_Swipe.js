import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/styles.css';
import '../css/Skills.css';


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
            <h3 className="montserrat" >LeetCode</h3>
            <p  className="quicksand" style={{fontStyle:"italic", paddingLeft:"10px"}}>Loves to solve LeetCode problems with friends.</p>
          </div>
          <div className="align-right">
          <h3 className="montserrat" >Problem Solver</h3>
          <p  className="quicksand" style={{fontStyle:"italic", paddingLeft:"10px"}}>Average time of 25 seconds in solving rubiks cube.</p>
          <p  className="quicksand text-even-less-color" style={{fontStyle:"italic", paddingLeft:"10px"}}>while the record is true, but this is just a joke, please dont take it seriously</p>
          </div>
          <div className="align-right">
          <h3 className="montserrat" >Typing Speed</h3>
          <p  className="quicksand" style={{fontStyle:"italic", paddingLeft:"10px"}}>Reach highest of 120 WPM.</p>
          <p  className="quicksand text-even-less-color" style={{fontStyle:"italic", paddingLeft:"10px"}}>Thats top 0.001%! Crazy!</p>
          </div>
          <div className="align-right">
          <h3 className="montserrat" >Always learning</h3>
          <p  className="quicksand" style={{fontStyle:"italic", paddingLeft:"10px"}}>Currently learning roadmap.sh for Full Stack Developer.</p>
          <p  className="quicksand" style={{color:"gray", fontStyle:"italic", paddingLeft:"10px"}}>Up-to-date with current technology, such as ChatGPT.</p>
          </div>
          <div className="align-right">
          <h3 className="montserrat" >Faster than Average</h3>
          <p  className="quicksand" style={{fontStyle:"italic", paddingLeft:"10px"}}>Prefer to use all shortcut key existed.</p>
          </div>
        </Slider>
      </div>
    </div>
  );
}