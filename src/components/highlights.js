import React from 'react';
import circle from '../../node_modules/uswds/dist/img/circle-124.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard } from '@fortawesome/free-regular-svg-icons'

/*
  Use this section to highlight key elements of your site. Some sites will only have two while others may have six to eight. 
*/

const Highlights = () => (
  <section className="usa-graphic-list usa-section usa-section--dark">
    <div className="grid-container">
      <div className="usa-graphic-list__row grid-row grid-gap">
        <div className="usa-media-block tablet:grid-col">
          <img className="usa-media-block__img" src={circle} alt="Alt text" />
          <FontAwesomeIcon icon={faAddressCard} />
          <div className="usa-media-block__body">
            <h3 className="usa-graphic-list__heading">
              Our companies
            </h3>
            <p>
              Graphic headings can be used a few different ways, depending on
              what your landing page is for. Highlight your values, specific
              program areas, or results.
            </p>
          </div>
        </div>
        <div className="usa-media-block tablet:grid-col">
          <img className="usa-media-block__img" src={circle} alt="Alt text" />
          <div className="usa-media-block__body">
            <h3 className="usa-graphic-list__heading">
              Our Management Team
            </h3>
            <p>
              Keep body text to about 30 words. They can be shorter, but try to
              be somewhat balanced across all four. It creates a clean
              appearance with good spacing.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Highlights;
