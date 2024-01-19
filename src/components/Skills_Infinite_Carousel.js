import React, { useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/styles.css';
import '../css/Skills.css';

export default function Skills_Infinite_Carousel() {

    window.addEventListener("load", function () {
        const slideContainer = document.querySelector(".carousel");
        const slidesWrapper = document.querySelector(".carousel-slides");
        let slides = document.querySelectorAll(".carousel-slide");
        let index = 0;
        const interval = 1500;
        let moveDistance = 0;
        const paddingRight = 50;
        let lastSlideIndex = slides.length - 1;
        let firstClone;

        const startSlide = (index) => {
            this.setInterval(() => {
                moveDistance = moveDistance + slides[index].clientWidth + paddingRight;
                slidesWrapper.style.transform = `translateX(${-moveDistance}px)`;
                slidesWrapper.style.transition = "1s";

                firstClone = slides[index].cloneNode(true);
                firstClone.id = `first-clone-${index}`;
                slidesWrapper.append(firstClone);
                /*If uncomment it - then the problem starts */
                //slides[index].remove();

                index++;
            }, interval);
        };
        startSlide(index);
    });

    return (
        <div class="carousel">
            <ul class="carousel-slides">
                <li class="carousel-slide" data-number="0">
                    <img src="https://via.placeholder.com/150" alt="" class="carousel-item-img"/>
                </li>
                <li class="carousel-slide light-blue round" data-number="1">
                    <span class="carousel-item-text">11111111 1111 <br/> 111111111</span>
                </li>
                <li class="carousel-slide">
                    <img src="https://via.placeholder.com/150" alt="" class="carousel-item-img"/>
                </li>
                <li class="carousel-slide pink round">
                    <span class="carousel-item-text">22222 22222 <br/> 222222222 2222222222 222222222</span>
                </li>
                <li class="carousel-slide">
                    <img src="https://via.placeholder.com/150" alt="" class="carousel-item-img"/>
                </li>
                <li class="carousel-slide light-blue round">
                    <span class="carousel-item-text">333 333333333 <br/> 333333333333</span>
                </li>
                <li class="carousel-slide">
                    <img src="https://via.placeholder.com/150" alt="" class="carousel-item-img"/>
                </li>
                <li class="carousel-slide purpule round">
                    <span class="carousel-item-text">4444 444444444444<br/> 44444</span>
                </li>
                <li class="carousel-slide">
                    <img src="https://via.placeholder.com/150" alt="" class="carousel-item-img"/>
                </li>
                <li class="carousel-slide  pink round">
                    <span class="carousel-item-text">55555555 55555<br/> 55 5555</span>
                </li>
                <li class="carousel-slide">
                    <img src="https://via.placeholder.com/150" alt="" class="carousel-item-img"/>
                </li>
                <li class="carousel-slide pink round">
                    <span class="carousel-item-text">6666666 6666666666 <br/> 66666 6666666 66666</span>
                </li>
                <li class="carousel-slide">
                    <img src="https://via.placeholder.com/150" alt="" class="carousel-item-img"/>
                </li>
                <li class="carousel-slide  light-blue round">
                    <span class="carousel-item-text">777777 777 777<br/> 77 77777</span>
                </li>
                <li class="carousel-slide">
                    <img src="https://via.placeholder.com/150" alt="" class="carousel-item-img"/>
                </li>
                <li class="carousel-slide purpule round" data-number="16">
                    <span class="carousel-item-text">888 8888<br/> 88888888</span>
                </li>
            </ul>
        </div>
    );
}