import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-[20%]  h-[90%] rounded-3xl shadow-sm bg-[#9A94EB]/30    backdrop-blur-3xl  p-5">
      <div className="h-[100%]">
        <h1 className="text-2xl text-center text-white font-bold  ">Sidebar</h1>
        <div className="flex flex-col p-4  gap-10 mt-10  ">
          <Link to="/">
          <button className="bg-white text-black px-8 py-3 w-44 rounded-lg">
            From Upload
          </button>
          </Link>
          <Link to="/details">
          <button className="bg-white text-black px-8 py-3 w-44 rounded-lg">
            Upload Details
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
