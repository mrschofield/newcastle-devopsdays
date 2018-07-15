import React from "react";
import SocialLinks from "./SocialLinks";

const Banner = () => (
  <div className="row banner">
    <div className="banner-text">
      <h1 className="responsive-headline">DevOpsDays 2018</h1>
      <h3>
        October 24<super>th</super> and 25<super>th</super>, Newcastle NSW
      </h3>
      <hr />
      <SocialLinks />
    </div>
  </div>
);

export default Banner;
