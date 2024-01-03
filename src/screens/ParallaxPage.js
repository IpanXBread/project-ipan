import React, { useEffect, useState } from 'react';
import '../css/styles.css';

export default function ParallaxPage() {

  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderContent = () => (
    <>
      <div className="div-box">
        <h1 className="thin">Closure</h1>
        <h2 className="thin">Your one-stop source of Web Development tricks</h2> 
      </div>
      <div className="div-box">
        <p>
          <b>1. Like the video.</b> Because it helps me and my channel
        </p>
        <p>
          <b>2. Like the video.</b> To see more content like that!
        </p>
        <p>
          <b>3. Follow the Github link.</b> And play with this code yourself!
        </p> 
      </div>
      <div className="div-box">
        <p>
          <b>1. Like the video.</b> Because it helps me and my channel
        </p>
        <p>
          <b>2. Like the video.</b> To see more content like that!
        </p>
        <p>
          <b>3. Follow the Github link.</b> And play with this code yourself!
        </p> 
      </div>
    </>
    );

    let description = [
      [
        "description untuk project 1",
        "FYP UKM buat SolatTime",
        "might add videos UKM or screenshot of the app"
      ],
      [
        "description for project 2",
        "project 2 will show about lrgs",
        "lrgs kena tuka sikit, tulis username dgn password",
        "ataupon tulis username & password dia kat sini"
      ],
      [
        "description project 3",
        "yang ni is related to work, finexus",
        "helping frontEnd kayaAku punya apps"
      ]
    ]

  return (
    <div>

        {/* background */}
        <div 
          className="Parallax_background"
          style={{ transform: `translateY(-${offsetY * 0.5}px)` }} 
        />

        {/* the stars */}
        <div 
          className="Parallax_background-2"
          style={{ transform: `translateY(${offsetY * 0.2}px)` }} 
        />

        {/* the blue box */}
        <div className="Parallax_content">{renderContent()}</div>
        

    </div>
  );
}