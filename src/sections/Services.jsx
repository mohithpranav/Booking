import { useState, useRef } from "react";
import ServiceCard from "../components/ServiceCard/ServiceCard";
import { leftarrow, rightarrow } from "../assets/icons";
import { sixpillars } from "../constants";
import "./Services.css";

const Services = () => {
  const cardWidth = 493;
  const containerWidth = 1000;
  const visibleCards = Math.floor(containerWidth / cardWidth);
  const totalCards = sixpillars.length;
  const maxIndex = totalCards - visibleCards; // Maximum index to prevent blank space

  const [currentIndex, setCurrentIndex] = useState(0); // Track current index of the swiper

  const containerRef = useRef(null);

  const nextSlide = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToCard = (index) => {
    setCurrentIndex(index);
  };

  // Calculate translateX based on the current index
  const translateX = -currentIndex * cardWidth;

  return (
    <header className="service-section-container">
      <p className="service-section-title">HOW IT WORKS</p>
      <div className="hero-header">
        <h3>
          <span>Lifestyle as medicine:</span> The six pillars
        </h3>
        <div className="arrow-container">
          <div className="arrow-circle" onClick={prevSlide}>
            <img src={leftarrow} alt="Left Arrow" className="navigate-arrow" />
          </div>
          <div className="arrow-circle" onClick={nextSlide}>
            <img
              src={rightarrow}
              alt="Right Arrow"
              className="navigate-arrow"
            />
          </div>
        </div>
      </div>

      <div className="service-cards-buttons-container">
        {sixpillars.map((pillar, index) => (
          <button
            className="service-card-button"
            key={pillar.title}
            onClick={() => goToCard(index)}
          >
            {pillar.title}
          </button>
        ))}
      </div>

      <div className="service-cards-container-wrapper">
        <div
          className="service-cards-container"
          ref={containerRef}
          style={{
            transform: `translateX(${translateX}px)`,
            transition: "transform 0.3s ease-in-out",
          }}
        >
          {sixpillars.map((pillar) => (
            <ServiceCard
              key={pillar.title}
              imgURL={pillar.imgURL}
              title={pillar.title}
              description={pillar.description}
            />
          ))}
        </div>
      </div>
    </header>
  );
};

export default Services;
