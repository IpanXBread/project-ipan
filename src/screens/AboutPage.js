import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import About_Myself from '../components/About_Myself';
import About_Portfolio from '../components/About_Portfolio';
import Custom_Cursor from '../components/Custom_Cursor';
import '../css/styles.css';
import '../css/About.css';

export default function AboutPage() {
  return (
    <div>
      <header><HeaderComponent /></header>

      <div className="tilt-prism big-title-position">
        <h1>ABOUT ME</h1>
      </div>

      {/* <Custom_Cursor /> */}
      <About_Myself />
      <About_Portfolio />

      <FooterComponent style={{ zIndex: 2 }} />
    </div>
  );
}