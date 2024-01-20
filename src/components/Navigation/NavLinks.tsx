import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin as linkedinIcon } from "@fortawesome/free-brands-svg-icons";
import { faGithub as githubIcon } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight as arrowIcon } from "@fortawesome/free-solid-svg-icons";
import { faS as logoIcon } from "@fortawesome/free-solid-svg-icons";
import { faUpRightFromSquare as arrowUpIcon } from "@fortawesome/free-solid-svg-icons";
import Styles from "./styles/ButtonLink.module.css";

interface PropType {
  id?: string;
  text?: any;
  logo?: any;
  type?: any;
  url: string;
  target?: any;
  isHashLink?: boolean;
  onClick?: any;
}

export default function NavLinks({
  id,
  text,
  logo,
  type,
  url,
  target,
  isHashLink,
  onClick,
}: PropType) {
  // Object list of all font-awesome logos
  const logos = {
    download: arrowUpIcon,
    linkedin: linkedinIcon,
    github: githubIcon,
    arrow: arrowIcon,
    homeLogo: logoIcon,
    arrowUp: arrowUpIcon,
  };

  // Text to be displayed on button
  const dispText = text && <span className={Styles.text}>{text}</span>;

  // Logo to be displayed on button
  const dispLogo = logo && (
    <FontAwesomeIcon icon={logos[logo]} className={Styles.icon} />
  );

  const handleClick = () => {
    console.log(target);
    // Scroll to top on new page load
    target !== "blank" &&
      window.scroll({
        top: 0,
      });

    onClick && onClick();
  };

  const link = (
    <Link
      data-testid={`btn-link-${id}`}
      to={url}
      aria-label={text}
      className={`${type !== "nav-link" ? "font-semibold border-2 border-highlight-yellow px-5 py-[0.7em] text-sm rounded-md text-dark-blueish-gray bg-highlight-yellow justify-center items-center gap-2 hover:text-highlight-yellow hover:bg-dark-blueish-gray" : "h-full hover:text-highlight-yellow justify-center items-center text-white"} flex tracking-widest text-base`}
      target={target}
      onClick={handleClick}
    >
      {dispText}
      {dispLogo}
    </Link>
  );

  const anchorLink = (
    <HashLink
      data-testid={`btn-link-${id}`}
      to={url}
      aria-label={text}
      className={`${Styles[type]} tracking-widest text-base `}
      target={target}
      onClick={onClick}
      scroll={(el) => {
        // Offset y-coordinate by 200px up for all anchor links
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -140;
        window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
      }}
    >
      {dispText}
      {dispLogo}
    </HashLink>
  );

  return isHashLink ? anchorLink : link;
}
