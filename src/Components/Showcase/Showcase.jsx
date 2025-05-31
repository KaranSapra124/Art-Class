import React from 'react';
import './Showcase.css';
import p1 from '../../assets/Gallery_Showcase/p1.jpg';
import p2 from '../../assets/Gallery_Showcase/p2.jpg';
import p3 from '../../assets/Gallery_Showcase/p3.jpg';
import p4 from '../../assets/Gallery_Showcase/p4.jpeg';
import p5 from '../../assets/Gallery_Showcase/p5.jpg';
import p6 from '../../assets/Gallery_Showcase/p6.jpg';
import p7 from '../../assets/Gallery_Showcase/p7.jpg';
import p8 from '../../assets/Gallery_Showcase/p8.jpg';
import p9 from '../../assets/Gallery_Showcase/p9.jpg';
import { Link } from 'react-router-dom';

const Showcase = () => {
  return (
    <main>
      <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary">
        <div className="col-md-6 p-lg-5 mx-auto my-5">
          <h1 className="display-3 fw-bold">Show Case Art</h1>
          <h3 className="fw-normal text-muted mb-3">Art Makes the Life Beautiful</h3>
          <div className="d-flex gap-3 justify-content-center lead fw-normal">
          <Link to="/workshop">
            <a className="icon-link">
              Explore more
              <svg className="bi"><use xlinkHref="#chevron-right" /></svg>
            </a>
            </Link>
            <Link to="/Formenroll">
            <a className="icon-link">
              Enroll Now
              <svg className="bi"><use xlinkHref="#chevron-right" /></svg>
            </a>
            </Link>
          </div>
        </div>
        <div className="product-device shadow-sm d-none d-md-block"></div>
        <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
      </div>

      <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
        <div className="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div className="my-3 py-3">
            <h2 className="display-5">Paper Craft</h2>
            <p className="lead">Artistic creations using paper.</p>
          </div>
          <div className="bg-body-tertiary shadow-sm mx-auto" style={{ width: '80%', height: '300px', borderRadius: '21px 21px 0 0' }}>
            <img src={p1} alt="Paper Craft" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '21px 21px 0 0' }} />
          </div>
        </div>
        <div className="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div className="my-3 p-3">
            <h2 className="display-5">Clay</h2>
            <p className="lead">Sculpting art with clay.</p>
          </div>
          <div className="bg-dark shadow-sm mx-auto" style={{ width: '80%', height: '300px', borderRadius: '21px 21px 0 0' }}>
            <img src={p2} alt="Clay Work" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '21px 21px 0 0' }} />
          </div>
        </div>
        {/* dfdf */}
        <div className="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div className="my-3 p-3">
            <h2 className="display-5">Paintings</h2>
            <p className="lead">Expressing Creativity through Colours</p>
          </div>
          <div className="bg-dark shadow-sm mx-auto" style={{ width: '80%', height: '300px', borderRadius: '21px 21px 0 0' }}>
            <img src={p3} alt="Clay Work" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '21px 21px 0 0' }} />
          </div>
        </div>
        {/* dfdd */}
      </div>

      <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
        <div className="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div className="my-3 p-3">
            <h2 className="display-5">Landscapes</h2>
            <p className="lead">Scenic depictions of nature..</p>
          </div>
          <div className="bg-dark shadow-sm mx-auto" style={{ width: '80%', height: '300px', borderRadius: '21px 21px 0 0' }}>
            <img src={p4} alt="Ceramic Work" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '21px 21px 0 0' }} />
          </div>
        </div>
        <div className="text-bg-primary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div className="my-3 py-3">
            <h2 className="display-5">Glass Painting</h2>
            <p className="text-white">Vibrant designs on glass.</p>
          </div>
          <div className="bg-body-tertiary shadow-sm mx-auto" style={{ width: '80%', height: '300px', borderRadius: '21px 21px 0 0' }}>
            <img src={p5} alt="Glass Painting" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '21px 21px 0 0' }} />
          </div>
        </div>

        <div className="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div className="my-3 p-3">
            <h2 className="display-5">Quilling</h2>
            <p className="lead">Paper filigree rolled into shapes</p>
          </div>
          <div className="bg-dark shadow-sm mx-auto" style={{ width: '80%', height: '300px', borderRadius: '21px 21px 0 0' }}>
            <img src={p6} alt="Clay Work" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '21px 21px 0 0' }} />
          </div>
        </div>


      </div>

      <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
        <div className="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div className="my-3 p-3">
            <h2 className="display-5">Mixed Media</h2>
            <p className="lead">Combining diverse artistic techniques.</p>
          </div>
          <div className="bg-body shadow-sm mx-auto" style={{ width: '80%', height: '300px', borderRadius: '21px 21px 0 0' }}>
            <img src={p7} alt="Best of Waste" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '21px 21px 0 0' }} />
          </div>
        </div>
        <div className="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div className="my-3 p-3">
            <h2 className="display-5">Mosaic</h2>
            <p className="lead"> Images formed with small pieces</p>
          </div>
          <div className="bg-dark shadow-sm mx-auto" style={{ width: '80%', height: '300px', borderRadius: '21px 21px 0 0' }}>
            <img src={p8} alt="Clay Work" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '21px 21px 0 0' }} />
          </div>
        </div>
        <div className="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div className="my-3 py-3">
            <h2 className="display-5">Best of Waste</h2>
           
            <p className="lead"> Crafting from recycled materials.</p>
          </div>
          <div className="bg-body-tertiary shadow-sm mx-auto" style={{ width: '80%', height: '300px', borderRadius: '21px 21px 0 0' }}>
            <img src={p9} alt="Paper Craft" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '21px 21px 0 0' }} />
          </div>
        </div>
      </div>
      <hr className="featurette-divider" />
    </main>
  );
};

export default Showcase;
