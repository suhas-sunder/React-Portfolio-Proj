import React from "react";
import Button from "./Button";
import Styles from "./NavBar.module.css";
import MobileNav from "./MobileNav";
import NavBtnData from "../../data/NavBtnData";

function NavBar() {
  return (
    <nav className={Styles.nav}>
      <div className={Styles["nav-items"]}>
        <ul className={Styles["nav-list"]}>
          {NavBtnData.map((data, index) => (
            <li
              key={index}
              className={
                data.type === "downloadBtn" ? Styles["download-link"] : ""
              }
            >
              <Button
                url={data.url}
                type={data.type}
                text={data.text}
                logo={data.logo}
                target={data.target}
                isHashLink={data.hashLink}
              />
            </li>
          ))}
        </ul>
      </div>
      <MobileNav id="mobile-nav" />
    </nav>
  );
}

export default NavBar;
