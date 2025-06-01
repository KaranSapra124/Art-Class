import React, { useEffect, useState } from 'react';
import './Sculpture.css';
import { motion } from 'framer-motion';

// import quill1 from '../../assets/quiling/q1.webp';
// import quill2 from '../../assets/quiling/q2.webp';
import logogif from '../../assets/gif_logo/q_l.gif';
import axios from 'axios';

const Sculpture = () => {
  // const images = [
  //   { id: 'quill1', src: quill1, title: 'Floral Delight', description: "A delicate quilling art piece featuring floral patterns with vibrant colors, capturing the essence of blooming flowers." },
  //   { id: 'quill2', src: quill2, title: 'Floral Delight', description: "A delicate quilling art piece featuring floral patterns with vibrant colors, capturing the essence of blooming flowers." },
  // ];
const [images, setImages] = useState([]);
  const fetchData = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_Backend_url}/admin/get-workshop/Quilling`)
    setImages(data?.data)
  }
  useEffect(() => {

    fetchData()

  }, [])
  return (
    <>
      {/* Intro Section about Quilling Art */}
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
          Discover the Art of Quilling
        </motion.h1>

        <motion.p
          initial={{ y: "1rem", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
          style={{ textAlign: 'center', color: 'gray', margin: '0 10%', fontSize: '1.2rem' }}
        >
          Quilling art is a unique craft that transforms simple strips of paper into intricate designs. Using techniques
          like rolling, looping, and shaping, artists create vibrant patterns and scenes, adding texture and dimension
          to their work.
        </motion.p>

        <motion.p
          initial={{ y: "1rem", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.6, ease: "easeInOut" }}
          style={{ textAlign: 'center', color: 'gray', margin: '1rem 10%', fontSize: '1.2rem' }}
        >
          This ancient art form is both meditative and expressive, capturing beauty in simplicity. Enjoy this collection
          of quilling art that showcases the delicate balance between creativity and craftsmanship.
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
            <img className='logogifsize' src={logogif} />Crafted from
          </span>
          <span style={{ color: '#cfb240' }}> Pieces of Paper Magic</span>
        </motion.div>
      </div>

      {/* Gallery Section */}
      <div id="galleryContainer">
        {images?.length > 0 ? images.map((image, index) => (
          <motion.div
            key={image?._id}
            id={`galleryItem-${image?._id}`}
            className="galleryItem"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 * index }}
            whileHover={{ scale: 1.1, rotate: index % 2 === 0 ? 3 : -3 }}
            whileTap={{ scale: 0.97 }}
          >
            <motion.img
              id={`galleryImage-${image?._id}`}
              src={image?.imageUrl}
              alt={image?.title}
              className="galleryImage"
              initial={{ scale: 1 }}
              animate={{ scale: 1.05 }}
              transition={{ duration: 0.5, delay: 0.15 * index }}
            />
            <div id={`galleryInfo-${image._id}`} className="galleryInfo">
              <h3 id={`imageTitle-${image._id}`} className="imageTitle">{image?.title}</h3>
              <p id={`imageDescription-${image?._id}`} className="imageDescription">{image?.content}</p>
              {/* <p id={`imageAdditionalText-${image?._id}`} className="imageAdditionalText">{image.additionalText}</p> */}
            </div>
          </motion.div>
        )) : <div className="spinner-border text-primary my-5 mx-auto" role="status">
          {/* <span className="sr-only">Loading...</span> */}
        </div>}
      </div>
    </>
  );
};

export default Sculpture;
