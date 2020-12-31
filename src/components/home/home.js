import React, { Component } from "react";
import ReactDOM from "react-dom";
import logoBase from "../assets/new-logo-no-paw.png";
import pawSvg from "../assets/paw-logo-yellow.png";
import Header from "../header";
import AboutSection from "./about-section";
import TryOurProducts from "./try-our-products";

import "./home.scss";

class Home extends Component {
  constructor() {
    super();
    this.mainRef = React.createRef();
    this.aboutRef = React.createRef();
    this.ourProductsRef = React.createRef();
    this.handleScroll = this.handleScroll.bind(this);
  }

  state = {
    showHeader: "",
    showAbout: "show",
    showProducts: ""
  };

  handleScroll = () => {
    const mainRefPosition = ReactDOM.findDOMNode(
      this.mainRef.current
    ).getBoundingClientRect().bottom;
    // const aboutRefPosition = ReactDOM.findDOMNode(
    //   this.aboutRef.current
    // ).getBoundingClientRect().top;
    const ourProductsPosition = ReactDOM.findDOMNode(
      this.ourProductsRef.current
    ).getBoundingClientRect().top;
    if (mainRefPosition <= 300) {
      this.setState({ showHeader: "show" });
    } else {
      this.setState(prevState => ({
        showHeader:
          prevState.showHeader === "show" ? "hide" : prevState.showHeader
      }));
    }
    // if (aboutRefPosition < 300) {
    //   this.setState({ showAbout: "show" });
    // } else {
    //   this.setState(prevState => ({
    //     showAbout: prevState.showAbout === "show" ? "hide" : prevState.showAbout
    //   }));
    // }
    if (ourProductsPosition < 400) {
      this.setState({ showProducts: "show" });
    } else {
      this.setState(prevState => ({
        showProducts:
          prevState.showProducts === "show" ? "hide" : prevState.showProducts
      }));
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    // const aboutRefPosition = ReactDOM.findDOMNode(
    //   this.aboutRef.current
    // ).getBoundingClientRect().top;
    // console.log(aboutRefPosition);
    // if (aboutRefPosition < 300) {
    //   this.setState({ showAbout: "show" });
    // }
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
        <TryOurProducts
          ref={this.ourProductsRef}
          showAbout={this.state.showProducts}
        />
      </>
    );
  }
}

export default Home;
