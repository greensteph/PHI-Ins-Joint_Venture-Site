import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import logo from '../../src/images/tygrovetechlogo.png';

const Header = ({ children, siteTitle }) => (
  <header className="usa-header usa-header--extended" role="banner">
    <div className="usa-navbar">
      <div className="usa-logo" id="extended-logo">
        <em className="usa-logo__text">
          <Link to="/" title="Home" aria-label="Home">
            <img
              className="usa-media-block tablet:grid-col"
              src={logo}
              alt="TyGrove Technologies logo"
            />
          </Link>
        </em>
      </div>
      <button className="usa-menu-btn">Menu</button>
    </div>
    {children}
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
