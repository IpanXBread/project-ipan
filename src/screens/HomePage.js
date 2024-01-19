import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import Home_Greeting from '../components/Home_Greeting';
import Home_Education from '../components/Home_Education';
import Home_Certificate from '../components/Home_Certificate';
import Home_Exam from '../components/Home_Exam';
import '../css/Home.css';

export default function HomePage() {
  return (
    <>
      <HeaderComponent />
      <div className="home-container">
        <Home_Greeting />
      </div>
      <Home_Education />
      <Home_Certificate />
      <Home_Exam />
      <FooterComponent />
    </>
  );
}