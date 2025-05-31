import React from 'react';
import './Instructor.css';
import teacher from '../../assets/classes/t.jpeg'
import { Link } from 'react-router-dom';

const Instructor = () => {
  return (
    <div id="instructor-container">
      <h1 id="instructor-heading">Meet Our Instructor</h1>

      <div id="instructor-card">
        <img src={teacher} alt="Instructor" id="instructor-img" />
        <h3 id="instructor-name">Ms. Ritima Chatterjee</h3>

        <p id="instructor-desc">
        Ms. Ritima Chatterjee is a professional artist with over 13+ years of experience in various art forms including painting, sculpture, and mixed media. She is passionate about guiding learners to explore their creativity and improve their artistic skills. Her works have been exhibited in several renowned galleries, 
          and she has received multiple awards for her creativity and innovation in painting.
        </p>

        <h4 id="instructor-education-heading">Education & Certifications</h4>
        <p id="instructor-education">
          • Scholar in Madhubani & Advanced Arts<br />
          • Certified Instructor in Creative Painting Techniques<br />
          • Attended Masterclass workshops with acclaimed artists globally
        </p>
        <h4 id="instructor-education-heading">Experience</h4>
        <p id="instructor-education">
          • Experience of 13+ Years
        </p>

        <h4 id="instructor-philosophy-heading">Teaching Philosophy</h4>
        <p id="instructor-philosophy">
          She believes that art is not just a skill, but a form of self-expression that anyone can master with patience
          and practice. Her teaching philosophy is centered on fostering creativity, confidence, and personal growth in each
          student. She ensures that her classes are interactive, fun, and tailored to meet the needs of both beginners and advanced learners.
        </p>

        <h4 id="instructor-skills-heading">Skills & Expertise</h4>
        <ul id="instructor-skills">
          <li>Paintings</li>
          <li>Watercolor Techniques</li>
          <li>Landscapes</li>
          <li>Paper Craft</li>
          <li>Digital Art and Graphic Design</li>
          <li>Creative Expression</li>
          
        </ul>
        <Link to='/InstructorArtPage'>
        <h3><b>Explore Instructor's Creations</b></h3></Link>
      </div>
    </div>
  );
};

export default Instructor;
