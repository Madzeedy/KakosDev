import React from 'react';
import bgImage from '../assets/home-bg.jpg'
 
function Home() {
  return (
<section className="home" id="home" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="overlay">
        <button className="home-btn">
          Explore Our Services
          <span className="arrow">→</span>
        </button>
      </div>
    </section>
  );
}
 
export default Home;