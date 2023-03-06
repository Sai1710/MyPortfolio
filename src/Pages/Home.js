import React from "react";
import myPhoto from "../Images/Sai.png";
import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";
import SkillsCard from "../Components/SkillsCard";
import Projects from "./Projects";

function Home() {
  return (
    <>
      <div className="text-center p-10">
        <h2 className="text-5xl py-2 text-red-700 font-medium dark:text-red-700 md:text-6xl">
          Saikiriti Voonna
        </h2>
        <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
          Developer and designer.
        </h3>
        <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
          I am an enthusiastic front end Web Developer. I am a student at L.D
          College of Engineering pursuing my Bachelor of Engineering in
          Electronics and Communication.
        </p>
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
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
        <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
          <img src={myPhoto} layout="fill" objectFit="cover" />
        </div>
      </div>
      <div className="h-1 w-auto bg-red-700 rounded-full"></div>
      <div className="p-10 py-10 text-left">
        <h2 className="text-4xl py-2 font-medium dark:text-red-700 md:text-6xl">
          My
          <br />
          <span className="text-red-700 font-bold">Skills</span>
        </h2>
        <div className="carousel carousel-end rounded-box">
          <div className="carousel-item w-60 h-60">
            <SkillsCard
              skill="ReactJs"
              skillPhoto="https://ih0.redbubble.net/image.127584817.4804/sticker,375x360.u2.png"
            />
          </div>
         <div className="carousel-item  w-60 h-60">
            <SkillsCard
              skill="JavaScript"
              skillPhoto="https://tse2.mm.bing.net/th?id=OIP.I5XOh9o_kbTNsXnsIc53aAHaHa&pid=Api&P=0"
            />
          </div>
          <div className="carousel-item  w-60 h-60">
            <SkillsCard
              skill="HTML"
              skillPhoto="https://tse4.mm.bing.net/th?id=OIP.bI8KDjd8-nDvzTX_Uok7FwHaHa&pid=Api&P=0"
            />
          </div>
          <div className="carousel-item  w-60 h-60">
            <SkillsCard
              skill="CSS"
              skillPhoto="https://tse3.mm.bing.net/th?id=OIP.NccvSu6Gut1HXGwUTBKYKgHaH3&pid=Api&P=0"
            />
          </div>
          <div className="carousel-item  w-60 h-60">
            <SkillsCard
              skill="C"
              skillPhoto="https://www.kindpng.com/picc/m/403-4039227_c-language-logo-png-transparent-png.png"
            />
          </div>
          <div className="carousel-item  w-60 h-60">
            <SkillsCard
              skill="C++"
              skillPhoto="https://d33wubrfki0l68.cloudfront.net/c29d5f3fa689d44f5d4202137aae14560c42db25/16c64/img/cpp.svg"
            />
          </div>
          
        </div>
      </div>
      <div className="h-1 w-auto bg-red-700 rounded-full"></div>
      <Projects />
    </>
  );
}

export default Home;
