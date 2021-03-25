import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

// import AppShell from "./appShell";
import appUrls from "../config/appUrls";
import AppContainers from "./AppContainer";
import Home from "../screens/Home";
import Restaurentdetails from "../screens/Restaurentdetails"


const Routing = () => {
  return (
    <Switch>
      <Route exact path={appUrls.HOME} component={Home} />{" "}
      <Route exact path={appUrls.RESTAURENTDETAILS+"/:restaurant_id/"} component={Restaurentdetails} />{" "}
         </Switch>
  );
};
export default Routing;
