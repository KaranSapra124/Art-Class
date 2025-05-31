import React from 'react';
import './Painting.css'; 
import { motion } from 'framer-motion';

import paint1 from '../../assets/Paintings/p1.jpg';
import paint2 from '../../assets/Paintings/p2.jpg';
import paint3 from '../../assets/Paintings/p3.jpg';
import paint4 from '../../assets/Paintings/p4.jpg';
import paint5 from '../../assets/Paintings/p5.jpg';
import paint6 from '../../assets/Paintings/p6.jpg';
import paint7 from '../../assets/Paintings/p7.jpg';
import paint8 from '../../assets/Paintings/p8.jpg';
import paint9 from '../../assets/Paintings/p9.jpg';
import logogif from '../../assets/gif_logo/p_l.gif';

const Painting = () => {
  const images = [
    { id: 'image1', src: paint1, title: 'Dancing Grace', description: 'A young girl expressing joy through dance, capturing movement and emotion.' },
    { id: 'image2', src: paint2, title: 'Ganesh ji Blessing', description: 'A serene portrayal of a woman with little Ganesh, symbolizing peace and spirituality.' },
    { id: 'image3', src: paint3, title: 'Restful Moments', description: 'A serene portrayal of a woman with little Ganesh, symbolizing peace and spirituality.' },
    { id: 'image4', src: paint4, title: 'Scenic Serenity', description: 'A peaceful landscape scene, filled with natural beauty and calm vistas.' },
    { id: 'image5', src: paint5, title: 'Tranquil Repose', description: 'A serene scene of a woman resting on a sofa, embodying peace and quiet reflection.' },
    { id: 'image6', src: paint6, title: 'Sunlit Tree', description: 'A majestic tree reaching toward the sun, highlighting growth and warmth.' },
    { id: 'image7', src: paint7, title: 'Divine Mother', description: 'An intricate painting of Mata Rani, embodying strength and divine beauty.' },
    { id: 'image8', src: paint8, title: 'Sunlit Tree', description: 'A majestic tree reaching toward the sun, highlighting growth and warmth.' },
    { id: 'image9', src: paint9, title: 'Birds of Freedom', description: 'Trees with leaves and birds, symbolizing harmony between nature and life.' },
  ];
  return (
    <>
        <div id="headerContainer">
  <motion.div
    initial={{ y: "2rem", opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{
      duration: 2,
      type: "ease-in",
    }}
  >
    <span style={{ color: 'blue' }}>
    <img className='logogifsize' src={logogif}/>Where Creativity
</span>
<span style={{color: 'red'}}> Meets Canvas</span>
  </motion.div>
</div>
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
              <p id={`imageAdditionalText-${image.id}`} className="imageAdditionalText">{image.additionalText}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Painting;
