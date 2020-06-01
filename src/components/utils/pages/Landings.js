import React from "react";
import { Link } from "react-router-dom";

const Landings = () => {
  return (
    <div>
      <h1>You come here first</h1>
      <Link to="slimestore">SlimeStore</Link>
    </div>
  );
};

export default Landings;
