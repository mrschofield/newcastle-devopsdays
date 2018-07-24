import React from "react";
import { FaPlus, FaTag } from "react-icons/lib/fa";

import Coffee from "../assets/images/portfolio/coffee.jpg";
import Console from "../assets/images/portfolio/console.jpg";
import Judah from "../assets/images/portfolio/judah.jpg";
import IntoTheLight from "../assets/images/portfolio/into-the-light.jpg";
import Farmerboy from "../assets/images/portfolio/farmerboy.jpg";
import Girl from "../assets/images/portfolio/girl.jpg";
import Origami from "../assets/images/portfolio/origami.jpg";
import Retrocam from "../assets/images/portfolio/retrocam.jpg";

const Sponsors = () => (
  <section id="sponsors">
    <h1>Sponsors</h1>

    <div className="row">
      <div className="twelve columns collapsed">
        <h3>Platinum Sponsors</h3>

        <div id="portfolio-wrapper" className="bgrid-quaters s-bgrid-quarters cf">
          <div className="columns portfolio-item">
            <div className="item-wrap platinum">
              <a href="#modal-01" title="">
                <img alt="" src={Coffee} />
              </a>
            </div>
          </div>

          <div className="columns portfolio-item">
            <div className="item-wrap platinum">
              <a href="#modal-02" title="">
                <img alt="" src={Console} />
              </a>
            </div>
          </div>

          <div className="columns portfolio-item">
            <div className="item-wrap platinum">
              <a href="#modal-02" title="">
                <img alt="" src={Console} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div className="row">
      <div className="columns">
        <h3>Gold Sponsors</h3>

        <div id="portfolio-wrapper" className="bgrid-quaters s-bgrid-quarters cf">
          <div className="columns portfolio-item">
            <div className="item-wrap gold">
              <a href="#modal-01" title="">
                <img alt="" src={Coffee} />
              </a>
            </div>
          </div>

          <div className="columns portfolio-item">
            <div className="item-wrap gold">
              <a href="#modal-02" title="">
                <img alt="" src={Console} />
              </a>
            </div>
          </div>

          <div className="columns portfolio-item">
            <div className="item-wrap gold">
              <a href="#modal-02" title="">
                <img alt="" src={Console} />
              </a>
            </div>
          </div>

          <div className="columns portfolio-item">
            <div className="item-wrap gold">
              <a href="#modal-02" title="">
                <img alt="" src={Console} />
              </a>
            </div>
          </div>

          <div className="columns portfolio-item">
            <div className="item-wrap gold">
              <a href="#modal-02" title="">
                <img alt="" src={Console} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="columns">
        <h3>Silver Sponsors</h3>

        <div id="portfolio-wrapper" className="bgrid-quaters s-bgrid-quarters cf">
          <div className="columns portfolio-item">
            <div className="item-wrap silver">
              <a href="#modal-01" title="">
                <img alt="" src={Coffee} />
              </a>
            </div>
          </div>

          <div className="columns portfolio-item">
            <div className="item-wrap silver">
              <a href="#modal-02" title="">
                <img alt="" src={Console} />
              </a>
            </div>
          </div>

          <div className="columns portfolio-item">
            <div className="item-wrap silver">
              <a href="#modal-02" title="">
                <img alt="" src={Console} />
              </a>
            </div>
          </div>

          <div className="columns portfolio-item">
            <div className="item-wrap silver">
              <a href="#modal-02" title="">
                <img alt="" src={Console} />
              </a>
            </div>
          </div>

          <div className="columns portfolio-item">
            <div className="item-wrap silver">
              <a href="#modal-02" title="">
                <img alt="" src={Console} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="columns collapsed">
        <h3>Bronze Sponsors</h3>

        <div id="portfolio-wrapper" className="bgrid-quaters s-bgrid-quarters cf">
          <div className="columns portfolio-item">
            <div className="item-wrap bronze">
              <a href="#modal-01" title="">
                <img alt="" src={Coffee} />
              </a>
            </div>
          </div>

          <div className="columns portfolio-item">
            <div className="item-wrap bronze">
              <a href="#modal-02" title="">
                <img alt="" src={Console} />
              </a>
            </div>
          </div>

          <div className="columns portfolio-item">
            <div className="item-wrap bronze">
              <a href="#modal-02" title="">
                <img alt="" src={Console} />
              </a>
            </div>
          </div>

          <div className="columns portfolio-item">
            <div className="item-wrap bronze">
              <a href="#modal-02" title="">
                <img alt="" src={Console} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Sponsors;
