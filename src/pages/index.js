import React from "react";
import Link from "gatsby-link";

import "../assets/css/main.css";

import Header from "../components/Header";
import About from "../components/About";
import Where from "../components/Where";
import Sponsors from "../components/Sponsors";
import Organisers from "../components/Organisers";
import SubmitTalk from "../components/SubmitTalk"
import Footer from "../components/Footer";

const IndexPage = () => (
  <div>
    <Header />
    <About />
    <Where />
    <SubmitTalk />
    <Sponsors />
    <Organisers />
    <Footer />
  </div>
);

export default IndexPage;
