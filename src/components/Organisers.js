import React from "react";
import { FaUser } from "react-icons/lib/fa";

import MathewFinch from "../assets/images/mathew_finch.jpeg"
import KurtGardiner from "../assets/images/kurt_gardiner.jpeg"
import WayneIngram from "../assets/images/wayne_ingram.jpg"
import HaileyMartin from "../assets/images/hailey_martin.jpg"
import JonathanMilgate from "../assets/images/jonathan.jpg"
import DamianBrady from "../assets/images/damian_brady.png"
import LindseyHolmwood from "../assets/images/lindsay_holmwood.jpg"

const Organisers = () => (
  <section id="organisers">
    <div className="row">
      <div className="twelve columns collapsed">
        <h1>Organisers</h1>

        <div id="organisers-wrapper" className="bgrid-quarters s-bgrid-quarters cf">
        <div className="columns organisers-item">
            <div className="item-wrap">
              <a href="#modal-01" title="">
                <img alt="" src={DamianBrady} />
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
                <img alt="" src={MathewFinch} />
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
                <img alt="" src={KurtGardiner} />
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
                <img alt="" src={LindseyHolmwood} />
                <div className="overlay">
                  <div className="organisers-item-meta">
                    <h5>Lindsey Holmwood</h5>
                    <p>Active Core DevOps Organiser Group</p>
                  </div>
                </div>
              </a>
            </div>
          </div>          

          <div className="columns organisers-item">
            <div className="item-wrap">
              <a href="#modal-01" title="">
                <img alt="" src={WayneIngram} />
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
                <img alt="" src={HaileyMartin} />
                <div className="overlay">
                  <div className="organisers-item-meta">
                    <h5>Hailey Martin</h5>
                    <p>DevOps Engineer</p>
                  </div>
                </div>
              </a>
            </div>
          </div>          

          <div className="columns organisers-item">
            <div className="item-wrap">
              <a href="#modal-01" title="">
                <img alt="" src={JonathanMilgate} />
                <div className="overlay">
                  <div className="organisers-item-meta">
                    <h5>Jonathan Milgate</h5>
                    <p>Head of Development, Anditi Pty Ltd</p>
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
