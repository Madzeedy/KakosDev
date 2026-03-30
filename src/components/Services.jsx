import React, { useState, useEffect, useRef } from "react";
import { services } from "../Data/ServicesData";

function Services() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  const startSlider = () => {
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % services.length);
    }, 15000);
  };

  const stopSlider = () => {
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startSlider();
    return () => stopSlider();
  }, []);

  const nextService = () => {
    stopSlider();
    setIndex((prev) => (prev + 1) % services.length);
    startSlider();
  };

  const prevService = () => {
    stopSlider();
    setIndex((prev) => (prev - 1 + services.length) % services.length);
    startSlider();
  };

  const goToService = (i) => {
    stopSlider();
    setIndex(i);
    startSlider();
  };

  const service = services[index];

  return (
    <section
      className="services-section"
      id="services"
      onMouseEnter={stopSlider}
      onMouseLeave={startSlider}
    >
      <div className="services-container">
        <div key={index} className="services-left fade-slide">
          <a href="#home" className="back-home">
            ← Back to Home
          </a>

          <span className="services-label">SERVICES</span>

          <h1 className="services-title">
            {service.title} <span>{service.highlight}</span>
          </h1>

          <p className="services-description">{service.description}</p>

          <div className="services-controls">
            <div className="services-arrows">
              <button onClick={prevService}>←</button>
              <button onClick={nextService}>→</button>
            </div>

            <div className="services-dots">
              {services.map((_, i) => (
                <span
                  key={i}
                  className={i === index ? "dot active" : "dot"}
                  onClick={() => goToService(i)}
                />
              ))}
            </div>
          </div>
        </div>

        <div key={service.image} className="services-right fade-slide">
          <img src={service.image} alt="service" />
        </div>
      </div>
    </section>
  );
}

export default Services;
