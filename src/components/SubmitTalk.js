import React from "react";
import { FaPlus, FaTag } from "react-icons/lib/fa";
import Link from "gatsby-link";

import Coffee from "../assets/images/portfolio/coffee.jpg";
import Console from "../assets/images/portfolio/console.jpg";
import Judah from "../assets/images/portfolio/judah.jpg";
import IntoTheLight from "../assets/images/portfolio/into-the-light.jpg";
import Farmerboy from "../assets/images/portfolio/farmerboy.jpg";
import Girl from "../assets/images/portfolio/girl.jpg";
import Origami from "../assets/images/portfolio/origami.jpg";
import Retrocam from "../assets/images/portfolio/retrocam.jpg";

import whiteBoard from "../assets/images/devopsdaysnewy-whiteboard.jpg";

const SubmitTalk = () => (
  <section id="submit">
    <div>
        <h1>
          <span>Propose a Talk</span>
        </h1>

        <p>
          There are three ways to propose a topic at DevOpsDays Newcastle:
        </p>

        <ol>
          <li>A 30-minute talk presented during the conference, usually in the mornings.</li>
          <li>An Ignite talk presented during the Ignite sessions (scheduling varies). These are 5 minutes
            slots with slides changing every 15 seconds (20 slides total). </li>
          <li>Open Space: If you’d like to lead a group discussion during the attendee-suggested Open Space
            breakout sessions, it is not necessary to propose it ahead of time. Those topics are suggested in
            person at the conference. If you’d like to demo your product or service, you should sponsor the event 
            and demo it at your table.</li>
        </ol>

        <p className="centered">
          <a href="https://www.papercall.io/2018-devopsdaysnewy"><button>Propose a talk !</button></a>
        </p>
      </div>
  </section>
);

export default SubmitTalk;
