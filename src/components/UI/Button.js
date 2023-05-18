import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDown as downloadIcon } from "@fortawesome/free-regular-svg-icons";
import { faLinkedin as linkedinIcon } from "@fortawesome/free-brands-svg-icons";
import { faGithub as githubIcon } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope as emailIcon } from "@fortawesome/free-solid-svg-icons";
import { faAward as certificateIcon } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight as arrowIcon } from "@fortawesome/free-solid-svg-icons";
import Styles from "./Button.module.css";

function Button({ text, logo, type, url, target, isHashLink }) {
  // List of all font-awesome logos
  const logos = {
    download: downloadIcon,
    linkedin: linkedinIcon,
    github: githubIcon,
    email: emailIcon,
    certificates: certificateIcon,
    arrow: arrowIcon,
  };

  const link = (
    <Link
      to={url}
      className={Styles[type]}
      download={type === "downloadBtn" ? true : false}
      target={target}
    >
      {text && <span className={Styles.text}>{text}</span>}
      {type !== "link" && (
        <FontAwesomeIcon icon={logos[logo]} className={Styles.icon} />
      )}
    </Link>
  );

  const hashlink = (
    <HashLink
      to={url}
      className={Styles[type]}
      download={type === "downloadBtn" ? true : false}
      target={target}
    >
      {text && <span className={Styles.text}>{text}</span>}
      {type !== "link" && (
        <FontAwesomeIcon icon={logos[logo]} className={Styles.icon} />
      )}
    </HashLink>
  );

  return isHashLink ? hashlink : link;
}

export default Button;
