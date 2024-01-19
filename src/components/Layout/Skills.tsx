import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SkillsData from "../../data/SkillsData";
import { v4 as uuidv4 } from "uuid";
import { faAnglesDown as arrowsDown } from "@fortawesome/free-solid-svg-icons";
import { faAnglesUp as arrowsUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Skills() {
  const [expandSkills, setExpandSkills] = useState<boolean>(false);

  return (
    <div
      id="skills"
      className="flex w-full justify-center bg-light-blueish-gray tracking-wider"
    >
      <div className="flex flex-col max-w-[1200px] w-full relative">
        <h2 className="flex absolute uppercase text-white bg-light-blueish-gray px-12 pt-6 py-4 text-xl sm:text-4xl rounded-t-lg sm:left-0 -top-[3.35em] sm:-top-[2.2em]">
          Technical skills
        </h2>
        <ul
          className={`${
            !expandSkills ? "max-h-44" : "max-h-[100%]"
          } transition-all delay-200 grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-x-20 gap-y-14 pt-10 pb-5 grid px-6 mx-auto overflow-hidden`}
        >
          {SkillsData.map((data) => (
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
                className="flex justify-center items-center rounded-md p-3 text-center bg-dark-blueish-gray"
              >
                {data.skill}
              </span>
            </li>
          ))}
        </ul>
        <button
          onClick={() => setExpandSkills(!expandSkills)}
          className="flex gap-2 text-white w-full justify-center items-center py-8 hover:text-highlight-yellow"
        >
          <span>{expandSkills ? "Hide" : "Show all"} skills</span>
          <span>
            {expandSkills ? (
              <FontAwesomeIcon
                data-testid={"expand-skills-up"}
                icon={arrowsUp}
                className=""
              />
            ) : (
              <FontAwesomeIcon
                data-testid={"expand-skills-down"}
                icon={arrowsDown}
                className=""
              />
            )}
          </span>
        </button>
      </div>
    </div>
  );
}
