import React from "react";
import Link from "gatsby-link";

const BuyTickets = () => (
  <section id="buy-tickets">
    <div className="row">
      <div className="twelve columns collapsed">
        <h1>Buy Tickets - $99</h1>
      </div>

      <div className="text">
        <p>
          We want to ensure that anyone who’s interested in attending a devopsdays is able to, and that price is not a
          barrier. Therefore, we have adopted a flat $99 price for all tickets so everyone can help shape the culture and
          practice of DevOps world-wide.
        </p>

        <p className="centered">
          <a href="https://ti.to/devopsaustralia/devopsdays-newcastle-2018"><button>Buy Tickets</button></a>
        </p>
      </div>
    </div>
  </section>
);

export default BuyTickets;
