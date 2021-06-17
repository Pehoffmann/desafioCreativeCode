import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Perfiladm from "../pages/Perfiladm";
import Searcher from "../pages/Searcher";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/searcher" component={Searcher} />
        <Route path="/perfiladm" component={Perfiladm} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/" component={Login} />
      </Switch>
    </Router>
  );
};

export default Routes;
