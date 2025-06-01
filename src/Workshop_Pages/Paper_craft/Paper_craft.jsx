import React, { useEffect, useState } from 'react';
import './Paper_craft.css';
import { motion } from 'framer-motion';

// import paint1 from '../../assets/Paper_craft/c1.jpg';
// import paint2 from '../../assets/Paper_craft/c2.jpg';
// import paint3 from '../../assets/Paper_craft/c3.jpg';
// import paint4 from '../../assets/Paper_craft/c4.jpg';
// import paint5 from '../../assets/Paper_craft/c5.jpg';
// import paint6 from '../../assets/Paper_craft/c6.jpg';
// import paint7 from '../../assets/Paper_craft/c7.jpg';
// import paint8 from '../../assets/Paper_craft/c8.jpg';
// import paint9 from '../../assets/Paper_craft/c9.jpg';
import logogif from '../../assets/gif_logo/cr_l.gif';
import axios from 'axios';

const Paper_craft = () => {
  // const images = [
  //   { id: 'image1', src: paint1, title: 'Nature’s Buzz', description: 'A cheerful honeybee flies above paper flowers, capturing the lively beauty of nature in motion.' },
  //   { id: 'image2', src: paint2, title: 'Little Blooms', description: 'A charming flower pot with bright paper blooms, crafted to bring a smile and a touch of spring.' },
  //   { id: 'image3', src: paint3, title: 'Elegant Silhouette', description: 'Delicate paper-cut hair forms a graceful silhouette of a woman, showcasing refined artistry.' },
  //   { id: 'image4', src: paint4, title: 'Feathered Friends', description: 'A paper bird rests beside flowers, bringing a peaceful and playful touch to nature-inspired art.' },
  //   { id: 'image5', src: paint5, title: 'Bag of Joy', description: 'A little boy holds a paper flower pot, adding charm and simplicity to this delightful craft.' },
  //   { id: 'image6', src: paint6, title: 'Paper Treasures', description: 'A girl proudly holds a paper bag with floral details, capturing a sweet and playful moment.' },
  //   { id: 'image7', src: paint7, title: 'Blooming Vase', description: 'A glass pot filled with delicate paper flowers, combining simplicity with a touch of elegance' },
  //   { id: 'image8', src: paint8, title: 'Busy Bee', description: 'A honeybee holds a bucket, a playful nod to the hardworking nature of bees in a fun, creative way.' },
  //   { id: 'image9', src: paint9, title: 'Teddy’s Smile', description: 'A boy with a paper-cut teddy face, a heartwarming creation full of innocence and delight.' },
  // ];
  const [images, setImages] = useState([]);
  const fetchData = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_Backend_url}/admin/get-workshop/Paper Craft`)
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

          <span style={{ color: '#c70c0c' }}>
            <img className='logogifsize' src={logogif} />Expressions in
          </span>
          <span style={{ color: '#f0ee84' }}> Layered Paper Forms</span>
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

export default Paper_craft;
