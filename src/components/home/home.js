import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";
import logoBase from "../assets/new-logo-no-paw.png";
import pawSvg from "../assets/paw-logo-yellow-perfect.svg";
import Header from "../header";
import AboutSection from "./about-section";
import TryOurProducts from "./try-our-products";
import WhereToPurchase from "./where-to-purchase";
import GetInTouch from "./get-in-touch";

import "./home.scss";

class Home extends Component {
  constructor() {
    super();
    this.mainRef = React.createRef();
    this.handleScroll = this.handleScroll.bind(this);
  }

  state = {
    showHeader: ""
  };

  handleScroll = () => {
    const mainRefPosition = ReactDOM.findDOMNode(
      this.mainRef.current
    ).getBoundingClientRect().bottom;
    if (mainRefPosition <= 300) {
      this.setState({ showHeader: "show" });
    } else {
      this.setState(prevState => ({
        showHeader:
          prevState.showHeader === "show" ? "hide" : prevState.showHeader
      }));
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    window.scrollTo({
      top: 0,
      left: 0
    });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    return (
      <>
        <Helmet>
          <title>Dog Door</title>
          <meta
            name="description"
            content="Dog Door Pet Food is Durham's premier Farm-To-Fido pet food company. We offer raw food, dog brews, and other products made with simple, locally sourced ingredients."
          />
        </Helmet>
        <Header showHeader={this.state.showHeader} />
        <div className="main" ref={this.mainRef}>
          <div className="main__logo-container">
            <img
              src={logoBase}
              className="main__logo-base"
              alt="dog door logo"
            />
            <img src={pawSvg} className="main__paw slam" alt="dog door logo" />
          </div>
          <h1 className="main__info">Coming soon!</h1>
        </div>
        <AboutSection />
        <TryOurProducts />
        <WhereToPurchase />
        <GetInTouch />
      </>
    );
  }
}

export default Home;
