import React, { useState, useEffect } from 'react';

export default function Parallax_Mousemove() {

    const parallax = document.querySelector('.parallax');
    const front = document.querySelector('.front-layer');
    const back = document.querySelector('.back-layer');

    const sFront = 150;
    const sBack = 400;

    parallax.addEventListener('mousemove', e => {
        const x = e.clientX;
        const y = e.clientY;

        front.style.transform = `
        translate(
            ${x / sFront}%,
            ${y / sFront}%
            )`;

        back.style.transform = `
        translate(
            ${x / sBack}%,
            ${y / sBack}%
            )`;
    })

    return (
        <div className="parallax">
            <h1>Parallax Hover Effect</h1>
            <div className="front-layer">
                <div className="parallax-container red-background"><p>front</p></div>
            </div>
            <div className="back-layer">
                <div className="parallax-container blue-background"><p>back</p></div>
            </div>
        </div>
    );
};
