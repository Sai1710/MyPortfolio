import React from "react";
import { Link } from "react-router-dom";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { ProjectContext } from "../Context/ProjectContext";
import { useContext } from "react";
import { BsFillCloudSunFill } from "react-icons/bs";
function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-2xl">
          <span className="text-red-700">Saikiriti </span> Voonna
        </Link>
      </div>
      <div>
        <div className="flex justify-end">
          <Link
            to="/"
            className="btn btn-ghost btn-sm rounded-btn hover:text-red-700 text-sm"
          >
            Home
          </Link>
          <a
            href="#projects"
            className="btn btn-ghost btn-sm rounded-btn hover:text-red-700"
          >
            Projects
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
