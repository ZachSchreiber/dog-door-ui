import React, { useState } from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faAddressCard,
  faPaperPlane
} from "@fortawesome/free-solid-svg-icons";
import headerLogo from "../assets/DogDoorHeader-white.jpg";
import dogDoorDrawer from "../assets/DogDoorHeader-black.jpg";
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
          <img src={dogDoorDrawer} alt="header logo" className="header__logo" />
          <button className="close-drawer__button">
            <FontAwesomeIcon icon={faTimes} onClick={onToggle} />
          </button>
        </div>
        <section className="links">
          <Link to={"/"}>
            <FontAwesomeIcon icon={faAddressCard} />
            <span className="links__text">About</span>
          </Link>
          <Link to={"/"}>
            <FontAwesomeIcon icon={faPaperPlane} />
            <span className="links__text">Contact</span>
          </Link>
        </section>
      </Drawer>
      <div className="menu" onClick={onToggle}>
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
            <img src={headerLogo} alt="header logo" className="header__logo" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
