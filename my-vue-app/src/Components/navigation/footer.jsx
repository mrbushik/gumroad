import React from "react";
import "../styles/footer.scss";
const Footer = () => {
  return (
    <footer className="section bg-black wf-section">
      <div className="container__footer container__footer-wrapper">
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
              <input className="form-input footer-newsletter w-input" />
              <button className="form-submit-btn arrow w-button">→</button>
            </form>
          </div>
        </div>
        <div className="footer__container-right"></div>
      </div>
    </footer>
  );
};

export default Footer;
