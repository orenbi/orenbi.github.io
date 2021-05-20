import React, { Component } from "react";
import "./Main.css";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import Footer from "../components/footer/Footer";
import Top from "./topbutton/Top";
import Profile from "./profile/Profile";

import { library } from "@fortawesome/fontawesome-svg-core"
import { fab, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
library.add(fab, faWhatsapp)

const WhatAppWidget = ({}) => (
    <div className="whatsapp-floating">
        <a
            target="_blank"
            href="https://api.whatsapp.com/send?phone=972544243178&text=פניה מהאתר"
        >
            <FontAwesomeIcon icon={faWhatsapp} />
        </a>
    </div>
)

export default class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Greeting />
        <Skills />

        <Profile />
        <Footer />
        <Top />

        <WhatAppWidget/>
      </div>
    );
  }
}
