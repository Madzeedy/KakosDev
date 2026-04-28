import React, { useState, useEffect } from "react";
import bgImage from "../assets/roadway.jpg";
import bg1 from "../assets/roadway2.jpg";
import bg2 from "../assets/roadway10.jpg";
import bg3 from "../assets/roadway8.jpg";
import bg4 from "../assets/roadway9.jpg";
import logo from "../assets/K2.png"; // top left logo

const backgrounds = [bgImage, bg1, bg2, bg3, bg4];

function Home({ setShowQuote }) {
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 7000); // change every 7 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="home"
      id="home"
      style={{ backgroundImage: `url(${backgrounds[currentBg]})` }}
    >
      <div className="overlay">
        {/* TOP LEFT LOGO */}
        <img src={logo} alt="Logo" className="hero-logo" />

        {/* MAIN CONTENT */}
        <div className="home-content">
          <span className="home-subtitle">KAKOS DEVELOPMENT LTD</span>

          <h1>
            Reliable logistics, <span>delivered with precision</span>
          </h1>

          <p>
            We handle your cargo with care, respecting your time, your business,
            and your deadlines.
          </p>

          <p>
            Precision logistics for businesses that demand reliability. We move
            your cargo with discipline, speed, and zero compromise.
          </p>

          <button
            className="home-btn minimal"
            onClick={() => setShowQuote(true)}
          >
            Discuss your project →
          </button>
        </div>
      </div>
    </section>
  );
}

export default Home;
