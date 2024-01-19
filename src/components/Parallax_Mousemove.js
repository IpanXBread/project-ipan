import React, { useEffect } from 'react';

export default function Parallax_Mousemove() {
  useEffect(() => {
    const parallax = document.querySelector('.parallax');
    const front = document.querySelector('.front-layer');
    const back = document.querySelector('.back-layer');

    const sFront = 150;
    const sBack = 400;

    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      front.style.transform = `translate(${x / sFront}%, ${y / sFront}%)`;
      back.style.transform = `translate(${x / sBack}%, ${y / sBack}%)`;
    };

    parallax.addEventListener('mousemove', handleMouseMove);

    return () => {
      parallax.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="parallax" style={{ height: '100vh', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}>
      <h1>Parallax Hover Effect</h1>
      <div className="front-layer">
        <div className="parallax-container red-background">
          <p>front</p>
        </div>
      </div>
      <div className="back-layer">
        <div className="parallax-container blue-background">
          <p>back</p>
        </div>
      </div>
    </div>
  );
}
