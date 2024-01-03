import React from 'react';
import '../css/styles.css';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';

export default function ContactPage() {

  const getCircleStyle  = (size, color, position) => {
    return {
    width: size,
    height: size,
    backgroundColor: color,
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff', // Text color
    fontSize: '24px', // Text font size
    position: 'absolute',
    top: position.top,
    left: position.left,
    zIndex: 2,
    };
  };

  const getRectangleStyle = (width, height, color) => {
    return {
      width: width,
    height: height,
    backgroundColor: color,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff', // Text color
    fontSize: '24px', // Text font size
    position: 'relative', // Rectangle will act as a container for the circle
    zIndex: 1,
    };
  };

  const circleStyle1 = getCircleStyle("275px", "#252525", { top: '-45px', left: '-100px' });
  const circleStyle2 = getCircleStyle("250px", "#343434", { top: '12px', left: '13px' });
  
  const rectangleStyle1 = getRectangleStyle("750px", "400px", "#252525");
  const rectangleStyle2 = getRectangleStyle("725px", "375px", "#343434");

  return (
    <div className="unscrollable">
      <header><HeaderComponent/></header>
      
      <div className="container-test centered" style={{}}>

        <h1 className="thin">Contact Me!</h1>

        <div style={rectangleStyle1}>
          <div style={rectangleStyle2}>

            <div style={circleStyle1}>
              <div style={circleStyle2}>profile pic</div>
            </div>

          <div className="vertical">
            <p className="josefin-sans">Email</p>  
            <p className="quicksand">Name</p>
            <p className="major-mono">Subject</p>
            <p className="raleway">Message</p>
          </div>

          </div>
        </div>

      </div>
      <FooterComponent/>
    </div>
  );
}