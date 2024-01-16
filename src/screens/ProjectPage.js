import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import Project_Component from '../components/Project_Component';
import Parallax_Mousemove from '../components/Parallax_Mousemove';
import React, { useState } from 'react';
import '../css/styles.css';

export default function ProjectPage() {

  const projects = {
    kayaAku: {
      title: 'KayaAku',
      company: 'Finexus International Sdn Bhd',
      position: 'Internship',
      dateRange: 'Sept 2023 ~ Feb 2024',
      image: 'finexus',
      language: 'TypeScript',
      description: 'Working on frontend development for both web view and mobile view.',
      align: 'left',
    },
    solatTime: {
      title: 'Solat Time',
      company: 'Universiti Kebangsaan Malaysia',
      position: 'Final Year Project',
      dateRange: 'Sept 2022 ~ March 2023', // not sure
      image: 'solat-time-logo',
      language: 'JavaScript',
      description: 'Individual projects that involves taking data from API in real time and store the data using Realtime Firebase.',
      align: 'right',
    },
    minecraft: {
      title: 'Minecraft Server',
      company: 'Mojang',
      position: 'Host',
      dateRange: 'June 2021 ~ June 2023', // not sure
      image: 'minecraft',
      language: 'Java',
      description: 'Configure my own laptop into Ubuntu Linux, set connections from LAN to WAN, set static IP (DHCP reservation), enable port forwarding, using custom DDNS, enable outside players from anywhere to have access to my server.',
      align: 'left',
    },
  };

  const [currentPosition, setCurrentPosition] = useState('left');

  const togglePosition = () => {
    setCurrentPosition((prevPosition) => (prevPosition === 'left' ? 'right' : 'left'));
  };

  return (
    <div>

      <header><HeaderComponent /></header>

      {/* Title */}

      <div className="project-container">
        <div className="super-big-text tilt-prism">
          <h1>PROJECT</h1>
        </div>
        <p className="rajdhani big-text-up">INDIVIDUAL BIG PROJECTS</p>
      </div>

      {/* <Parallax_Mousemove/> */}

      <div className="circle"></div>
      <div className="vertical-line"></div>

      <Project_Component {...projects.kayaAku} />
      <Project_Component {...projects.solatTime} />
      <Project_Component {...projects.minecraft} />

      <FooterComponent style={{ zIndex: 2 }} />

    </div>
  );
}