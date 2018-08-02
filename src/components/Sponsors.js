import React from "react";
import { FaPlus, FaTag } from "react-icons/lib/fa";

import Nib from "../assets/images/nib.png";

            // <div className="item-wrap platinum">
            //   <a href="https://www.nib.com.au/" title="">
            //     <img alt="" src={Nib} />
            //   </a>
            // </div>

const Sponsors = () => (
  <section id="sponsors">
    <h1>Sponsors</h1>

    <div className="row">
      <div className="text">
        <p>
        We greatly value sponsors for this open event. If you are interested in sponsoring, please drop us an email at [ <a href="mailto:organizers-newcastle-2018@devopsdays.org">organizers-newcastle-2018@devopsdays.org</a> ].
        </p>

        <p>
        devopsdays is a self-organizing conference for practitioners that depends on sponsorships. We do not have vendor booths, sell product presentations, or distribute attendee contact lists. Sponsors have the opportunity to have short elevator pitches during the program and will get recognition on the website and social media before, during and after the event. Sponsors are encouraged to represent themselves by actively participating and engaging with the attendees as peers. Any attendee also has the opportunity to demo products/projects as part of an open space session.
        </p>

        <p>
        All attendees are welcome to propose any subject they want during the open spaces, but this is a community-focused conference, so heavy marketing will probably work against you when trying to make a good impression on the attendees.
        </p>

        <p>
        The best thing to do is send engineers to interact with the experts at devopsdays on their own terms.
        </p>

        <p>
        <a href='https://drive.google.com/file/d/1HP3JwyC76cQr_3GUs1F7e_rGknfls3jf/view?usp=sharing'>Our sponsorship prospectus can be downloaded here</a>
        </p>
      </div>

      <hr/>

      <div className="twelve columns collapsed">
        <h3>Platinum Sponsors</h3>

        <div id="portfolio-wrapper" className="bgrid-quaters s-bgrid-quarters cf">
          <div className="columns portfolio-item">
          </div>
        </div>
      </div>
    </div>


    <div className="row">
      <div className="twelve columns collapsed">
        <h3>Gold Sponsors</h3>

        <div id="portfolio-wrapper" className="bgrid-quaters s-bgrid-quarters cf">
          <div className="columns portfolio-item">
          </div>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="twelve columns collapsed">
        <h3>Silver Sponsors</h3>

        <div id="portfolio-wrapper" className="bgrid-quaters s-bgrid-quarters cf">
          <div className="columns portfolio-item">
          </div>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="twelve columns collapsed">
        <h3>Bronze Sponsors</h3>

        <div id="portfolio-wrapper" className="bgrid-quaters s-bgrid-quarters cf">
          <div className="columns portfolio-item">
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Sponsors;
