import React, { useState } from "react";
import cn from "classnames";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import pawSvg from "../assets/paw-logo-yellow-perfect.svg";
import Drawer from "../drawer";

import "./header.scss";

const Header = ({ showHeader }) => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const onToggle = () => setIsOpen(!isOpen);
  return (
    <>
      <Drawer
        isOpen={isOpen}
        onClose={onToggle}
        titleElementId={"fun"}
        setFocusOnOpen={true}
        position={Drawer.POSITIONS.end}
      >
        <div className="close-drawer">
          <div className="close-drawer__title-container">
            <span className="close-drawer__title-text">Menu</span>
            <img src={pawSvg} alt="drawer logo" className="header__logo" />
          </div>
          <button className="close-drawer__button">
            <FontAwesomeIcon icon={faTimes} onClick={onToggle} />
          </button>
        </div>
        <section className="links">
          <Link
            className={cn(`links__item${pathname === "/" ? "--active" : ""}`)}
            to={"/"}
          >
            <span className="links__text">HOME</span>
          </Link>
          <Link
            className={cn(
              `links__item${pathname === "/raw-food" ? "--active" : ""}`
            )}
            to={"/raw-food"}
          >
            <span className="links__text">RAW FOOD</span>
          </Link>
          <Link
            className={cn(
              `links__item${pathname === "/dog-brews" ? "--active" : ""}`
            )}
            to={"/dog-brews"}
          >
            <span className="links__text">DOG BREWS</span>
          </Link>
          <Link
            className={cn(
              `links__item${pathname === "/meet-the-pack" ? "--active" : ""}`
            )}
            to={"/meet-the-pack"}
          >
            <span className="links__text">MEET THE PACK</span>
          </Link>
          <Link
            className={cn(
              `links__item${pathname === "/order-online" ? "--active" : ""}`
            )}
            to={"/order-online"}
          >
            <span className="links__text">ORDER ONLINE</span>
          </Link>
        </section>
      </Drawer>
      <div className="menu" onClick={onToggle}>
        <span className="menu__text">Menu</span>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div
        className={cn(
          "header",
          showHeader === "show" && "header--show",
          showHeader === "hide" && "header--hide"
        )}
      >
        <div className="header__content">
          <Link to={"/"}>
            <h1 className="header__text">Dog Door Pet Food</h1>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
