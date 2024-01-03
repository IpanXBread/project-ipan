import React, { useEffect, useState } from 'react';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import Work_Component from '../components/Work_Component';
import '../css/styles.css';

export default function WorkPage() {

  const work = {
    finexus: {
      title: 'Finexus International Sdn Bhd',
      dateRange: 'Sept 2023 ~ Feb 2024',
      image: 'finexus',
      description: 'Finexus, a big company that offers most bank for its software development. Some of the work are within Finexus own application that involves banking system such as KayaAku which the project that I help during my internship.' ,
    },
    petronas: {
      title: 'Petronas (testing)',
      dateRange: '2030 ~ 2040',
      image: 'petronas',
      description: 'Hoping to be part of Petronas Team soon.',
    },
  };

  return (
    <div>

      <header><HeaderComponent /></header>

      {/* Title */}
      <div className="work-container ">
        <div className="super-big-text tilt-prism"><h1>WORK</h1></div>
        <p className="big-text-up gray-hidden-text">(The workplace is clickable)</p>
      </div>

      <div className="vertical-long-line"></div>

      <div>
        {/* 2023 */}
        <div className="front-box rajdhani super-big-text ">
          <p className="">2023</p>
        </div>

        <div className="front-box">
          <Work_Component {...work.finexus} />
        </div>

        {/* 2024 */}
        <div className="front-box rajdhani super-big-text ">
          <p>2024</p>
        </div>

        {/* 2025 */}
        <div className="front-box rajdhani super-big-text ">
          <p>2025</p>
        </div>

        <div className="front-box">
          <Work_Component {...work.petronas} />
        </div>

      </div>

      <FooterComponent style={{ zIndex: 2 }} />

    </div>
  );
}