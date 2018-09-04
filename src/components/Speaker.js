import React from "react";
import PropTypes from "prop-types";
import {
  FaHome,
  FaTwitter
} from "react-icons/lib/fa";

const Speaker = props => (
  <div id={props.id}>
    <hr />
    <div className="row speaker">
      <div className="three columns">
        <img src={props.image} alt="" />
        <ul className="speakers-social">
          <li>
            <a href={props.twitter}>
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href={props.url}>
              <FaHome />
            </a>
          </li>
        </ul>
      </div>
      <div className="nine columns main-col">
        <h3>{props.name}</h3>
        <h4>{props.title}</h4>
        <h5>About</h5>
        <p>{props.about}</p>
        <h5>{props.talk}</h5>
        <p>{props.summary}</p>
      </div>
    </div>
  </div>
);

Speaker.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  twitter: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  talk: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired
}

export default Speaker;
