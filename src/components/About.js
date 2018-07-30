import React from "react";
import { FaCloudDownload } from "react-icons/lib/fa";

import profilePic from "../assets/images/code.png";
import logo from "../assets/images/DevOpsNewy_WHITE_TALL.png";

const About = () => (
  <section id="about">
    <div className="row">
      <div className="three columns">
        <img src={logo} alt="" />
      </div>
      <div className="nine columns main-col">
        <h2>About DevOpsDays</h2>
        <p>
          <a href="https://www.devopsdays.org/">Devopsdays</a> is a community-organized not-for-profit conference series
          for <a href="https://en.wikipedia.org/wiki/DevOps">DevOps</a> practitioners. It is a worldwide series of technical
          conferences covering topics of software development, IT infrastructure operations, and the intersection
          between them. Each event is run by volunteers from the local area.
        </p>
        <p>
          Most Devopsdays events feature a combination of curated talks and
          self-organized <a href="https://www.devopsdays.org/open-space-format/">open space</a> content. Topics often include
          cloud, development, operations, automation, testing, security, and organizational culture.
        </p>
        <p>
          Respect and empathy are core devops values. Devopsdays is dedicated to providing an environment where everyone in the
          devops community can learn and share in respectful, considerate collaboration. The event operates under a code of conduct
          available here: <a href="https://www.devopsdays.org/conduct/">https://www.devopsdays.org/conduct/</a>
        </p>
        <p>This is the first time Devopsdays will be held 'regionally' within Australia. Newcastle, the seaside city, sitting
          majestically where the ocean meets our working international port. Our city snakes around the coastline with golden
          beaches within walking distance of almost anywhere.
        </p>
        <p>
          Local organisers for this conference range from varying companies around the Newcastle and Hunter
          Valley regions.
        </p>
      </div>
    </div>
  </section>
);

export default About;
