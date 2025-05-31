import './Classes.css'; 
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import im1 from '../../assets/classes/p1.jpg';
import im2 from '../../assets/classes/p2.jpeg';
import im3 from '../../assets/classes/p3.jpg';
import teacher from '../../assets/classes/t.jpeg';
import gall from '../../assets/classes/gall.jpeg';
import gall2 from '../../assets/classes/gall2.jpeg';
import gall3 from '../../assets/classes/gall3.jpeg';
import gall4 from '../../assets/classes/g4.png';
import gall5 from '../../assets/classes/g5.png';
import gall6 from '../../assets/classes/g6.png';
import gall7 from '../../assets/classes/g7.png';
import gall8 from '../../assets/classes/g8.png';
import gall9 from '../../assets/classes/g9.png';
import gall10 from '../../assets/classes/g10.png';
import gall11 from '../../assets/classes/g11.png';
import gall12 from '../../assets/classes/g12.png';
import c1 from '../../assets/classes/c1.png';
import c3 from '../../assets/classes/c2.png';
import c2 from '../../assets/classes/c3.png';
import { Link } from 'react-router-dom';



const Classes = () => {
  const location = useLocation();
  useEffect(() => {
    // Check if the URL has a hash and scroll to that section
    if (location.hash) {
      const sectionId = location.hash.replace('#', ''); // Extract section ID from the hash
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location]);
  return (
    <div id="classesPage" className="container py-4">
      {/* 1. Class Categories and Descriptions */}
      <sectionclas id="classCategories" className="mt-4">
        <h2>Explore Our Art Classes</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div id="paintingCard" className="card h-100">
              <img src={im1} className="card-img-top" alt="Painting Classes" />
              <div className="card-body">
                <h4 className="card-title">Painting Classes</h4>
                <p className="card-text">Explore watercolor, oil, acrylic, and gouache techniques for all levels.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div id="drawingCard" className="card h-100">
              <img src={im2} className="card-img-top" alt="Drawing and Sketching" />
              <div className="card-body">
                <h4 className="card-title">Drawing and Sketching</h4>
                <p className="card-text">Learn basics to advanced skills in pencil, charcoal, ink, and pastels.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div id="digitalArtCard" className="card h-100">
              <img src={im3} className="card-img-top" alt="Digital Art" />
              <div className="card-body">
                <h4 className="card-title">Clay work</h4>
                <p className="card-text">Learn to shape, sculpt, and glaze clay to create beautiful pottery and decorative items.</p>
              </div>
            </div>
          </div>
        </div>
      </sectionclas>

      {/* 2. Levels of Instruction */}
      <sectionclas id="instructionLevels" className="mt-4">
        <h2>Levels of Instruction</h2>
        <div className="card p-3">
          <ul>
            <li><strong>Beginner Classes:</strong> For those new to art, focusing on foundational skills and techniques.</li>
            <li><strong>Intermediate Classes:</strong> For students with some experience, building on existing skills.</li>
            <li><strong>Advanced Classes:</strong> Masterclasses for honing skills and exploring complex techniques.</li>
          </ul>
        </div>
      </sectionclas>

      {/* 3. Schedule and Timings */}
      <sectionclas id="classSchedule" className="mt-4">
        <h2>Class Schedule and Timings</h2>
        <div className="card p-3">
          <p>Find the perfect class that fits your schedule:</p>
          <ul>
            <li><strong>Weekly Schedule:</strong> Classes are held on Saturday and Sunday at various times.</li>
            <li><strong>Weekend Workshops:</strong> Intensive weekend sessions for focused learning.</li>
            <li><strong>Doubt </strong>Clear Instantly through Whatsapp</li>
          </ul>
        </div>
      </sectionclas>

      {/* 4. Instructor Profiles */}
      <sectionclas id="instructorProfiles" className="mt-4">
        <h2>Meet Our Instructors</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div id="instructor1Card" className="card h-100 text-center">
              <img src={teacher} className="card-img-top" alt="Instructor 1" />
              <div className="card-body">
                <h4>Ms. Ritima Chatterjee</h4>
                <p>Expert in Painting, Sculpture and Paper Craft with 13+ years of experience.</p>
                <p>Scholar in Madhubani & Advanced Arts.</p>
                <Link to="/InstructorArtPage" style={{ textDecoration: "none" }}>
    <p><strong>Explore Instructor's Creations</strong></p>
</Link>

              </div>
            </div>
          </div>
        </div>
      </sectionclas>

      {/* 5. Class Formats */}
      <sectionclas id="classFormats" className="mt-4">
        <h2>Class Formats</h2>
        <div className="card p-3">
          <ul>
            <li><strong>Offline Classes:</strong> Conducted in the class only.</li>
            <li><strong>Online Classes:</strong> Live classes through Zoom Meeting.</li>
          </ul>
        </div>
      </sectionclas>

      {/* 6. Materials Needed */}
      <sectionclas id="materialsNeeded" className="mt-4">
        <h2>Materials Needed</h2>
        <div className="card p-3">
          <p>Students are required to bring basic art supplies like brushes, paints etc, which is mentioned in the provided material list provided by teacher</p>
        </div>
      </sectionclas>

     { /* 7. Student Work Gallery */}
      <sectionclas id="studentGallery" className="mt-4">
        <h2>Student Work Gallery</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <img src={gall3} alt="Student Work 1" className="img-fluid rounded" />
          </div>
          <div className="col-md-4 mb-4">
            <img src={gall} alt="Student Work 2" className="img-fluid rounded" />
          </div>
          <div className="col-md-4 mb-4">
            <img src={gall2} alt="Student Work 3" className="img-fluid rounded" />
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 mb-4">
            <img src={gall4} alt="Student Work 1" className="img-fluid rounded" />
          </div>
          <div className="col-md-4 mb-4">
            <img src={gall5} alt="Student Work 2" className="img-fluid rounded" />
          </div>
          <div className="col-md-4 mb-4">
            <img src={gall6} alt="Student Work 3" className="img-fluid rounded" />
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 mb-4">
            <img src={gall7} alt="Student Work 1" className="img-fluid rounded" />
          </div>
          <div className="col-md-4 mb-4">
            <img src={gall8} alt="Student Work 2" className="img-fluid rounded" />
          </div>
          <div className="col-md-4 mb-4">
            <img src={gall9} alt="Student Work 3" className="img-fluid rounded" />
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 mb-4">
            <img src={gall10} alt="Student Work 1" className="img-fluid rounded" />
          </div>
          <div className="col-md-4 mb-4">
            <img src={gall11} alt="Student Work 2" className="img-fluid rounded" />
          </div>
          <div className="col-md-4 mb-4">
            <img src={gall12} alt="Student Work 3" className="img-fluid rounded" />
          </div>
        </div>
      </sectionclas>

    {/* 8. Certificate Ceremony*/}
    <sectionclas id="certificateCeremony" className="mt-4">
        <h2>Certificate Ceremony</h2>
        <h4>"At Tara Art Class, we believe in celebrating our students' hard work and dedication.
    Upon completion of their courses, students receive certificates of achievement.
    Here are some proud moments from our recent ceremony, showcasing students with their certificates."</h4>
        <div className="row">
          <div className="col-md-4 mb-4">
            <img src={c1} alt="Student Work 1" className="img-fluid rounded" />
          </div>
          <div className="col-md-4 mb-4">
            <img src={c3} alt="Student Work 2" className="img-fluid rounded" />
          </div>
          <div className="col-md-4 mb-4">
            <img src={c2} alt="Student Work 3" className="img-fluid rounded" />
          </div>
        </div>

        <h4>
    We are incredibly proud of each of our students and are excited to support them in their future artistic endeavors.
  </h4>
  <blockquote className="certification-quote">
        "This achievement is just the beginning of a journey towards creativity and growth."
        <footer className="certification-quote-footer">– Ms. Ritima Chatterjee</footer>
      </blockquote>
        </sectionclas>


      {/* 9. Special Programs */}
      <sectionclas id="specialPrograms" className="mt-4">
        <h2>Special Programs</h2>
        <div className="card p-3">
          <ul>
            <li><strong>Seasonal Camps:</strong> Summer and winter art camps for all ages.</li>
            <li><strong>Portfolio Preparation:</strong> Classes aimed at students applying to art schools.</li>
          </ul>
        </div>
      </sectionclas>

      {/* 10. Enrollment Details */}
      <sectionclas id="enrollmentDetails" className="mt-4">
        <h2>Enrollment Details</h2>
        <div className="card p-3">
          <p>To enroll, please fill out the online form or visit our studio. Fees are non-refundable. Contact us for more information on class availability and schedules.</p>
        </div>
      </sectionclas>

      {/* 11. Testimonials */}
      <sectionclas id="testimonials" className="mt-4">
        <h2>What Our Students Say</h2>
        <div className="card p-3">
          <blockquote className="blockquote">
            <p>"The painting class helped me discover my artistic potential. The instructors are fantastic!"</p>
            <footer className="blockquote-footer">Sumit, Beginner Student</footer>
          </blockquote>
          <blockquote className="blockquote">
            <p>"I loved the all art sessions. The skills I learned are invaluable."</p>
            <footer className="blockquote-footer">Kajal, Intermediate Student</footer>
          </blockquote>
        </div>
      </sectionclas>
    </div>
  );
};

export default Classes;
