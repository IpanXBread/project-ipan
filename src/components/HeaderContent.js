import React from 'react';
import { useLocation } from 'react-router-dom';
import '../css/styles.css';
import '../css/Header.css';

export default function HeaderContent(props) {
  const location = useLocation();
  const isActive = location.pathname === props.destinationURL;

  const style = {
    ...headerContentStyle,
    color: isActive ? 'var(--primary-color)' : 'var(--text-color)',
    fontFamily: 'var(--josefin-sans)',
  };

  return (
    <a href={props.destinationURL} style={style} className="text-reset">
      <p className="josefin-sans header-text">{props.headerName}</p>
    </a>
  );
}

const headerContentStyle = {
  margin: '-25px 25px',
};