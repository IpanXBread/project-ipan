import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../css/styles.css';
import '../css/Header.css';

export default function HeaderContent(props) {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);
  const isActive = location.pathname === props.destinationURL;

  const style = {
    ...headerContentStyle,
    color: isActive ? 'var(--primary-color)' : 'var(--text-color)',
    fontFamily: 'var(--josefin-sans)',
    padding: "15px 0px 15px 0px",
  };

  return (
    <>
      {isMobile ? (
        <a href={props.destinationURL} style={style} className="text-reset horizontal">
          <p className="josefin-sans" style={{marginTop:"10px", marginRight: "10px"}}>✦</p>
          <p className="josefin-sans">{props.headerName}</p>
        </a>
      ) : (
        <a href={props.destinationURL} style={style} className="text-reset">
          <p className="josefin-sans header-text">{props.headerName}</p>
        </a>
      )}
    </>
  );
}

const headerContentStyle = {
  margin: '-25px 15px',
};