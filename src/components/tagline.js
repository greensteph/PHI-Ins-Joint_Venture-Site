import React from 'react';

/*
  This tagline will appear in your homepage
*/

const Tagline = () => (
  <section className="grid-container usa-section usa-prose sg-hero-image-credit">
    <div className="grid-row grid-gap">
      <div className="tablet:grid-col-4">
        <h2 className="font-heading-xl margin-top-0 tablet:margin-bottom-0">
        Vision Counts. Experience Matters.
        </h2>
      </div>
      <div className="tablet:grid-col-8 usa-prose">
        <p>
          Tygrove Technologies is a joint venture that brings together nearly 30 years of reputable and trusted engineering solutions, information technology support, business transformation and program management success.
        </p>
        <p>
        Operating at the nexus of technology and communication, our firms bring considerable and complementary experience in the change management, strategic communication, and digital transformation solutions that accelerate technology adoption and innovation.
        </p>
      </div>
    </div>
  </section>
);

export default Tagline;
