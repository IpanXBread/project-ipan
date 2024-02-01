import React, { useState } from 'react';
import '../css/styles.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import oriental from '../images/oriental.jpeg';
import fantasy from '../images/fantasy.jpeg';

export default function Skills_Building_Content(props) {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const settings = {
        dots: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        arrows: true,
        beforeChange: (oldIndex, newIndex) => {
            setIsTransitioning(true);
        },
        afterChange: (index) => {
            setCurrentIndex(index);
            setIsTransitioning(false);
        },
    };

    const titleStyle = {
        opacity: isTransitioning ? 0 : 1,
        transition: isTransitioning ? 'opacity 0.4s ease-in-out' : 'opacity 0.3s ease-in-out',
    };

    return (
        <>
            <div className="build-container">
                <div className="build-title-container">
                    <p style={titleStyle}>{props.title[currentIndex]}</p>
                </div>
                <div className="build-container-middle">
                    <div className="left-side-empty"></div>
                    <div className="build-container-inside">

                        <div className="build-pictures">
                            <Slider {...settings}>
                                <img src={oriental} className="picture-size" />
                                <img src={fantasy} className="picture-size" />
                            </Slider>
                        </div>

                    </div>
                    <div className="right-side-empty"></div>
                </div>
            </div>
        </>
    )
}