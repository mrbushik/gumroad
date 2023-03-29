import React, { useState } from "react";
import "../styles/footer.scss";
const Footer = () => {
  const [email, setEmail] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        email: email,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  const handleChange = (target) => {
    setEmail(target.target.value);
  };

  return (
    <footer className="section bg-black wf-section">
      <div className="footer__main-wrapper">
        <div className="footer__container-left">
          <img
            className="site__logo"
            src="https://assets-global.website-files.com/6171b265e5c8aa59b42c3472/619c00d30ade22c25328ff43_gumroad-logo-white.svg"
          />
          <h4 className="text-xl footer__slogan" >
            Subscribe to get tips and tactics to grow the way you want.
          </h4>
          <div className="w-embed">
            <form
              className="inline-newsletter-grid"
              onSubmit={(e) => sendEmail(e)}
            >
              <input
                className="form-input footer-newsletter w-input"
                placeholder="Your email address"
                value={email}
                onChange={(e) => handleChange(e)}
              />
              <button
                className="form-submit-btn arrow w-button"
                onClick={(e) => sendEmail(e)}
              >
                →
              </button>
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
