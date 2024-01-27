import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import '../css/Home.css';
import '../css/styles.css';

export default function AboutPage() {
  return (
    <div>
      <header><HeaderComponent /></header>

    <p>aboutme</p>

      <FooterComponent style={{ zIndex: 2 }} />
    </div>
  );
}