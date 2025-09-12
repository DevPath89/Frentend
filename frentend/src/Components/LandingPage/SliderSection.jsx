import React, { useEffect, useState } from "react";

function SliderSection() {
  const images = ["/images/slider1.png", "/images/slider2.jpg", "/images/slider3.jpg"];
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const length = images.length;

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isPaused, length]);

  return (
    <div
      className="slider-container"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {images.map((img, index) => (
        <div key={index} className={`slide ${index === current ? "active" : ""}`}>
          <img src={img} alt={`slide-${index}`} />
        </div>
      ))}

      <div className="dots">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`dot ${idx === current ? "active" : ""}`}
            onClick={() => setCurrent(idx)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default SliderSection;
