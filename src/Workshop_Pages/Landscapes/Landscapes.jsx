import React from 'react';
import './Landscapes.css'; 
import { motion } from 'framer-motion';

import paint1 from '../../assets/Landscape/l1.jpg';
import paint2 from '../../assets/Landscape/l2.jpg';
import paint3 from '../../assets/Landscape/l3.jpg';
import paint4 from '../../assets/Landscape/l4.jpg';
import paint5 from '../../assets/Landscape/l5.jpg';
import paint6 from '../../assets/Landscape/l6.jpg';
import paint7 from '../../assets/Landscape/l7.jpg';
import paint8 from '../../assets/Landscape/l8.jpg';
import paint9 from '../../assets/Landscape/l9.jpg';
import logogif from '../../assets/gif_logo/l_l.gif';

const Painting = () => {
  const images = [
    { id: 'image1', src: paint1, title: 'Riverside Haven', description: 'A calm river flows by a quaint house nestled on the shore, with gentle ripples reflecting the surrounding trees. A small boat rests on the water, inviting viewers to imagine a peaceful day spent along this serene riverside.' },
    { id: 'image2', src: paint2, title: 'Night Whispers', description: 'Under a starlit sky, a girl and her cat swing quietly on a jhula, embraced by the peaceful night. Shadows of trees and soft moonlight create a mystical ambiance, capturing a sense of wonder and companionship.' },
    { id: 'image3', src: paint3, title: 'Sunlit Peaks', description: 'A boat glides gently along a river flanked by majestic mountains. Birds soar in the sunlight, enhancing the landscape’s warmth and tranquility, as the morning light casts a golden glow across the scene.' },
    { id: 'image4', src: paint4, title: 'Fishing Quiet', description: 'A fisherman casts his line into calm waters, surrounded by nature’s quiet splendor. The scene captures patience and tradition, with soft sunlight highlighting the dedication of the fisherman and the beauty of his surroundings' },
    { id: 'image5', src: paint5, title: 'Birdsong Branches', description: 'Birds perch on delicate tree branches, filling the canvas with life and grace. This piece captures nature’s harmony, as the gentle interplay of light and shadow accentuates the elegance of these feathered friends on the tree’s boughs.' },
    { id: 'image6', src: paint6, title: 'Artful Bloom', description: 'A vibrant landscape showcasing nature’s pure beauty in rich, layered colors. This masterpiece invites admiration of its finely crafted details, drawing viewers into a world filled with artistic finesse and natural beauty.' },
    { id: 'image7', src: paint7, title: 'Nocturnal Harmony', description: 'Under a velvet night sky, birds find refuge among the tree’s branches, silhouetted by soft moonlight. The scene evokes a quiet serenity, capturing the beauty of nature’s rhythm as the world rests in peaceful silence.' },
    { id: 'image8', src: paint8, title: 'Woodland Bonds', description: 'A deer and her fawn stand together under the shelter of a tree, embodying the beauty of family and protection in the wild. This touching scene of nature speaks to the gentleness and nurturing found within the forest.' },
    { id: 'image9', src: paint9, title: 'Riverside Haven', description: 'A calm river flows by a quaint house nestled on the shore, with gentle ripples reflecting the surrounding trees. A small boat rests on the water, inviting viewers to imagine a peaceful day spent along this serene riverside.' },
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
    <img className='logogifsize' src={logogif}/>Nature’s Beauty
</span>
<span style={{color: 'blue'}}> in Every Stroke</span>
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
