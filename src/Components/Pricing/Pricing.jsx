import React from 'react';
import './Pricing.css';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { sliderSettings } from '../../utils/common';
import data from '../../utils/slider.json';
import PropertyCard from '../PropertyCard/PropertyCard';

// Importing images directly
import slider1 from '../../assets/sliderimg/p1.jpg';
import slider2 from '../../assets/sliderimg/9_12.png';
import slider3 from '../../assets/sliderimg/p3.jpg';
import slider4 from '../../assets/sliderimg/p4.jpg';
import slider5 from '../../assets/sliderimg/p5.jpg';
import slider6 from '../../assets/sliderimg/p6.jpg';

const imageList = [slider1, slider2, slider3, slider4, slider5,slider6];

const Pricing = () => {
  return (
    <div id="residencies" className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="flexColStart r-head">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Our Courses...</span>
        </div>
        <Swiper {...sliderSettings}>
          <SliderButtons />
          {
            data.map((card, i) => (
              <SwiperSlide key={i}>
                <div className='flexColStart r-card'>
                  {/* Use the imported image list based on index */}
                  <img src={imageList[i]} alt="home" />
                  <span className='primaryText'>{card.name}</span>
                  <span className='secondaryText r-price'>
                    <span>Rs.</span>
                    <span>{card.price}</span>
                  </span>
                  <span className='secondaryText'>{card.detail}</span>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
        {/* The moving text */}
        <div className="moving-text-container">
          <span className="moving-text">"Please note, only teacher absences will be rescheduled or covered. Unfortunately, missed sessions due to student absences cannot be made up."</span>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-buttons">
      <button onClick={() => swiper.slidePrev()} className="r-prevButton">
        &lt;
      </button>
      <button onClick={() => swiper.slideNext()} className="r-nextButton">
        &gt;
        
      </button>
    </div>
  );
};
