import React from "react";

function SkillsCard({skillPhoto }) {
  return (
    <div className="flex justify-center p-5">
      <div className="block bg-white shadow-lg dark:bg-neutral-700 w-80 border-solid border-b border-2 rounded-3xl">
        <img className="rounded-t-lg h-60 w-80" src={skillPhoto} alt="" />
      </div>
    </div>
  );
}

export default SkillsCard;
