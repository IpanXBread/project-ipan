import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import Project_Component_Web from '../components/Project_Component_Web';
import Project_Component_Mobile from '../components/Project_Component_Mobile';
import Parallax_Mousemove from '../components/Parallax_Mousemove';
import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import hos from '../images/hos.png';
import '../css/styles.css';
import '../css/Project.css';

export default function ProjectPage() {

  const isMobile = useMediaQuery({ maxWidth: 600 });

  const projects = {
    kaku: {
      title: 'Kayaaku Wallet',
      company: 'Finexus International Sdn Bhd',
      position: 'Internship',
      dateRange: 'Sept 2023 ~ Feb 2024',
      image: 'finexus',
      language: 'TypeScript',
      description: 'Working on frontend development for both web view and mobile view.',
      align: 'left',
      link: '',
    },
    solatTime: {
      title: 'Solat Time',
      company: 'Universiti Kebangsaan Malaysia - FYP',
      position: 'Final Year Student',
      dateRange: 'Sept 2022 ~ March 2023', // not sure
      image: 'solat-time-logo',
      language: 'JavaScript',
      description: 'Individual projects that involves taking data from API in real time and store the data using Realtime Firebase.',
      align: 'right',
      link: '',
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
      link: '',
    },
    lrgs: {
      title: 'Hand Of Sport',
      company: 'Universiti Kebangsaan Malaysia - LRGS',
      position: 'Student',
      dateRange: 'June 2020 ~ March 2021', // not sure
      image: 'hos',
      language: 'HTML & PHP',
      description: 'Using the database of phpMyAdmin, this robust online store was created. Feel free to log in using the email & password available on the image above. Please do not change anything in the system.',
      align: 'right',
      link: 'https://lrgs.ftsm.ukm.my/users/a181464/PTFinal/login_interface.php',
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
      <div className="tilt-prism big-title-position ">
        <div>
          <h1>PROJECT</h1>
          <p className="rajdhani center-horizontal under-h1">LONG-TERM PROJECTS</p>
        </div>
      </div>

      {/* <Parallax_Mousemove/> */}

      {isMobile ? (
        <>
          <Project_Component_Mobile {...projects.kaku} />
          <Project_Component_Mobile {...projects.solatTime} />
          <Project_Component_Mobile {...projects.minecraft} />
          <Project_Component_Mobile {...projects.lrgs} />
        </>
      ) : (
        <>
          <div className="circle"></div>
          <div className="vertical-line"></div>

          <Project_Component_Web {...projects.kaku} />
          <Project_Component_Web {...projects.solatTime} />
          <Project_Component_Web {...projects.minecraft} />
          <Project_Component_Web {...projects.lrgs} />
        </>
      )}


      <FooterComponent style={{ zIndex: 2 }} />

    </div>
  );
}