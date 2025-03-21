import React, { useState } from "react";
import style from './style.module.scss';

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className={style.slider}>
      <button className={style.slider_btn} onClick={goToPrev}>&lt;</button>
      <img 
        className={style.slider_img} 
        src={images[currentIndex].original} 
        alt="project" 
        loading="lazy"
      />
      <button className={style.slider_btn} onClick={goToNext}>&gt;</button>
    </div>
  );
};

export default ImageSlider;

