import { useState, useEffect } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, slides.length]);

  return (
    <div>
      <div onClick={() => goToPrevious()}>
        <ArrowBackIosIcon />
      </div>
      <div onClick={() => goToNext()}>
        <ArrowForwardIosIcon />
      </div>
      <div style={{ backgroundImage: `url(${slides[currentIndex].img})` }}>
        <h1>{slides[currentIndex].label}</h1>
      </div>
      <div>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            className={slideIndex === currentIndex ? "active" : ""}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
