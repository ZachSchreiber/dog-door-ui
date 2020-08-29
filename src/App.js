import React, { Component } from "react";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Route, Switch } from "react-router-dom";
//import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
//import Drawer from "./components/drawer";

import "./App.scss";

class App extends Component {
  state = {
    isOpen: false
  };

  onToggle = () => this.setState(state => ({ isOpen: !state.isOpen }));

  render() {
    return (
      <div className="app">
        {/* <Drawer
          isOpen={this.state.isOpen}
          onClose={this.onToggle}
          titleElementId={"fun"}
          setFocusOnOpen={true}
          position={Drawer.POSITIONS.end}
        >
          <div className="close-drawer">
            <button className="close-drawer__button">
              <FontAwesomeIcon icon={faTimes} onClick={this.onToggle} />
            </button>
          </div>
          <section className="links">
            <Link to={"/about"}>About</Link>
            <Link to={"/contact"}>Contact</Link>
          </section>
        </Drawer>
        <div className="menu" onClick={this.onToggle}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div className="header">
          <div className="header__content">
            <Link to={"/"}>Logo</Link>
          </div>
        </div> */}
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path="/about" component={About} />
          <Route exact={true} path="/contact" component={Contact} />
          <Route path="/*" component={() => <div>Error</div>} />
        </Switch>
      </div>
    );
  }
}

export default App;
