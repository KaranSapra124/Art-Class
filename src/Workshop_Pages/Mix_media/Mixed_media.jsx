import React from 'react';
import './Mixed_Media.css';
import { motion } from 'framer-motion';

import mixed1 from '../../assets/mixed_media/m1.webp';
import mixed2 from '../../assets/mixed_media/m2.webp';
import logogif from '../../assets/gif_logo/m_l.gif';

const Mixed_Media = () => {
  const images = [
    { id: 'mixed1', src: mixed1, title: 'Urban Layers', description: "A dynamic piece blending photography, paint, and texture to capture the energy and layers of urban life." },
    { id: 'mixed2', src: mixed2, title: 'Nature’s Fusion', description: "This artwork combines organic textures, watercolors, and ink to evoke the harmony and contrast within nature." },
  ];

  return (
    <>
      {/* Intro Section about Mixed Media Art */}
      <div id="introContainer">
        <motion.h1
          initial={{ y: "2rem", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{
            background: 'linear-gradient(black, gray)',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            textAlign: 'center',
            marginBottom: '1rem',
            fontSize: '2.5rem'
          }}
        >
          Discover the Art of Mixed Media
        </motion.h1>
        
        <motion.p
          initial={{ y: "1rem", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
          style={{ textAlign: 'center', color: 'gray', margin: '0 10%', fontSize: '1.2rem' }}
        >
          Mixed media art brings together a variety of materials and techniques, pushing the boundaries of traditional
          art forms. Artists blend paints, photographs, textures, and other elements to create unique compositions
          with depth and meaning.
        </motion.p>

        <motion.p
          initial={{ y: "1rem", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.6, ease: "easeInOut" }}
          style={{ textAlign: 'center', color: 'gray', margin: '1rem 10%', fontSize: '1.2rem' }}
        >
          Each piece of mixed media art offers a distinctive experience, blending the tangible and intangible into one.
          Explore this collection to see how artists use diverse media to express complexity, creativity, and emotion.
        </motion.p>
      </div>

      {/* Header Section */}
      <div id="headerContainer">
        <motion.div
          initial={{ y: "2rem", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 2,
            ease: "easeIn",
          }}
        >
          <span style={{ color: '#ad5631' }}>
          <img className='logogifsize' src={logogif} alt="Logo"/> Crafted with
          </span>
          <span style={{color: '#cfb240'}}> Boundless Imagination</span>
        </motion.div>
      </div>

      {/* Gallery Section */}
      <div id="galleryContainer">
        {images.map((image, index) => (
          <motion.div
            key={image.id}
            id={`galleryItem-${image.id}`}
            className="galleryItem"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 * index }}
            whileHover={{ scale: 1.1, rotate: index % 2 === 0 ? 3 : -3 }}
            whileTap={{ scale: 0.97 }}
          >
            <motion.img
              id={`galleryImage-${image.id}`}
              src={image.src}
              alt={image.title}
              className="galleryImage"
              initial={{ scale: 1 }}
              animate={{ scale: 1.05 }}
              transition={{ duration: 0.5, delay: 0.15 * index }}
            />
            <div id={`galleryInfo-${image.id}`} className="galleryInfo">
              <h3 id={`imageTitle-${image.id}`} className="imageTitle">{image.title}</h3>
              <p id={`imageDescription-${image.id}`} className="imageDescription">{image.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Mixed_Media;
