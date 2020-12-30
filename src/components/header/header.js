import React, { useState } from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faAddressCard,
  faPaperPlane,
  faSeedling,
  faStoreAlt
} from "@fortawesome/free-solid-svg-icons";
import pawSvg from "../assets/paw-logo-yellow.svg";
import Drawer from "../drawer";

import "./header.scss";

const Header = ({ showHeader }) => {
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
          <Link className="links__item" to={"/"}>
            <FontAwesomeIcon icon={faStoreAlt} />
            <span className="links__text">Shop</span>
          </Link>
          <Link className="links__item" to={"/"}>
            <FontAwesomeIcon icon={faAddressCard} />
            <span className="links__text">About</span>
          </Link>
          <Link className="links__item" to={"/"}>
            <FontAwesomeIcon icon={faPaperPlane} />
            <span className="links__text">Contact</span>
          </Link>
          <Link className="links__item" to={"/"}>
            <FontAwesomeIcon icon={faSeedling} />
            <span className="links__text">Farmers</span>
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
