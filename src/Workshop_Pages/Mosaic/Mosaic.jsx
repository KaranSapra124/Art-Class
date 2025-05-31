import React from 'react'

const Mosaic = () => {
  return (
    <div>
      
    </div>
  )
}

export default Mosaic



// // Mosaic.js
// import React from 'react';
// import './Mosaic.css';
// import { motion } from 'framer-motion';

// import paint1 from '../../assets/mosaic/m1.jpg';
// import logogif from '../../assets/gif_logo/m_l.gif';

// const Mosaic = () => {
//   const images = [
//     { id: 'image1', src: paint1, title: 'Mosaic Reverence to Lord', description: "This vibrant mosaic art features Lord Ganesha in the center, surrounded by a lively background of red and blue tiles. The intricate coloring and careful arrangement of shapes give the piece a playful yet devotional essence." },
//   ];

//   return (
//     <>
//       {/* Intro Section about Mosaic Art */}
//       <div id="introContainer">
//         <motion.h1
//           initial={{ y: "2rem", opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 1.5, ease: "easeInOut" }}
//           style={{
//             background: 'linear-gradient(black, gray)',
//             WebkitBackgroundClip: 'text',
//             color: 'transparent',
//             textAlign: 'center',
//             marginBottom: '1rem',
//             fontSize: '2.5rem'  // Adjust size as needed
//           }}
//         >
//           Discover the Art of Mosaic
//         </motion.h1>
        
//         <motion.p
//           initial={{ y: "1rem", opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
//           style={{ textAlign: 'center', color: 'gray', margin: '0 10%', fontSize: '1.2rem' }}  // Increased font size
//         >
//           Mosaic art, a craft dating back thousands of years, is a mesmerizing way of piecing together tiny fragments
//           of stone, glass, or ceramics to form intricate patterns and images. Originating in ancient Mesopotamia, this
//           form of art has been used to decorate floors, walls, and ceilings of temples and buildings, capturing the
//           essence of beauty and storytelling through unique, hand-crafted pieces.
//         </motion.p>

//         <motion.p
//           initial={{ y: "1rem", opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 1.5, delay: 0.6, ease: "easeInOut" }}
//           style={{ textAlign: 'center', color: 'gray', margin: '1rem 10%', fontSize: '1.2rem' }}  // Increased font size
//         >
//           Today, mosaic art remains significant for its historical value, artistic appeal, and therapeutic benefits.
//           Each piece, no matter how small, plays a vital role in creating a larger picture – symbolizing unity and
//           creativity. Enjoy this collection of pieces inspired by the wonder of mosaic!
//         </motion.p>
//       </div>

//       {/* Header Section */}
//       <div id="headerContainer">
//         <motion.div
//           initial={{ y: "2rem", opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{
//             duration: 2,
//             ease: "easeIn",
//           }}
//         >
//           <span style={{ color: '#ad5631' }}>
//           <img className='logogifsize' src={logogif}/>Crafted from
//           </span>
//           <span style={{color: '#cfb240'}}> Pieces of Wonder</span>
//         </motion.div>
//       </div>

//       {/* Gallery Section */}
//       <div id="galleryContainer">
//         {images.map((image, index) => (
//           <motion.div
//             key={image.id}
//             id={`galleryItem-${image.id}`}
//             className="galleryItem"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 * index }}
//             whileHover={{ scale: 1.1, rotate: index % 2 === 0 ? 3 : -3 }}
//             whileTap={{ scale: 0.97 }}
//           >
//             <motion.img
//               id={`galleryImage-${image.id}`}
//               src={image.src}
//               alt={image.title}
//               className="galleryImage"
//               initial={{ scale: 1 }}
//               animate={{ scale: 1.05 }}
//               transition={{ duration: 0.5, delay: 0.15 * index }}
//             />
//             <div id={`galleryInfo-${image.id}`} className="galleryInfo">
//               <h3 id={`imageTitle-${image.id}`} className="imageTitle">{image.title}</h3>
//               <p id={`imageDescription-${image.id}`} className="imageDescription">{image.description}</p>
//               <p id={`imageAdditionalText-${image.id}`} className="imageAdditionalText">{image.additionalText}</p>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Mosaic;
