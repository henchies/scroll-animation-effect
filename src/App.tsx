import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./styles.css";

import ExteriorView1 from "./ExteriorView1";

const App = () => (
  <Switch className="App">
    <Route exact path="/exterior-1" component={ExteriorView1} />
    <Route exact path="/exterior-2" component={ExteriorView1} />
    <Redirect to="/exterior-1" />
  </Switch>
);

export default App;
