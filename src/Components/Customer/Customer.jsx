import React from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import './Customer.css';

const Customer = () => {
  // Hook to detect if stats section is in view
  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: false, // Allow the animation to trigger every time the section comes into view
    threshold: 0.2, // Trigger when 20% of the section is visible
  });

  return (
    <div id="stats-section" ref={statsRef}>
      <div id="stats-overlay">
        <div id="stats-content">
          <h1 id="main-heading">Trusted by hundreads Students and Parents</h1>
          <p id="description">
          "Empowering creative minds to shape the future of art. Join a community of artists thriving in an inspiring space."
          </p>
          <div id="stats-grid">
            <div id="stat-item">
              <h2 id="stat-number">
                {statsInView && (
                  <CountUp start={100} end={136} duration={2.5} />
                )}
                <b>+</b>
              </h2>
              <p id="stat-description">Total Students</p>
            </div>
            <div id="stat-item">
              <h2 id="stat-number">
                {statsInView && (
                  <CountUp start={10} end={18} duration={2.5}  />
                )}
                <b>+</b>
              </h2>
              <p id="stat-description">International Students</p>
            </div>
            <div id="stat-item">
              <h2 id="stat-number">
                {statsInView && (
                  <CountUp start={1} end={3} duration={2.5} />
                )}
               <b>+</b> 
              </h2>
              <p id="stat-description">Awards Winning</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
