import React, { useEffect, useState } from 'react';
import './Painting.css';
import { motion } from 'framer-motion';

import logogif from '../../assets/gif_logo/p_l.gif';
import axios from 'axios';

const Painting = () => {
  // const images = [
  //   { id: 'image1', src: paint1, title: 'Dancing Grace', description: 'A young girl expressing joy through dance, capturing movement and emotion.' },
  //   { id: 'image2', src: paint2, title: 'Ganesh ji Blessing', description: 'A serene portrayal of a woman with little Ganesh, symbolizing peace and spirituality.' },
  //   { id: 'image3', src: paint3, title: 'Restful Moments', description: 'A serene portrayal of a woman with little Ganesh, symbolizing peace and spirituality.' },
  //   { id: 'image4', src: paint4, title: 'Scenic Serenity', description: 'A peaceful landscape scene, filled with natural beauty and calm vistas.' },
  //   { id: 'image5', src: paint5, title: 'Tranquil Repose', description: 'A serene scene of a woman resting on a sofa, embodying peace and quiet reflection.' },
  //   { id: 'image6', src: paint6, title: 'Sunlit Tree', description: 'A majestic tree reaching toward the sun, highlighting growth and warmth.' },
  //   { id: 'image7', src: paint7, title: 'Divine Mother', description: 'An intricate painting of Mata Rani, embodying strength and divine beauty.' },
  //   { id: 'image8', src: paint8, title: 'Sunlit Tree', description: 'A majestic tree reaching toward the sun, highlighting growth and warmth.' },
  //   { id: 'image9', src: paint9, title: 'Birds of Freedom', description: 'Trees with leaves and birds, symbolizing harmony between nature and life.' },
  // ];
  const [images, setImages] = useState([]);
  const fetchData = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_Backend_url}/admin/get-workshop/Paintings`)
    setImages(data?.data)
  }
  useEffect(() => {

    fetchData()

  }, [])

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
            <img className='logogifsize' src={logogif} />Where Creativity
          </span>
          <span style={{ color: 'red' }}> Meets Canvas</span>
        </motion.div>
      </div>
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
        )) : <div className="spinner-border text-primary my-5" role="status">
          {/* <span className="sr-only">Loading...</span> */}
        </div>}
      </div>
    </>
  );
};

export default Painting;
