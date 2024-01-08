import React, { useState } from 'react';
import '../css/styles.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Skills_Building_Content(props) {

    const settings = {
        dots: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3500,
        arrows: false,
      };

    return (
        <>
            <div className="build-container">
                <div className="build-title-container">
                    <p>{props.title}</p>
                </div>
                <div className="build-container-middle">
                    <div className="left-side-empty"></div>
                    <div className="build-container-inside">
                        <div className="build-pictures">
                            <Slider {...settings}>
                                <div>
                                    <p>pic 1</p>
                                </div>
                                <div>
                                    <p>pict 2</p>
                                </div>
                                <div>
                                    <p>pictu 3</p>
                                </div>
                                </Slider>
                        </div>
                    </div>
                    <div className="right-side-empty"></div>
                </div>
            </div>
        </>
    )
}