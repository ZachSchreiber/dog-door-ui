import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/home";
import RawFood from "./components/raw-food";
import Contact from "./components/contact";

import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path="/raw-food" component={RawFood} />
          <Route exact={true} path="/contact" component={Contact} />
          <Route path="/*" component={() => <div>Error</div>} />
        </Switch>
      </div>
    );
  }
}

export default App;
