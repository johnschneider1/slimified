import React from "react";
import { Route, Redirect } from "react-router-dom";
import Slimestore from "./pages/Slimestore";
import Landing from "./pages/Landings";

const Routes = () => {
  return (
    <div>
      <Route exact path="/" render={() => <Redirect to="/landing" />} />
      <Route exact path="/landing" component={Landing} />
      <Route path="/slimestore" component={Slimestore} />
    </div>
  );
};

export default Routes;
