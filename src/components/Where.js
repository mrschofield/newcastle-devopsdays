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
        <p className="text-center">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.84804425066!2d151.7644296153524!3d-32.928612780926564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b731444ed6776b9%3A0x9207f6904b44faab!2sNEX!5e0!3m2!1sen!2sau!4v1533642935052" width="600" height="450" frameborder="0" allowfullscreen></iframe>
        </p>
      </div>

      <div className="twelve columns collapsed">
        <h1>Getting here</h1>
      </div>

      <div className="text">
        <p>
          From Visit Newcastle's <a href='https://www.visitnewcastle.com.au/plan-my-trip/getting-here-getting-around'>Getting Here</a>:
          <blockquote>
            <p>
              Five airlines service Newcastle Airport at Williamtown (a 25-minute drive north of Newcastle). Jetstar flies from Brisbane, the Gold Coast and Melbourne, Virgin Australia flies from Brisbane and Melbourne, QantasLink flies from Brisbane, Rex Airlines flies from Sydney and Fly Pelican flies from Canberra, Sydney, Ballina / Byron Bay, Dubbo and Coffs Harbour. Port Stephens Coaches runs buses between the airport and the bus terminal next in Newcastle. Hunter Valley Buses runs buses from the airport to East Maitland via Raymond Terrace. Or, for those show-offs, why not charter a seaplane from Sydney's Rose Bay and land in Newcastle just 30 minutes later.
            </p>

            <p>
              The Newcastle Airport Information Services Desk can arrange door-to-door transfers. Please phone 02 4928 9822, or email <a href='mailto:nais@newcastleairport.com.au'>nais@newcastleairport.com.au</a>.
            </p>
          </blockquote>
        </p>
        <p>
          For more information about getting to and staying in Newcastle you can check out <a href='https://www.visitnewcastle.com.au/'>Visit Newcastle</a>, in particular <a href='https://www.visitnewcastle.com.au/plan-my-trip/getting-here-getting-around'>Getting Here</a> and <a href='https://www.visitnewcastle.com.au/accommodation'>Accommodation</a>.
        </p>
      </div>

    </div>
  </section>
);

export default Where;
