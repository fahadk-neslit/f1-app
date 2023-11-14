import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <div className="sticky top-0 left-0 w-full z-50 flex justify-between bg-red-600 p-[20px]">
      <img src="/assets/svg/f1_logo.svg" width={120} height={120} />
      <div className="flex text-white gap-5">
        <h2
          onClick={() => {
            navigate("drivers");
          }}
          className="navItem"
        >
          Drivers
        </h2>
        <h2
          onClick={() => {
            navigate("teams");
          }}
          className="navItem"
        >
          Teams
        </h2>
        <h2
          onClick={() => {
            navigate("results");
          }}
          className="navItem"
        >
          Results
        </h2>
      </div>
    </div>
  );
}

export default Header;
