import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../navbar";
import { LandingDiv, MainImage } from "./LandingStyle";

const Landings = () => {
  return (
    <LandingDiv>
      <Navbar />
      <p>
        Hi my name is Addy and for as long as I can remember I have loved to
        make slime. Here on my website you can see some of my favorite work and
        buy some of my products. I hope you enjoy it as much as I enjoyed making
        it.
      </p>
      <MainImage>
        {/* <img src="https://i.imgur.com/TK8KbWG.jpg" alt="slime photo" /> */}
      </MainImage>
    </LandingDiv>
  );
};

export default Landings;
