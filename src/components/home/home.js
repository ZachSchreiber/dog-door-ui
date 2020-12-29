import React, { Component } from "react";
import ReactDOM from "react-dom";
import logoBase from "../assets/new-logo-no-paw.svg";
import pawSvg from "../assets/paw-logo.svg";
import Header from "../header";
import AboutSection from "./about-section";

import "./home.scss";

class Home extends Component {
  constructor() {
    super();
    this.mainRef = React.createRef();
    this.aboutRef = React.createRef();
    this.handleScroll = this.handleScroll.bind(this);
  }

  state = {
    showHeader: "",
    showAbout: ""
  };

  handleScroll = () => {
    const mainRefPosition = ReactDOM.findDOMNode(
      this.mainRef.current
    ).getBoundingClientRect().bottom;
    const aboutRefPosition = ReactDOM.findDOMNode(
      this.aboutRef.current
    ).getBoundingClientRect().top;
    if (mainRefPosition <= 300) {
      this.setState({ showHeader: "show" });
    } else {
      this.setState(prevState => ({
        showHeader:
          prevState.showHeader === "show" ? "hide" : prevState.showHeader
      }));
    }
    if (aboutRefPosition < 800) {
      this.setState({ showAbout: "show" });
    } else {
      this.setState(prevState => ({
        showAbout: prevState.showAbout === "show" ? "hide" : prevState.showAbout
      }));
    }
  };

  componentDidMount() {
    const aboutRefPosition = ReactDOM.findDOMNode(
      this.aboutRef.current
    ).getBoundingClientRect().top;
    console.log(aboutRefPosition);
    if (aboutRefPosition < 700) {
      this.setState({ showAbout: "show" });
    } else {
      this.setState(prevState => ({
        showAbout: prevState.showAbout === "show" ? "hide" : prevState.showAbout
      }));
    }
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    return (
      <>
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
        <AboutSection ref={this.aboutRef} showAbout={this.state.showAbout} />
        <div className="footer-section">
          <h2 className="footer-section__section-header">What we do</h2>
          <p className="footer-section__section-content">
            skim the surface to this point. The target area is only two meters
            wide. It’s a small thermal exhaust port, right below the main port.
            The shaft leads directly to the reactor system. A precise hit will
            start a chain reaction which should destroy the station. Only a
            precise hit will set up a chain reaction. The shaft is ray-shielded,
            so you’ll have to use proton torpedoes. That’s impossible, even for
            a computer. It’s not impossible. I used to bull’s-eye womp rats in
            my T-sixteen back home. They’re not much bigger than two meters. Man
            your ships! And may the Force be with you!
          </p>
        </div>
      </>
    );
  }
}

export default Home;
