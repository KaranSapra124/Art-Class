import React from 'react';
import './Workshop.css'; 
import { Link } from 'react-router-dom';
// import drawing from '../../assets/work_shop/drawing.gif';
import painting from '../../assets/work_shop/painting.gif';
import Landscape from '../../assets/work_shop/art2.gif';
import ceremic from '../../assets/work_shop/ceramics.gif';
import glass from '../../assets/work_shop/glass_paint.gif';
import waste from '../../assets/work_shop/origami.gif';
import paper from '../../assets/work_shop/wind-mill.gif';
import clay from '../../assets/work_shop/crafting.gif';
import textile from '../../assets/work_shop/creative.gif';
import mix from '../../assets/work_shop/media-mix.gif';
import sculpture from '../../assets/work_shop/sculpture.gif';
import mosaic from '../../assets/work_shop/mosaic.gif';
import abstract from '../../assets/work_shop/abstract.gif';
import quilling from '../../assets/work_shop/quilling.gif';

const Workshop = () => {
  return (
    <div className="container px-4 py-5" id="featured-3">
      <h2 className="pb-2 border-bottom">About Our Artistic Classes</h2>
      <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
        <div className="feature col">
          <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
            <img src={painting} alt="Painting" className="feature-icon-img" />
          </div>
          <h3 className="fs-2 text-body-emphasis">Paintings</h3>
          <p>Capture the essence of your subjects in our portrait classes, focusing on realistic and expressive techniques. Develop your skills in capturing emotions and details to create stunning, lifelike portraits.</p>
          <Link to="/painting" className="icon-link">
            Explore Paintings
            <svg className="bi"><use xlinkHref="#chevron-right"></use></svg>
          </Link>
        </div>

        <div className="feature col">
          <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
            <img src={Landscape} alt="Landscape" className="feature-icon-img" />
          </div>
          <h3 className="fs-2 text-body-emphasis">Landscapes</h3>
          <p>Immerse yourself in the beauty of nature with our landscape painting classes. Learn to translate outdoor scenes onto canvas, mastering techniques for capturing light, color, and atmosphere.</p>
          <Link to="/landscapes" className="icon-link">
            Explore Landscapes
            <svg className="bi"><use xlinkHref="#chevron-right"></use></svg>
          </Link>
        </div>

        {/* <div className="feature col">
          <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
            <img src={ceremic} alt="Ceramic Work" className="feature-icon-img" />
          </div>
          <h3 className="fs-2 text-body-emphasis">Ceramic Work</h3>
          <p>Explore the world of ceramics with our hands-on classes, where you'll create unique, functional pieces from clay. From shaping and glazing to firing, learn the entire process of ceramic artistry.</p>
          <Link to="/ceremic" className="icon-link">
            Explore Ceramic Work
            <svg className="bi"><use xlinkHref="#chevron-right"></use></svg>
          </Link>
        </div> */}

        <div className="feature col">
          <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
            <img src={glass} alt="Glass Painting" className="feature-icon-img" />
          </div>
          <h3 className="fs-2 text-body-emphasis">Glass Painting</h3>
          <p>Transform ordinary glass into beautiful works of art with our glass painting classes. Discover techniques for adding color and texture to glass surfaces, creating stunning stained glass and decorative pieces.</p>
          <Link to="/glass" className="icon-link">
            Explore Glass Painting
            <svg className="bi"><use xlinkHref="#chevron-right"></use></svg>
          </Link>
        </div>

        <div className="feature col">
          <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
            <img src={waste} alt="Best of Waste Material" className="feature-icon-img" />
          </div>
          <h3 className="fs-2 text-body-emphasis">Best of Waste Material</h3>
          <p>Turn trash into treasure with our best of waste material classes. Learn innovative techniques to repurpose and create art from recycled materials, combining sustainability with creativity.</p>
          <Link to="/waste" className="icon-link">
            Explore Waste Work
            <svg className="bi"><use xlinkHref="#chevron-right"></use></svg>
          </Link>
        </div>

        <div className="feature col">
          <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
            <img src={paper} alt="Paper Craft" className="feature-icon-img" />
          </div>
          <h3 className="fs-2 text-body-emphasis">Paper Craft</h3>
          <p>Elevate your creativity with our paper craft classes, where you'll explore a variety of techniques including origami, quilling, and card making. Create beautiful and intricate designs from simple paper.</p>
          <Link to="/paper_craft" className="icon-link">
            Explore Paper Craft
            <svg className="bi"><use xlinkHref="#chevron-right"></use></svg>
          </Link>
        </div>

        <div className="feature col">
          <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
            <img src={clay} alt="Clay Work" className="feature-icon-img" />
          </div>
          <h3 className="fs-2 text-body-emphasis">Clay Work</h3>
          <p>Dive into the tactile world of clay work with our classes, where you'll learn to shape, sculpt, and glaze clay to create beautiful pottery and decorative items. Perfect for all skill levels.</p>
          <Link to="/clay" className="icon-link">
            Explore Clay Work
            <svg className="bi"><use xlinkHref="#chevron-right"></use></svg>
          </Link>
        </div>

        {/* <div className="feature col">
          <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
            <img src={textile} alt="Textile Art" className="feature-icon-img" />
          </div>
          <h3 className="fs-2 text-body-emphasis">Fabric paint</h3>
          <p>Fabric painting is a creative way to personalize textiles by applying paint directly onto fabric. It allows students to explore designs, patterns, and colors, transforming plain clothing or home décor into unique, hand-painted works of art. </p>
          <Link to="/textile" className="icon-link">
            Explore Textile Arts
            <svg className="bi"><use xlinkHref="#chevron-right"></use></svg>
          </Link>
        </div> */}

        <div className="feature col">
          <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
            <img src={mix} alt="Mixed Media" className="feature-icon-img" />
          </div>
          <h3 className="fs-2 text-body-emphasis">Mixed Media</h3>
          <p>Expand your artistic horizons with our mixed media classes, combining various materials and techniques to create dynamic and multi-dimensional artworks. Experiment with paint, collage, and more.</p>
          <Link to="/mixed_media" className="icon-link">
            Explore Mixed Media
            <svg className="bi"><use xlinkHref="#chevron-right"></use></svg>
          </Link>
        </div>

        <div className="feature col">
          <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
            <img src={quilling} alt="Sculpture" className="feature-icon-img" />
          </div>
          <h3 className="fs-2 text-body-emphasis">Quilling</h3>
          <p>Quilling art is a beautiful paper craft that involves rolling, shaping, and gluing strips of paper to create intricate designs. This delicate and vibrant art form allows for endless creativity.</p>
          <Link to="/sculpture" className="icon-link">
            Explore Quilling
            <svg className="bi"><use xlinkHref="#chevron-right"></use></svg>
          </Link>
        </div>
{/* 
        <div className="feature col">
          <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
            <img src={mosaic} alt="Mosaic Art" className="feature-icon-img" />
          </div>
          <h3 className="fs-2 text-body-emphasis">Mosaic Art</h3>
          <p>Delve into the world of mosaic art, combining small pieces of glass, stone, or tile to create detailed designs. We guide you through the process of planning, cutting, and assembling your mosaic artwork.</p>
          <Link to="/mosaic" className="icon-link">
            Explore Mosaic Arts
            <svg className="bi"><use xlinkHref="#chevron-right"></use></svg>
          </Link>
        </div> */}

        {/* <div className="feature col">
          <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
            <img src={abstract} alt="Abstract Art" className="feature-icon-img" />
          </div>
          <h3 className="fs-2 text-body-emphasis">Abstract Art</h3>
          <p>Explore the freedom of abstract art in our classes, where you'll experiment with colors, shapes, and textures to create expressive and unique compositions. Break away from traditional forms and discover the beauty of abstraction.</p>
          <Link to="/abstract" className="icon-link">
            Explore Abstract Arts
            <svg className="bi"><use xlinkHref="#chevron-right"></use></svg>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Workshop;
