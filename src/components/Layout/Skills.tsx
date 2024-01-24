import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { v4 as uuidv4 } from "uuid";
import { faHtml5 as htmlIcon } from "@fortawesome/free-brands-svg-icons";
import { faCss3Alt as cssIcon } from "@fortawesome/free-brands-svg-icons";
import { faSquareJs as jsIcon } from "@fortawesome/free-brands-svg-icons";
import { faSquareGit as gitIcon } from "@fortawesome/free-brands-svg-icons";
import { faGithub as githubIcon } from "@fortawesome/free-brands-svg-icons";
import { faSass as sassIcon } from "@fortawesome/free-brands-svg-icons";
import { faReact as reactIcon } from "@fortawesome/free-brands-svg-icons";
import { faGitlab as gitlabIcon } from "@fortawesome/free-brands-svg-icons";
import { faNodeJs as nodeIcon } from "@fortawesome/free-brands-svg-icons";
import { faDatabase as databaseIcon } from "@fortawesome/free-solid-svg-icons";
import ExpandingListContainer from "../UI/ExpandingListContainer";

export default function Skills() {
  const skillsData = [
    {
      icon: htmlIcon,
      skill: "HTML5",
    },
    {
      icon: cssIcon,
      skill: "CSS3",
    },
    {
      icon: cssIcon,
      skill: "Tailwind CSS",
    },
    {
      icon: sassIcon,
      skill: "SASS",
    },
    {
      icon: jsIcon,
      skill: "JavaScript",
    },
    {
      icon: jsIcon,
      skill: "TypeScript",
    },
    {
      icon: reactIcon,
      skill: "React",
    },
    {
      icon: reactIcon,
      skill: "Remix",
    },
    {
      icon: nodeIcon,
      skill: "Node",
    },
    {
      icon: nodeIcon,
      skill: "Express",
    },
    {
      icon: databaseIcon,
      skill: "PostgreSQL",
    },
    {
      icon: databaseIcon,
      skill: "Prisma",
    },
    {
      icon: reactIcon,
      skill: "Jest",
    },
    {
      icon: reactIcon,
      skill: "React Testing Library",
    },
    {
      icon: reactIcon,
      skill: "Vitest",
    },
    {
      icon: gitIcon,
      skill: "Git",
    },
    {
      icon: githubIcon,
      skill: "GitHub",
    },
    {
      icon: gitlabIcon,
      skill: "GitLab",
    },
    {
      icon: reactIcon,
      skill: "Postman API",
    },
  ];

  return (
    <div
      id="skills"
      className="flex relative w-full justify-center bg-light-blueish-gray tracking-wider"
    >
      <div className="flex flex-col max-w-[1200px] w-full relative">
        <h2 className="flex absolute uppercase text-white bg-light-blueish-gray px-12 pt-6 py-4 text-xl sm:text-4xl rounded-t-lg sm:left-0 -top-[3.35em] sm:-top-[2.2em]">
          Technical skills
        </h2>
        <ExpandingListContainer customBtnStyle="flex text-white hover:text-highlight-yellow py-6" maxHeight="max-h-60 md:max-h-64 lg:max-h-[14.5em]">
          <ul className="grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-x-16 sm:gap-x-10 md:gap-x-16 gap-y-14 pt-10 pb-5 grid px-6">
            {skillsData.map((data) => (
              <li
                key={uuidv4()}
                className="flex flex-col gap-5 text-white text-lg"
              >
                <FontAwesomeIcon
                  data-testid={"skill-icon-" + data.icon}
                  icon={data.icon}
                  className="flex text-white text-[2.8rem]"
                />
                <span
                  data-testid={"skill-name-" + data.skill}
                  className="flex justify-center text-sm md:text-base items-center rounded-md p-3 text-center bg-dark-blueish-gray"
                >
                  {data.skill}
                </span>
              </li>
            ))}
          </ul>
        </ExpandingListContainer>
        
      </div>
    </div>
  );
}
