import React from 'react';
import { motion } from 'framer-motion';
import './Curriculam.css';
import small_std from '../../assets/curriculam/curriculam1.jpg'
import mod_std from '../../assets/curriculam/curriculam2.jpg'
import senior from '../../assets/curriculam/curriculam4.jpg'
import senior_exp from '../../assets/curriculam/curriculam3.jpg'


const courseVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

const Curriculam = () => {
  return (
    <main id='main_margin'>
      <hr className="featurette-divider" />
      <h1 id="curriculam-heading">
        <span id="brush-overlay">
          {/* <img src={brush_shade} alt="Brush Shade" id="brush-shade" /> */}
          Curriculam
        </span>
      </h1>

      {/* Junior Beginner Section */}
      <motion.div
        className="row featurette"
        initial="hidden"
        whileInView="visible"
        variants={courseVariants}
        transition={{ duration: 0.5 }}
      >
        <div className="col-md-7">
          <h2 id="course-title">Junior Beginner (4-8 Years) <span id="course-start">Course Starts With</span></h2>
          <p className="lead">
            <ul>
              <li>Understanding of Lines and Patterns</li>
              <li>Understanding of Shapes and Forms</li>
              <li>Introduction to Abstract</li>
              <li>Curved Line and Pattern</li>
            </ul>
            <h5>And Gradually Move to</h5>
            <ul>
              <li>Colour Study, Shading and Blending</li>
              <li>Handling of Point, Brushes and Colours</li>
              <li>Study of Curve Line Objects</li>
              <li>Motor Skill Development Activity using Art</li>
            </ul>
            <h5><span id="course-duration">Course Duration:1 Year </span><span id="sessions-number">No.Of Sessions: 96</span></h5>
          </p>
        </div>
        <div className="col-md-5">
          <img
            src={small_std}
            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            alt="Featurette"
            width="500"
            height="500"
          />
        </div>
      </motion.div>

      <hr className="featurette-divider" />

      {/* Junior Learner Section */}
      <motion.div
        className="row featurette"
        initial="hidden"
        whileInView="visible"
        variants={courseVariants}
        transition={{ duration: 0.5 }}
      >
        <div className="col-md-7 order-md-2">
          <h2 id="course-title">Junior Learner (9-12 Years)<span id="course-title">Course Starts With</span></h2>
          <p className="lead">
            <h5>The Children are Ready to Learn these Things</h5>
            <ul>
              <li>Basics of Pencil Sketching and Shading</li>
              <li>Basics of Live Object Drawing</li>
              <li>Basics of Watercolours and Poster Colours</li>
              <li>Still Life Drawing</li>
              <li>Composite Drawing</li>
              <li>Styles of Various Art Masters - Art History</li>
              <li>Basics of Glass Paints, Colour Pencils, Soft Pastels</li>
              <li>Traditional Art, Mahbubani Art, etc.</li>
            </ul>
            <h5><span id="course-duration">Course Duration: 1 Year  </span><span id="sessions-number">No.Of Sessions: 96</span></h5>
          </p>
        </div>
        <div className="col-md-5 order-md-1">
          <img
            src={mod_std}
            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            alt="Featurette"
            width="500"
            height="500"
          />
        </div>
      </motion.div>

      <hr className="featurette-divider" />

      {/* Senior Seeker Section */}
      <motion.div
        className="row featurette"
        initial="hidden"
        whileInView="visible"
        variants={courseVariants}
        transition={{ duration: 0.5 }}
      >
        <div className="col-md-7">
          <h2 id="course-title">Senior Seeker (12-15 Years) <span id="course-start">Course Starts With</span></h2>
          <p className="lead">
            <h5>The Children are Ready to Learn these Things</h5>
            <ul>
              <li>Basic Knowledge of Painting</li>
              <li>Introduction of Mixed Media Arts</li>
              <li>Introduction of Different Types of Clay Arts</li>
              <li>Traditional Art - Basic Worli, Mithila, Gond Arts</li>
              <li>Advanced Glass Painting, Acrylics, Colour Pencils</li>
              <li>Fabric Painting and Lippan Art</li>
            </ul>
            <h5><span id="course-duration">Course Duration: 1 Year  </span><span id="sessions-number">No.Of Sessions: 96</span></h5>
          </p>
        </div>
        <div className="col-md-5 order-md-1">
          <img
            src={senior_exp}
            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            alt="Featurette"
            width="500"
            height="500"
          />
        </div>
      </motion.div>

      <hr className="featurette-divider" />

      {/* Senior Expressor Section */}
      <motion.div
        className="row featurette"
        initial="hidden"
        whileInView="visible"
        variants={courseVariants}
        transition={{ duration: 0.5 }}
      >
        <div className="col-md-7 order-md-2">
          <h2 id="course-title">Senior Expressors (16+ Years) <span id="course-start">Course Starts With</span></h2>
          <p className="lead">
            <h5>Students have the Necessary Knowledge of Art</h5>
            <ul>
              <li>Different Types of Canvas Painting</li>
              <li>Pencil Shading with Help of Shading Tools</li>
              <li>Grid Knowledge</li>
              <li>Soft Pastel Painting</li>
              <li>Knife Painting</li>
              <li>Fabric Painting</li>
              <li>Clay Work with Hand</li>
              <li>Origami Arts and Various Types of Craft Work</li>
            </ul>
            <h5><span id="course-duration">Course Duration: 1 Year </span><span id="sessions-number">No.Of Sessions: 96</span></h5>
          </p>
        </div>
        <div className="col-md-5 order-md-1">
          <img
            src={senior}
            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            alt="Featurette"
            width="500"
            height="500"
          />
        </div>
      </motion.div>
      <hr className="featurette-divider" />
    </main>
  );
};

export default Curriculam;
