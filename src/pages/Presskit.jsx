import React, { useState, useEffect } from "react";
import "./Presskit.css";



const PressKit = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating a delay to show the loading animation
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // You can adjust the delay here
    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) {
    return <div className="loading-animation">Loading...</div>; // Loading state
  }

  return (
    <div className="presskit-container">
      <h1 className="presskit-title">Press Kit</h1>

      {/* Brand Assets Section */}
      <section className="presskit-section">
        <h2 className="section-title">Brand Assets</h2>
        <p className="section-description">
          Download our brand assets such as logos, fonts, and official imagery.
          These can be used for media coverage and press mentions.
        </p>
        <div  className="btn-div">
          <a href="/path/to/brand-assets.zip" download className="download-btn">
            Download Brand Assets
          </a>
        </div>
       
      </section>

      {/* Press Releases Section */}
      <section className="presskit-section">
        <h2 className="section-title">Press Releases</h2>
        <p className="section-description">
          Stay updated with our latest announcements and news. Click below to
          read or download our press releases.
        </p>
        <ul className="presskit-list">
          <li className="presskit-list-item">
            <a
              href="/path/to/press-release-1.pdf"
              target="_blank"
              className="presskit-link"
            >
              Press Release - Launch Announcement
            </a>
          </li>
          <li className="presskit-list-item">
            <a
              href="/path/to/press-release-2.pdf"
              target="_blank"
              className="presskit-link"
            >
              Press Release - New Features
            </a>
          </li>
        </ul>
      </section>

      {/* Company Milestones Section */}
      <section className="presskit-section milestones">
        <h2 className="section-title">Company Milestones</h2>
        <div className="milestones-list">
          <div className="milestone-item">
            <span className="milestone-year">2015</span>
            <p className="milestone-description">
              Company founded and launched the first product.
            </p>
          </div>
          <div className="milestone-item">
            <span className="milestone-year">2018</span>
            <p className="milestone-description">
              Reached 1 million users across 100+ countries.
            </p>
          </div>
          <div className="milestone-item">
            <span className="milestone-year">2020</span>
            <p className="milestone-description">
              Received the prestigious XYZ Innovation Award.
            </p>
          </div>
        </div>
      </section>

      {/* Key Statistics Section */}
      <section className="presskit-section key-statistics">
        <h2 className="section-title">Key Statistics</h2>
        <div className="stats-grid">
          <div className="stat-item">
            <span className="stat-number">5M+</span>
            <p className="stat-description">Users worldwide</p>
          </div>
          <div className="stat-item">
            <span className="stat-number">100+</span>
            <p className="stat-description">Countries served</p>
          </div>
          <div className="stat-item">
            <span className="stat-number">50+</span>
            <p className="stat-description">Industry awards</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="presskit-section testimonials">
        <h2 className="section-title">What People Are Saying</h2>
        <div className="testimonials-grid">
          <blockquote className="testimonial">
            <p>"This is the most innovative product we've seen in years!"</p>
            <footer>- Tech Reviewer, XYZ Media</footer>
          </blockquote>
          <blockquote className="testimonial">
            <p>"An industry game-changer, with outstanding leadership!"</p>
            <footer>- Industry Leader</footer>
          </blockquote>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="presskit-section faq">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <ul className="faq-list">
          <li className="faq-item">
            <h4 className="faq-question">
              What does your company specialize in?
            </h4>
            <p className="faq-answer">
              We specialize in innovative tech solutions that transform
              industries.
            </p>
          </li>
          <li className="faq-item">
            <h4 className="faq-question">
              How can I get in touch for media inquiries?
            </h4>
            <p className="faq-answer">
              You can reach our media team at{" "}
              <a href="mailto:press@yourcompany.com">press@Megablog.com</a>.
            </p>
          </li>
        </ul>
      </section>

      {/* Social Media Links Section */}
      <section className="presskit-section social-media">
        <h2 className="section-title">Follow Us on Social Media</h2>
        <div className="social-links">
          <a
            href="https://twitter.com"
            className="social-link twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://facebook.com"
            className="social-link facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://linkedin.com"
            className="social-link linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
};



export default PressKit;



