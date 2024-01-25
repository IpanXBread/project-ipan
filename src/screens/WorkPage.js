import React, { useEffect, useState } from 'react';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import Work_Component from '../components/Work_Component';
import Work_Particles from '../components/Work_Particles';

import { DrawerContext } from "../App";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

import '../css/styles.css';
import '../css/Work.css';

export default function WorkPage() {

  const [init, setInit] = React.useState(false);

  React.useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = React.useMemo(
    () => ({
      background: {
        color: {
          value: "var(--background-color)",
        },
      },
      fullScreen: { enable: true },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#000000",
        },
        links: {
          color: "#ffffff",
          distance: 200,
          enable: true,
          opacity: 0.9,
          width: 4,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 70,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: false,
    }),
    []
  );

  const work = {
    finexus: {
      title: 'Finexus International Sdn Bhd',
      dateRange: 'Sept 2023 ~ Feb 2024',
      image: 'finexus',
      description: 'Finexus, a big company that offers most bank for its software development. Some of the work are within Finexus own application that involves banking system such as Ka***ku which the project that I help during my internship.',
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

      <body style={{ margin: '0' }}>

        <Particles
          id="particles"
          options={options}
          init={init}
          loaded={particlesLoaded}
          className="zindexplus"
        >
        </Particles>

        {/* Title */}
        <div className="work-container">
          <div className="super-big-text tilt-prism"><h1>WORK</h1></div>
          <h3 className="gray-hidden-text" style={{ marginTop: "-40px" }}>(The workplace is clickable)</h3>
        </div>

        <div className="vertical-long-line"></div>
        <div className="work-circle"></div>

        <div>
          {/* 2023 */}
          <div className="front-box rajdhani ">
            <h2>2023</h2>
          </div>

          <div className="front-box">
            <Work_Component {...work.finexus} />
          </div>

          {/* 2024 */}
          <div className="front-box rajdhani">
            <h2>2024</h2>
          </div>

          {/* 2025 */}
          <div className="front-box rajdhani super-big-text ">
            <h2>2025</h2>
          </div>

          <div className="front-box">
            <Work_Component {...work.petronas} />
          </div>

        </div>
      </body>

      <FooterComponent style={{ zIndex: 2 }} />

    </div>
  );
}