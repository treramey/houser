import React from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from "../components/Dashboard/Dashboard";
import Wizard from "../components/Wizard/Wizard";

export default function () {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard}></Route>
      <Route path="/wizard" component={Wizard}></Route>
      <Route component={Dashboard} />
    </Switch>
  );
}
