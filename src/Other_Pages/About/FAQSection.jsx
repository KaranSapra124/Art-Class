import React, { useState } from 'react';

const FAQSection = () => {
  const [activeItem, setActiveItem] = useState(null); // State to track the active (open) accordion item

  const handleMouseLeave = () => {
    setActiveItem(null); // Close the currently active item when the mouse leaves
  };

  const handleToggle = (item) => {
    setActiveItem(activeItem === item ? null : item); // Toggle the clicked item (open/close)
  };

  return (
    <div id="faq-section" className="container my-5">
      <h2 className="display-5 fw-normal text-center">Frequently Asked Questions</h2>
      <div className="accordion" id="faqAccordion">
        {/* Question 1 */}
        <div id="faq-item-1" className="accordion-item my-3" onMouseLeave={handleMouseLeave}>
          <h2 id="faq-header-1" className="accordion-header">
            <button
              id="faq-button-1"
              className={`accordion-button ${activeItem === 1 ? '' : 'collapsed'}`}
              type="button"
              onClick={() => handleToggle(1)}
              aria-expanded={activeItem === 1}
              aria-controls="collapseOne"
            >
              What materials do I need for the painting class?
            </button>
          </h2>
          <div
            id="collapseOne"
            className={`accordion-collapse collapse ${activeItem === 1 ? 'show' : ''}`}
            aria-labelledby="faq-header-1"
            data-bs-parent="#faqAccordion"
          >
            <div id="faq-body-1" className="accordion-body">
              You'll need acrylic paints, brushes, and canvas. We provide all other basic supplies.
            </div>
          </div>
        </div>

        {/* Question 2 */}
        <div id="faq-item-2" className="accordion-item my-3" onMouseLeave={handleMouseLeave}>
          <h2 id="faq-header-2" className="accordion-header">
            <button
              id="faq-button-2"
              className={`accordion-button ${activeItem === 2 ? '' : 'collapsed'}`}
              type="button"
              onClick={() => handleToggle(2)}
              aria-expanded={activeItem === 2}
              aria-controls="collapseTwo"
            >
              Are the classes suitable for beginners?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className={`accordion-collapse collapse ${activeItem === 2 ? 'show' : ''}`}
            aria-labelledby="faq-header-2"
            data-bs-parent="#faqAccordion"
          >
            <div id="faq-body-2" className="accordion-body">
              Yes, we offer classes for all skill levels, including beginners. Our instructors provide individual attention to ensure everyone progresses at their own pace.
            </div>
          </div>
        </div>

        {/* Question 3 */}
        <div id="faq-item-3" className="accordion-item my-3" onMouseLeave={handleMouseLeave}>
          <h2 id="faq-header-3" className="accordion-header">
            <button
              id="faq-button-3"
              className={`accordion-button ${activeItem === 3 ? '' : 'collapsed'}`}
              type="button"
              onClick={() => handleToggle(3)}
              aria-expanded={activeItem === 3}
              aria-controls="collapseThree"
            >
              How can I enroll in a class?
            </button>
          </h2>
          <div
            id="collapseThree"
            className={`accordion-collapse collapse ${activeItem === 3 ? 'show' : ''}`}
            aria-labelledby="faq-header-3"
            data-bs-parent="#faqAccordion"
          >
            <div id="faq-body-3" className="accordion-body">
              You can enroll by clicking on the "Enroll Now" button on the homepage, which will take you to our online registration form. You can also contact us for more details.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
