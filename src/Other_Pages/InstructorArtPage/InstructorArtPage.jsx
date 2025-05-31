import React from 'react';
import { motion } from 'framer-motion';
import './InstructorArtPage.css';
import c1 from '../../assets/InstructorArt/c1.jpeg';
import c2 from '../../assets/InstructorArt/c2.jpeg';
import c3 from '../../assets/InstructorArt/c3.jpeg';
import c4 from '../../assets/InstructorArt/c4.jpeg';
import c5 from '../../assets/InstructorArt/c5.jpeg';
import w1 from '../../assets/InstructorArt/w1.jpg';
import w2 from '../../assets/InstructorArt/w3.jpg';
import w3 from '../../assets/InstructorArt/w2.jpg';
import w4 from '../../assets/InstructorArt/w4.jpg';
import w5 from '../../assets/InstructorArt/w5.jpg';

const imagesCreative = [
  { src: c1, alt: "Creative Art 1", description: "“Our instructor begins the design by skillfully applying a white outline on the fabric, creating intricate patterns that form the base of this artwork.”" },
  { src: c2, alt: "Creative Art 2", description: "“The design takes shape as the instructor carefully fills in the details, adding depth and precision to each element, bringing the artwork to life on the fabric.”" },
  { src: c3, alt: "Creative Art 3", description: "“The shirt is complete, showcasing a harmonious blend of detailed patterns that reflect the instructor's artistic vision and expertise in fabric painting.”" },
  { src: c4, alt: "Creative Art 4", description: "“The instructor stands proudly with her husband, who is wearing the beautifully hand-painted shirt, highlighting the collaboration between art and life.”" },
  { src: c5, alt: "Creative Art 5", description: "“The instructor’s husband confidently wears the finished shirt, embodying the beauty of the hand-painted design and the creative work of the instructor.”" },
];

const imagesWallArt = [
  { src: w1, alt: "Wall Art 1", description: "“ The instructor begins by carefully marking the outline of the wall art, setting the foundation for a detailed and elegant design.”" },
  { src: w2, alt: "Wall Art 2", description: "“The full outline is completed, revealing the intricate structure and pattern that will form the base of this beautiful artwork on the wall.”" },
  { src: w3, alt: "Wall Art 3", description: "“Black outlines are added to emphasize details and bring depth to the design, highlighting the symmetry and complexity of the pattern.”" },
  { src: w4, alt: "Wall Art 4", description: "“The instructor starts adding color, transforming the artwork with vibrant hues and bringing the wall design to life.”" },
  { src: w5, alt: "Wall Art 5", description: "“The wall art is complete, showcasing a stunning and intricate design that captures cultural beauty and creativity, a testament to the instructor’s skill and artistic vision.”" },
];

const InstructorArtPage = () => {
  return (
    <motion.div 
      className="pageContainer" 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1.5 }}
    >
      <motion.h1 id="heading">
        "Art is not what you see, but what you make others see."
      </motion.h1>
      <motion.p id="description">
        Discover the artistic creations of our talented instructor, designed to inspire and motivate students to explore their own creative potential.
      </motion.p>

      <motion.h2 id="fabricPaintHeading">
        Mandala Inspired Fabric Art
      </motion.h2>
      <motion.p id="description">
        This intricate fabric painting by our instructor captures the essence of creativity and precision. Inspired by the traditional mandala design, it features bold, symmetrical patterns that radiate harmony and balance. The careful detailing and vibrant contrast of white against the rich maroon fabric demonstrate the skill and patience of our instructor. This artwork not only adds beauty to the garment but also serves as a source of inspiration for students to explore their own creativity and dedication to their craft.
      </motion.p>

      {/* Creative Art Section */}
      <div id="carouselContainer">
        {imagesCreative.map((image, index) => (
          <motion.div
            key={index}
            id="carouselCard"
            initial={{ opacity: 0.5, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <img src={image.src} alt={image.alt} id="carouselImage" />
            <p id="carouselDescription">{image.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.h2 id="wallArtHeading">
        Divine Durga Wall Art
      </motion.h2>
      <motion.p id="description">
        This exquisite wall art, crafted by our talented instructor, depicts the revered face of Goddess Durga with intricate detailing and delicate linework. The use of traditional motifs, such as the finely designed jewelry and ornate crown, highlights the grace and power of the goddess. The harmonious blend of bold and subtle shades against the pink background creates a sense of elegance and reverence. This artwork not only celebrates cultural heritage but also inspires students to pursue their artistic expression with devotion and precision.
      </motion.p>

      {/* Wall Art Section */}
      <div id="gridContainer">
        {imagesWallArt.map((image, index) => (
          <motion.div
            key={index}
            id="gridCard"
            initial={{ opacity: 0.5, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <img src={image.src} alt={image.alt} id="gridImage" />
            <p id="gridDescription">{image.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default InstructorArtPage;
