import React from 'react';
import './FaqPage.css';

const FaqPage = () => {
  return (
    <div id="faqq-container">
      <h1 id="faqq-heading">Frequently Asked Questions</h1>

      <div id="faqq-section">
        <div className="faqq-item">
          <h3 id="faqq1" className="faqq-question">What art classes do you offer?</h3>
          <p className="faqq-answer">
            We offer a wide range of art classes including painting, drawing, sculpture, and digital art, catering to all ages and skill levels.
          </p>
        </div>

        <div className="faqq-item">
          <h3 id="faqq2" className="faqq-question">How do I enroll in a class?</h3>
          <p className="faqq-answer">
            You can enroll by visiting our Enroll page and submitting the registration form. It’s a simple and quick process.
          </p>
        </div>

        <div className="faqq-item">
          <h3 id="faqq3" className="faqq-question">Do you provide materials for the classes?</h3>
          <p className="faqq-answer">
            Yes, for in-person classes we provide basic materials. For online classes, students need to arrange materials based on the class requirements.
          </p>
        </div>

        <div className="faqq-item">
          <h3 id="faqq4" className="faqq-question">What is the refund policy?</h3>
          <p className="faqq-answer">
            A full refund is available if you cancel 48 hours before the class starts. After that, we don’t offer refunds.
          </p>
        </div>

        <div className="faqq-item">
          <h3 id="faqq5" className="faqq-question">Are online classes available?</h3>
          <p className="faqq-answer">
            Yes, we offer online classes that are interactive and designed to provide an engaging learning experience from the comfort of your home.
          </p>
        </div>

        <div className="faqq-item">
          <h3 id="faqq6" className="faqq-question">What is the duration of each class?</h3>
          <p className="faqq-answer">
            The duration of each class varies. Most classes are between 1-2 hours long. Detailed timings are available on the class schedules.
          </p>
        </div>

        <div className="faqq-item">
          <h3 id="faqq7" className="faqq-question">Do you offer trial classes?</h3>
          <p className="faqq-answer">
            Yes, we offer free trial classes for first-time students to explore our teaching methods and environment.
          </p>
        </div>

        <div className="faqq-item">
          <h3 id="faqq8" className="faqq-question">Is there any discount for group enrollments?</h3>
          <p className="faqq-answer">
            We do offer special discounts for group enrollments and referrals. Contact us for more details on offers and discounts.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
