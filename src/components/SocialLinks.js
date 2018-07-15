import React from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaTwitter
} from "react-icons/lib/fa";
// https://gorangajic.github.io/react-icons/fa.html

const SocialLinks = () => (
  <ul className="social">
    <li>
      <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.devopsdays.org%2Fevents%2F2018-newcastle%2Fwelcome%2F">
        <FaFacebook />
      </a>
    </li>
    <li>
      <a href="https://twitter.com/devopsdaysnewy">
        <FaTwitter />
      </a>
    </li>
    <li>
      <a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fwww.devopsdays.org%2Fevents%2F2018-newcastle%2Fwelcome%2F">
        <FaLinkedin />
      </a>
    </li>
  </ul>
);

export default SocialLinks;
