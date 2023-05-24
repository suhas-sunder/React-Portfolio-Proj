import { React, useState } from "react";
import Button from "./Button";
import Styles from "./MobileNav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars as burgerIcon } from "@fortawesome/free-solid-svg-icons";
import { faX as xIcon } from "@fortawesome/free-solid-svg-icons";
import NavBtnData from "../../data/NavBtnData";

function NavBar({ resumeImg, handleScroll }) {
  const [toggle, setToggle] = useState(true);

  const handleBurgerMenu = (shouldToggle) => {
    // Check if menu needs to be opened or closed
    shouldToggle ? setToggle(!toggle) : setToggle(true);
  };

  return (
    <>
      <div className={Styles["mobile-nav"]}>
        <Button
          url="/"
          type="home-link"
          logo="homeLogo"
          onClick={() => handleBurgerMenu(false)}
        />
        {toggle && (
          <FontAwesomeIcon
            icon={burgerIcon}
            className={Styles.burger}
            onClick={handleBurgerMenu}
          />
        )}
        {!toggle && (
          <FontAwesomeIcon
            icon={xIcon}
            className={Styles.burger}
            onClick={handleBurgerMenu}
          />
        )}
      </div>
      {!toggle && (
        <ul id="burger-menu" className={Styles["nav-list"]}>
          {NavBtnData.filter((data) => data.text !== "Home").map(
            (data, index) => (
              <li
                key={index}
                className={
                  data.type === "downloadBtn" ? Styles["download-link"] : ""
                }
              >
                <Button
                  url={data.url}
                  type={data.typeMobile}
                  text={data.text}
                  logo={data.logo}
                  target={data.target}
                  isHashLink={data.hashLink}
                  onClick={handleBurgerMenu}
                />
              </li>
            )
          )}
        </ul>
      )}
    </>
  );
}

export default NavBar;
