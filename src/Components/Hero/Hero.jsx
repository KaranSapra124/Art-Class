import React from 'react';
import { Link } from 'react-router-dom'; // Ensure to import Link for navigation
import arrow_icon from '../../assets/arrow_icon.svg';
import './Hero.css';
import CountUp from "react-countup";
import { motion } from "framer-motion";
import front_img from '../../assets/classes/front_main_image.jpeg'

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "ease-in",
              }}
            >
              Shape Your Vision
              <br />
              Into Art
              <br /> at Our Classes
            </motion.h1>
          </div>
          <div className="flexColStart secondaryText flexhero-des">
            <span>Find your way of living by dipping into arts</span>
            <span>Forget all difficulties in finding a creative life</span>
            <Link to='/about' className="custom-link">
  <div id="about-us">
    About Us
    <span id='arrow_gap'>
      <img src={arrow_icon} alt="arrow icon" />
    </span>
  </div>
</Link>


          </div>

          <div className="stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8800} end={9000} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">Students</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={1950} end={2000} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">Int Students</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={28} /> <span>+</span>
              </span>
              <span className="secondaryText">Awards Winning</span>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexCenter hero-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            className="image-container"
          >
            <img src={front_img} alt="art-class-visual" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;