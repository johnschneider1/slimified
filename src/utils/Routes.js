import React from "react";
import { Route, Redirect } from "react-router-dom";
import Slimestore from "../components/pages/Slimestore";
import Landing from "../components/pages/Landings";
import About from "../components/pages/about";
import Recipes from "../components/pages/recipes";
import Store from "../components/pages/store";
import Photos from "../components/pages/photos";

const Routes = () => {
  return (
    <div>
      <Route exact path="/" render={() => <Redirect to="/landing" />} />
      <Route exact path="/landing" component={Landing} />
      <Route path="/slimestore" component={Slimestore} />
      <Route path="/about" component={About} />
      <Route path="/recipes" component={Recipes} />
      <Route path="/store" component={Store} />
      <Route path="/photos" component={Photos} />
    </div>
  );
};

export default Routes;
