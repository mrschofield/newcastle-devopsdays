import React from "react";
import { FaPlus, FaTag } from "react-icons/lib/fa";

import Nib from "../assets/images/nib.png";

const Sponsors = () => (
  <section id="sponsors">
    <h1>Sponsors</h1>

    <div className="row">
      <div className="twelve columns collapsed">
        <h3>Platinum Sponsors</h3>

        <div id="portfolio-wrapper" className="bgrid-quaters s-bgrid-quarters cf">
          <div className="columns portfolio-item">
            <div className="item-wrap platinum">
              <a href="https://www.nib.com.au/" title="">
                <img alt="" src={Nib} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div className="row">
      <div className="twelve columns collapsed">
        <h3>Gold Sponsors</h3>
      </div>
    </div>

    <div className="row">
      <div className="twelve columns collapsed">
        <h3>Silver Sponsors</h3>
      </div>
    </div>

    <div className="row">
      <div className="twelve columns collapsed">
        <h3>Bronze Sponsors</h3>
      </div>
    </div>
  </section>
);

export default Sponsors;
