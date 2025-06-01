import React, { useEffect, useState } from 'react';
import './Clay.css';
import { motion } from 'framer-motion';

// import paint1 from '../../assets/clay/1.png';
// import paint2 from '../../assets/clay/2.png';
// import paint3 from '../../assets/clay/3.png';
// import paint4 from '../../assets/clay/4.png';
// import paint5 from '../../assets/clay/5.png';
// import paint6 from '../../assets/clay/6.png';
// import paint7 from '../../assets/clay/7.png';
// import paint8 from '../../assets/clay/8.png';
// import paint9 from '../../assets/clay/9.png';
import logogif from '../../assets/gif_logo/c_l.gif';
import axios from 'axios';

const Clay = () => {
  // const images = [
  //   { id: 'image1', src: paint1, title: 'Clay Art Creation', description: 'A beautiful clay piece with intricate spiral patterns, showcasing creativity and focus. This handmade art brings life to clay in vibrant shades, embodying the spirit of craftsmanship.' },
  //   { id: 'image2', src: paint2, title: 'Clay Floral Creation', description: 'A young artist proudly showcases his clay art piece, a colorful floral arrangement crafted with intricate details. The vibrant flowers and leaves, all made from clay, reflect his creativity in shaping this delightful artwork.' },
  //   { id: 'image3', src: paint3, title: 'Birdhouse Clay Model', description: 'A delicate clay birdhouse adorned with flowers and colorful birds. This model captures the charm of nature, combining fine details and cheerful colors to create a playful, inviting piece.' },
  //   { id: 'image4', src: paint4, title: 'Butterfly Bottle Clay Art', description: 'Focused on her clay project, a young artist adds delicate butterfly designs to a painted bottle. The clay butterflies, meticulously placed, highlight her patience and attention to detail in decorative clay art.' },
  //   { id: 'image5', src: paint5, title: 'Young Artist at Work', description: 'Concentrated on her art, this young artist skillfully paints her clay creation. With paints and tools by her side, she brings her imagination to life, one brushstroke at a time.' },
  //   { id: 'image6', src: paint6, title: 'Traditional Clay Figurine', description: 'A handcrafted clay figurine dressed in traditional attire, complete with an elaborate headdress and patterned clothing, celebrates cultural artistry. This clay work demonstrates the student’s skill and dedication to preserving cultural elements through art.' },
  //   { id: 'image7', src: paint7, title: ' Floral Clay Jar Art', description: 'Displaying her beautifully decorated clay jar, this young artist has crafted a vibrant floral scene against a black background. The colorful clay flowers and butterflies bring life to the jar, showcasing her creativity and skill in clay modeling.' },
  //   { id: 'image8', src: paint8, title: 'Handmade Clay Bowl', description: 'A young artist proudly displays her handmade clay bowl, crafted with care and precision. The bright orange glaze gives the bowl a lively, eye-catching look. This piece showcases her skill in molding and glazing, bringing her artistic vision to life.' },
  //   { id: 'image9', src: paint9, title: 'Mandala Art: A Kaleidoscope of Colors', description: 'This intricate mandala art, held by its young creator, bursts with vibrant patterns and colors. The detailed design reflects patience and creativity, with each layer adding depth to the piece. The symmetry and bold hues make this artwork both visually engaging and spiritually calming.' },
  // ];
  const [images, setImages] = useState([]);
  const fetchData = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_Backend_url}/admin/get-workshop/Clay Work`)
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
          <span style={{ color: '#f2cf41' }}>
            <img className='logogifsize' src={logogif} />Shapes Born
          </span>
          <span style={{ color: '#33bee8' }}> from Creative Touch</span>
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

export default Clay;
