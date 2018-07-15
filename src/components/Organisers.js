import React from "react";
import { FaUser } from "react-icons/lib/fa";

import ProfilePic from "../assets/images/profilepic.jpg";

const Organisers = () => (
  <section id="organisers">
    <div className="row">
      <div className="twelve columns collapsed">
        <h1>Organisers</h1>

        <div id="organisers-wrapper" className="bgrid-sixths s-bgrid-thirds cf">
          <div className="columns organisers-item">
            <div className="item-wrap">
              <a href="#modal-01" title="">
                <img alt="" src={ProfilePic} />
                <div className="overlay">
                  <div className="organisers-item-meta">
                    <h5>Mathew Finch</h5>
                    <p>Head of Emerging Technology, NIB Health Funds</p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="columns organisers-item">
            <div className="item-wrap">
              <a href="#modal-01" title="">
                <img alt="" src={ProfilePic} />
                <div className="overlay">
                  <div className="organisers-item-meta">
                    <h5>Kurt Gardiner</h5>
                    <p>DevOps Lead, NIB Health Funds</p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="columns organisers-item">
            <div className="item-wrap">
              <a href="#modal-01" title="">
                <img alt="" src={ProfilePic} />
                <div className="overlay">
                  <div className="organisers-item-meta">
                    <h5>Wayne Ingram</h5>
                    <p>Executive Manager, Technology at Mine</p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="columns organisers-item">
            <div className="item-wrap">
              <a href="#modal-01" title="">
                <img alt="" src={ProfilePic} />
                <div className="overlay">
                  <div className="organisers-item-meta">
                    <h5>Jonathan Milgate</h5>
                    <p>Head of Development, Anditi Pty Ltd</p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="columns organisers-item">
            <div className="item-wrap">
              <a href="#modal-01" title="">
                <img alt="" src={ProfilePic} />
                <div className="overlay">
                  <div className="organisers-item-meta">
                    <h5>Damian Brady</h5>
                    <p>Cloud DevOps Advocate, Microsoft</p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="columns organisers-item">
            <div className="item-wrap">
              <a href="#modal-01" title="">
                <img alt="" src={ProfilePic} />
                <div className="overlay">
                  <div className="organisers-item-meta">
                    <h5>Lindsey Holmwood</h5>
                    <p>Active Core DevOps Organiser Group</p>
                  </div>
                </div>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
);

export default Organisers;
