import React from "react";
import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer footer-center p-10 bg-red-700 text-white rounded">
      <div className="grid grid-flow-col gap-4"></div>
      <div>
        <div className="grid grid-flow-col gap-4 text-3xl">
          <Link to="https://www.instagram.com/kiriti5ai/" target="_blank">
            <AiFillInstagram />
          </Link>
          <Link
            to="https://www.linkedin.com/in/saikiriti-voonna-67b163213/"
            target="_blank"
          >
            <AiFillLinkedin />
          </Link>

          <Link to="https://github.com/Sai1710" target="_blank">
            <AiFillGithub />
          </Link>
        </div>
      </div>
      <div>
        <p>Copyright © 2023 - All right reserved by Saikiriti Voonna</p>
      </div>
    </footer>
  );
}

export default Footer;
