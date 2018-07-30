import React from "react";
import Link from "gatsby-link";

import "../assets/css/main.css";

import Navigation from "../components/Navigation";
import Conduct from "../components/Conduct";
import Footer from "../components/Footer";

const ConductPage = () => (
  <div>
    <Navigation />
    <Conduct />
    <Footer />
  </div>
);

export default ConductPage;
