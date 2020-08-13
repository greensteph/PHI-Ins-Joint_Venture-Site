import React from 'react';
import circle from '../../node_modules/uswds/dist/img/circle-124.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faCommentAlt, faHandshake } from '@fortawesome/free-regular-svg-icons'

/*
  Use this section to highlight key elements of your site. Some sites will only have two while others may have six to eight. 
*/

const Highlights = () => (
  <section className="usa-graphic-list usa-section usa-section--dark">
    <div className="grid-container">
      <div className="usa-graphic-list__row grid-row grid-gap">
        <div className="usa-media-block tablet:grid-col">
          <FontAwesomeIcon icon={faHandshake} size="5x" className="usa-media-block__img" alt="" />
          <div className="usa-media-block__body">
            <h3 className="usa-graphic-list__heading">
              Our companies
            </h3>
            <p>
            Tygrove Technologies is powered by Potomac Haven Inc. and Inserso Corp., partnering to provide our customers with top talent in a range of functional areas.
            </p>
          </div>
        </div>
        <div className="usa-media-block tablet:grid-col">
          <FontAwesomeIcon icon={faAddressCard} size="5x" className="usa-media-block__img" alt="" />
          <div className="usa-media-block__body">
            <h3 className="usa-graphic-list__heading">
              Our Management Team
            </h3>
            <p>
            Our managing partners combine more than 40 years of public sector and industry practice. The teams they manage bring a deep understanding of the federal landscape to each engagement.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Highlights;
