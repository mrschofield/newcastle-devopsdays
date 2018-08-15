import React from "react";
import {
  FaUser,
  FaEnvelope
} from "react-icons/lib/fa";
// https://gorangajic.github.io/react-icons/fa.html

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

        <div>
          <p>
            Contact us by email
            <a href="mailto:organizers-newcastle-2018@devopsdays.org">
              &nbsp;<FaEnvelope /> organizers-newcastle-2018@devopsdays.org
            </a>
          </p>
        </div>
        <div id="organisers-wrapper" className="bgrid-eighths s-bgrid-eighths cf">
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
                    <p>Head of Emerging Tech, nib health funds</p>
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
                    <p>DevOps Lead, nib health funds</p>
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
                    <p>Executive Manager, Mine</p>
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
                    <p>DevOps Engineer, nib health funds</p>
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
