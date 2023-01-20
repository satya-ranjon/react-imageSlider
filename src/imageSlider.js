import React from "react";
import { useState } from "react";

const ImagSlidr = ({ slider, style }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderStyles = {
    height: "100%",
    width: "100%",
    position: "relative",
  };

  const slideStyles = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundImage: `url(${slider[currentIndex].url})`,
    backgroundPosition: "center",
  };
  const leftArrowStyle = {
    position: "absolute",
    top: "50%",
    transform: "translate(0,-50%)",
    left: "32px",
    fontSize: "45px",
    zIndex: 1,
    cursor: "pointer",
    color: "#ffff",
  };
  const rightArrowStyle = {
    position: "absolute",
    top: "50%",
    transform: "translate(0,-50%)",
    right: "32px",
    fontSize: "45px",
    zIndex: 1,
    cursor: "pointer",
    color: "#ffff",
  };
  const goToPrv = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slider.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slider.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const dotContinerStyle = {
    display: "flex",
    justifyContent: "center",
  };
  const dotStyle = {
    fontSize: "55px",
    cursor: "pointer",
    margin: "0 3px",
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <div style={style}>
      <div style={sliderStyles}>
        <div style={leftArrowStyle} onClick={goToPrv}>
          ←
        </div>
        <div style={rightArrowStyle} onClick={goToNext}>
          →
        </div>
        <div style={slideStyles}></div>
        <div style={dotContinerStyle}>
          {slider.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              style={dotStyle}
              onClick={() => goToSlide(slideIndex)}>
              .
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImagSlidr;
