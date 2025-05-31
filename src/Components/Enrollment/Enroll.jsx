import React from 'react';
import './Enroll.css'
import ipadImage from '../../assets/Enroll_img.jpg'
import bullentin from '../../assets/bulletin/palette.gif'
import s_bullentin from '../../assets/bulletin/pencil.gif'
import { Link } from 'react-router-dom';

const Enroll = () => {
  return (
    
    <div className="container">
    <hr className="featurette-divider" />
      <div className="row align-items-center">
        <div className="col-lg-6">
          <img src={ipadImage} alt="iPad" className="img-fluid ipad-image" />
        </div>
        <div className="col-lg-5 offset-lg-1 " id='enroll-margin'>
          <h2>Enroll &amp; Explore</h2>
          <p className="lead">
            Enrolling your child in our Art classes is simple and Straight forward Process.We're Excited to Welcome your Family into our vibrant Learning Community
          </p>
          <div className="space" style={{ marginTop: '50px' }}></div>
          <div className="icon-box icon-box-left">
            <div className="icon-box-icon">
              <span className="ti-layout"></span>
            </div>
            <div className="icon-box-title">
              <h6><img  id='bullentin' src={bullentin} /> Step 1</h6>
            </div>
            <div className="icon-box-content">
              <p className='fw-bold'>
                Vist Our <Link to="/formenroll" className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Enrollment Page</Link>
              </p>
            </div>
          </div>
          <div className="icon-box icon-box-left">
            <div className="icon-box-icon">
              <span className="ti-cup"></span>
            </div>
            <div className="icon-box-title">
              <h6><img  id='bullentin' src={s_bullentin} />Step 2</h6>
            </div>
            <div className="icon-box-content">
              <p className='fw-bold'>
               Fill the Enrollment Form 
              </p>
            </div>
          </div>
          <div className="icon-box icon-box-left">
            <div className="icon-box-icon">
              <span className="ti-harddrives"></span>
            </div>
            <div className="icon-box-title">
              <h6><img  id='bullentin' src={bullentin} />Step 3</h6>
            </div>
            <div className="icon-box-content">
              <p className='fw-bold'>
                Book Your Slot and its Done!
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr className="featurette-divider" />
    </div>
  );
};

export default Enroll;
