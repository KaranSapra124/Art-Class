import React from 'react';
import { motion } from 'framer-motion';
import './Tutorial.css';

const Tutorial = () => {
  return (
    <>
      <div className="tutorial-container">
        {/* Framer Motion for title animation */}
        <motion.h1 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          className="tutorial-title"
        >
          Tutorial Of Our Creative Art Class
        </motion.h1>

        {/* Description about Tara Art Classes */}
        <p className="tutorial-description">
          Welcome to Tara Art Classes, where creativity knows no bounds! Our classes cater to all skill levels, from beginners to advanced artists. Join us to explore various artistic techniques and unleash your imagination. Our experienced instructors provide personalized guidance to help you master your craft. Whether you're interested in painting, drawing, or mixed media, we offer a supportive environment to nurture your talents. Let’s embark on this artistic journey together and bring your ideas to life!
        </p>

        {/* Video Section */}
        <div className="video-container">
          <iframe 
            src="https://www.youtube-nocookie.com/embed/38MF5g_y_u0" 
            title="YouTube video" 
            allowFullScreen 
            frameBorder="0" 
            className="responsive-video"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default Tutorial;
