import React from "react";
import myPhoto from "../Images/Sai.png";
import ProjectCard from "../Components/ProjectCard";
import maptySnap from "../Images/Mapty.png";
import GFSnap from "../Images/GitHubFinder.png";
import DGSnap from "../Images/DiceGame.png";
import ElSnap from "../Images/EdgeLedger.png";
import FBSnap from "../Images/FeedbackUI.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import ProjectContext from "../Context/ProjectContext";
function Projects() {
  const { projects } = useContext(ProjectContext);
  return (
    <section className="p-10" id="projects">
      <div>
        <h3 className="text-4xl py-1 dark:text-white font-bold text-red-700 md:text-6xl">
          Projects
        </h3>
      </div>
      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
        <div className="basis-1/3 flex-1 ">
          <Link to="https://mapty-project-lime.vercel.app/" target="_blank">
            <img
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              layout="responsive"
              src={maptySnap}
            />
          </Link>
        </div>
        <div className="basis-1/3 flex-1 ">
          <Link to="https://github-finder-sai1710.vercel.app/" target="_blank">
            <img
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              layout="responsive"
              src={GFSnap}
            />
          </Link>
        </div>
        <div className="basis-1/3 flex-1 ">
          <Link to="https://feedback-app-six-xi.vercel.app/" target="_blank">
            <img
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              layout="responsive"
              src={FBSnap}
            />
          </Link>
        </div>
        <div className="basis-1/3 flex-1 ">
          <Link to="https://edgeledger-pi.vercel.app/" target="_blank">
            <img
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              layout="responsive"
              src={ElSnap}
            />
          </Link>
        </div>
        <div className="basis-1/3 flex-1 ">
          <Link to="https://dice-game-wine-zeta.vercel.app/" target="_blank">
            <img
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              layout="responsive"
              src={DGSnap}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Projects;
