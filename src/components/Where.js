import React from "react";
import { FaUser } from "react-icons/lib/fa";

import ProfilePic from "../assets/images/profilepic.jpg";

const Where = () => (
  <section id="where">
    <div className="row">
      <div className="twelve columns collapsed">
        <h1>Where?</h1>
      </div>

      <div className="text">
        <p>
          <a href="http://www.thenex.com.au/">The NEX</a>, Newcastle Exhibition and Convention Centre
        </p>
        <p>
          <a href="https://www.thenex.com.au/visit-newcastle"><img src="https://www.thenex.com.au/assets/Newcastle_Map.jpg" /></a>
        </p>
      </div>
    </div>
  </section>
);

export default Where;
