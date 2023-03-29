import React from "react";
import "../styles/footer.scss";
const Footer = () => {
  return (
    <footer className="section bg-black wf-section">
      <div className="footer__main-wrapper">
        <div className="footer__container-left">
          <img
            className="site__logo"
            src="https://assets-global.website-files.com/6171b265e5c8aa59b42c3472/619c00d30ade22c25328ff43_gumroad-logo-white.svg"
          />
          <h4 className="text-xl">
            Subscribe to get tips and tactics to grow the way you want.
          </h4>
          <div className="w-embed">
            <form className="inline-newsletter-grid">
              <input
                className="form-input footer-newsletter w-input"
                placeholder="Your email address"
              />
              <button className="form-submit-btn arrow w-button">→</button>
            </form>
          </div>
        </div>
        <div className="footer__container-right">
          <div className="footer__links-container">
            <a href="/" className="footer__other-link">
              Help
            </a>
            <a href="/" className="footer__other-link">
              University
            </a>
            <a href="/" className="footer__other-link">
              Blog
            </a>
            <a href="/" className="footer__other-link">
              Terms of Service
            </a>
            <a href="/" className="footer__other-link">
              Privacy Policy
            </a>
          </div>
          <div className="footer__links-container">
            <a href="/" className="footer__other-link">
              Features
            </a>
            <a href="/" className="footer__other-link">
              Pricing
            </a>
            <a href="/" className="footer__other-link">
              Discover
            </a>
            <a href="/" className="footer__other-link">
              Jobs
            </a>
            <a href="/" className="footer__other-link">
              Roadmap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
