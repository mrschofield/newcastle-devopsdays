import React from "react";
import SocialLinks from "./SocialLinks";
import { FaChevronCircleUp } from "react-icons/lib/fa";

const Footer = () => (
  <footer id="footer">
    <div className="row">
      <div className="twelve columns">
        <SocialLinks />

        <ul className="copyright">
          <li>&copy; Copyright 2018 DevOpsDays Newcastle</li>
        </ul>

        <ul className="copyright small">
          <li>
            Design by{" "}
            <a title="Styleshout" href="https://www.styleshout.com/">
              Styleshout
            </a>
            </li>
            <li>
            Gatsby starter template by{" "}
            <a href="https://www.amanhimself.me">Aman Mittal</a>
          </li>
          <li>
            Customizations by <a href="https://google.com">Mathew Schofield</a>?
          </li>
        </ul>
     </div>

      <div id="go-top">
        <a className="smoothscroll" title="Back to Top" href="#home">
          <FaChevronCircleUp />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
