import React from "react";
import { NavLink } from "react-router-dom";
import { HeaderDiv } from "./navbarstyles";

const navbar = () => {
  return (
    <HeaderDiv>
      <h1>Addy's SlimiFieD</h1>
      <NavLink
        to="/about"
        activeClassName="selected-navlink"
        className={"navlink"}
      >
        About
      </NavLink>

      <NavLink
        to="/recipes"
        activeClassName="selected-navlink"
        className={"navlink"}
      >
        Recipes
      </NavLink>
      <NavLink
        to="/store"
        activeClassName="selected-navlink"
        className={"navlink"}
      >
        Store
      </NavLink>

      <NavLink
        to="/photos"
        activeClassName="selected-navlink"
        className={"navlink"}
      >
        MyPics
      </NavLink>
    </HeaderDiv>
  );
};

export default navbar;
