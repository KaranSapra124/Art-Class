import React, { useEffect, useState } from 'react';
import './Waste.css';
import { motion } from 'framer-motion';

// import paint1 from '../../assets/waste/10.png';
// // import paint2 from '../../assets/waste/w2.jpg';
// import paint3 from '../../assets/waste/w3.jpg';
// import paint4 from '../../assets/waste/w4.jpg';
// import paint5 from '../../assets/waste/w5.jpg';
// import paint6 from '../../assets/waste/w6.jpg';
// import paint7 from '../../assets/waste/w7.jpg';
// import paint8 from '../../assets/waste/11.png';
// import paint9 from '../../assets/waste/12.png';
import logogif from '../../assets/gif_logo/w_l.gif';
import axios from 'axios';

const Waste = () => {
  // const images = [
  //   { id: 'image1', src: paint1, title: ' Fluffy Sheep Craft', description: 'This adorable sheep is crafted with cotton balls, adding a fluffy texture to its body. A purple flower adorns its head, giving it a playful charm. This simple yet creative piece demonstrates how everyday items can come together to create an engaging, delightful character.' },
  //   // { id: 'image2', src: paint2, title: 'Art Piece Two', description: 'Description of Art Piece Two.', additionalText: 'Additional info about Art Piece Two.' },
  //   { id: 'image3', src: paint3, title: 'Whimsical Owl', description: 'An adorable owl crafted entirely from pencil sharpener shavings, showcasing the beauty of upcycling. This imaginative piece turns everyday classroom waste into a delightful character full of charm and creativity.' },
  //   { id: 'image4', src: paint4, title: 'Nature-Inspired Shavings', description: 'A beautiful arrangement of flowers and leaves made from pencil sharpener waste, crafted by a young artist. This delicate design brings natural beauty to life with an eco-friendly twist.' },
  //   { id: 'image5', src: paint5, title: 'Cotton Santa Claus', description: 'A festive Santa Claus face created with soft cotton, perfect for the holiday season. This playful piece adds a cozy and creative touch to the collection, celebrating the joy of upcycled art' },
  //   { id: 'image6', src: paint6, title: 'Cats and Paper-Cut Tree', description: 'Whimsical cats play around a colorful tree made from green and yellow paper scraps. This fun and eco-conscious design combines animal charm with a love for nature, adding a lively touch to any space.' },
  //   { id: 'image7', src: paint7, title: 'Festive Cardboard Ornament', description: 'A decorative cardboard cutout with red accents and white dots, resembling a holiday candy cane. This simple yet eye-catching design shows how even the most basic materials can be reimagined into festive decor.' },
  //   { id: 'image8', src: paint8, title: 'Mother and Cat in Harmony', description: 'Using a discarded circular base, this painting captures a serene moment between a woman and her beloved cat, embraced in a colorful frame. The intricate swirls and harmonious colors evoke warmth and affection, showcasing the beauty of recycled art.' },
  //   { id: 'image9', src: paint9, title: 'Colorful Cultural Plates', description: 'These vibrant plates, each uniquely painted, celebrate cultural diversity and natural landscapes. With themes ranging from traditional art to abstract designs, these pieces are a perfect example of how waste can be transformed into an artistic expression of heritage and nature.' },
  // ];
  const [images, setImages] = useState([]);
  const fetchData = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_Backend_url}/admin/get-workshop/Best of Waste Material`)
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

          <span style={{ color: '#b3b2a8' }}>
            <img className='logogifsize' src={logogif} />Creative Wonders
          </span>
          <span style={{ color: '#c2bf34' }}> from Everyday Finds</span>
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
        )) : <div className="spinner-border text-primary my-5 mx-auto" role="status">
          {/* <span className="sr-only">Loading...</span> */}
        </div>}
      </div>
    </>
  );
};

export default Waste;
