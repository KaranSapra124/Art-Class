import React from 'react';
import { motion } from 'framer-motion';
import './Glass.css';
import paint1 from '../../assets/Glass/g1.jpg';
import paint2 from '../../assets/Glass/g2.jpg';
import paint3 from '../../assets/Glass/g3.jpg';
import paint4 from '../../assets/Glass/g4.jpg';
import paint5 from '../../assets/Glass/g5.jpg';
import logogif from '../../assets/gif_logo/g_l.gif';




const Painting = () => {
  const images = [
    { id: 'image1', src: paint1, title: 'Artful Reflections', description: 'Carefully crafted with intricate details, each piece tells its own story. The blend of colors and textures brings a sense of elegance and originality, transforming ordinary glass into a captivating work of art.' },
    { id: 'image2', src: paint2, title: 'Timeless Beauty', description: 'A fusion of creativity and skill, this piece embodies a unique charm. With a focus on craftsmanship and delicate design, it adds an exquisite touch that captures the viewer’s attention.' },
    { id: 'image3', src: paint3, title: 'Radiant Creations', description: 'This artwork shines with vibrant colors and artistic flair, combining beauty with craftsmanship. Every brushstroke and detail reflects a commitment to bringing art to life, creating a radiant masterpiece.' },
    { id: 'image4', src: paint4, title: 'Elegant Expressions', description: 'Blending simplicity with sophistication, this piece showcases the beauty of artistry in every line and color. Its design exudes a refined aesthetic, making it a perfect fit for any artistic display.' },
    { id: 'image5', src: paint5, title: 'Crafted Inspirations', description: 'Infused with creativity and passion, this piece symbolizes the joy of handmade art. The harmonious blend of colors and textures brings a refreshing perspective, celebrating the essence of fine craftsmanship.' },
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
    <span style={{ color: 'brown' }}>
    <img className='logogifsize' src={logogif}/>The Beauty With
</span>
<span style={{color: 'blue'}}>in Clear Reflections</span> 
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
