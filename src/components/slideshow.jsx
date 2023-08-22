import React, { useEffect } from 'react';
import f5 from './house1.jpeg'
import f6 from './house2.jpeg'
import f7 from './house3.jpeg'
import f8 from './house4.jpeg'

const Slideshow = () => {
    useEffect(() => {
      const prevButton = document.querySelector(".navButton#previous");
      const nextButton = document.querySelector(".navButton#next");
      const wrapper = document.querySelector(".sliderWrapper");
      const slideWidth = document.querySelector(".sliderItem").clientWidth;
      let slideIndex = 0;
  
      const handlePrevClick = () => {
        if (slideIndex > 0) {
          slideIndex--;
          wrapper.style.transform = `translateX(${-slideIndex * slideWidth}px)`;
        }
      };
      prevButton.addEventListener("click", handlePrevClick);
  
      const handleNextClick = () => {
        if (slideIndex < 3) {
          slideIndex++;
          wrapper.style.transform = `translateX(${-slideIndex * slideWidth}px)`;
        }
      };
      nextButton.addEventListener("click", handleNextClick);
  
      return () => {
        prevButton.removeEventListener("click", handlePrevClick);
        nextButton.removeEventListener("click", handleNextClick);
      };
    }, []);
  
    return (
      <div className="slider">
        <div className="sliderWrapper">
          <div className="sliderItem">
            <img src={f5} width="700" alt="house1" className="sliderImg" />
          </div>

          <div className="sliderItem">
            <img src={f6} width="600" alt="house2" className="sliderImg" />
            <div className="slideBg" />
          </div>

          <div className="sliderItem">
            <img src={f7} alt="house3" width="700" className="sliderImg" />
            <div className="slideBg" />
          </div>

          <div className="sliderItem">
            <img src={f8} width="700" alt="house4" className="sliderImg" />
            <div className="slideBg" />
          </div>
        </div>

        <div className="navButton" id="previous">&#10094;</div>
        <div className="navButton" id="next">&#10095;</div>
      </div>
    );
  };
  
  export default Slideshow;
  