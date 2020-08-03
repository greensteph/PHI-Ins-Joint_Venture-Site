import React from 'react';
import logo from '../../node_modules/uswds/dist/img/logo-img.png';

const Footer = () => (
  <footer className="usa-footer site-footer" role="contentinfo">
    <div className="footer-section-bottom bg-base-lighter">
      <div className="grid-container">
        <div className="grid-row padding-3">
          <div className="tablet:grid-col">
            <div className="logo-links">
              <a className="footer-logo media_link" href="https://18f.gsa.gov">
                <img src={logo} width="50" alt="Agency logo" />
              </a>
            </div>
          </div>
          <div className="tablet:grid-col"></div>
          <div className="tablet:grid-col">
            <ul className="add-list-reset">
              <li><a href="/about"><span>About Us</span></a></li>
              <li><a href="/contact-us"><span>Contact Us</span></a></li>
            </ul>
          </div>
          <div className="tablet:grid-col">
          <ul className="add-list-reset">
              <li><a href="/gsa-stars-III"><span>GSA STARS III</span></a></li>
              <li><a href="/how-to-order"><span>How To Order</span></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
