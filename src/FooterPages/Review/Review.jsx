import React from 'react';
import './Review.css'; 
import p_1 from '../../assets/Privacy_img/P_1.jpg'
import p_2 from '../../assets/Privacy_img/P_2.jpg'
import p_3 from '../../assets/Privacy_img/P_3.jpg'
import p_4 from '../../assets/Privacy_img/P_4.jpg'
import p_5 from '../../assets/Privacy_img/P_5.jpg'
import p_6 from '../../assets/Privacy_img/P_6.jpg'
import p_7 from '../../assets/Privacy_img/P_7.jpg'
import p_8 from '../../assets/Privacy_img/P_8.jpg'



const Review = () => {
  return (
    <div id="testimonials-container">
      <h1 id="testimonials-heading">What Our Students Say</h1>
      
      <div id="testimonials-grid">
        <div className="testimonial">
          <img src={p_1} alt="Sarah" className="student-img" />
          <p className="testimonial-quote">"Tara Art Classes with Ritima ma'am are the best! She always helps us with new techniques and makes art so exciting."</p>
          <span className="student-name">- Soniya Tiwari</span>
        </div>

        <div className="testimonial">
          <img src={p_2} alt="Michael" className="student-img" />
          <p className="testimonial-quote">"I love the way Ritima ma'am teaches at Classes. Every class is fun, and I learn something new each time!"</p>
          <span className="student-name">- Rakhi Gupta</span>
        </div>

        <div className="testimonial">
          <img src={p_3} alt="Emily" className="student-img" />
          <p className="testimonial-quote">"Ritima ma'am is super patient and kind. Tara Art Classes have helped me improve my drawing a lot!"</p>
          <span className="student-name">- Vansh Kumar</span>
        </div>

        <div className="testimonial">
          <img src={p_4} alt="David" className="student-img" />
          <p className="testimonial-quote">"I would recommend this art class to anyone looking to sharpen their skills or just have fun!"</p>
          <span className="student-name">- Ruhi Singh</span>
        </div>

        <div className="testimonial">
          <img src={p_5} alt="Lisa" className="student-img" />
          <p className="testimonial-quote">"I've gained so much confidence in my art. Ritima ma'am helped me find my style!"</p>
          <span className="student-name">- Preeti Kumari</span>
        </div>

        <div className="testimonial">
          <img src={p_6} alt="Tom" className="student-img" />
          <p className="testimonial-quote">"I was shy about my art, but Ritima ma'am has made me more confident at Tara Art Classes. She’s the best teacher!."</p>
          <span className="student-name">- Priya Rawat</span>
        </div>

        <div className="testimonial">
          <img src={p_7} alt="Anna" className="student-img" />
          <p className="testimonial-quote">"At Tara Art Classes, Ritima ma'am teaches us to try new styles and have fun with art."</p>
          <span className="student-name">- Kittu</span>
        </div>

        <div className="testimonial">
          <img src={p_8} alt="James" className="student-img" />
          <p className="testimonial-quote">"Learning with Ritima ma'am is amazing! She explains everything so well, and it feel like a adventure in art."</p>
          <span className="student-name">- Nandani Kumari</span>
        </div>
      </div>
    </div>
  );
};

export default Review;
