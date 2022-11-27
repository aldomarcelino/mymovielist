import React from "react";
import { FiSearch } from "react-icons/fi";
import { useNavigate, Link } from "react-router-dom";
export default function Navbar() {
  const navigate = useNavigate();
  return (
    <nav>
      <div className="bg-[#212121] ">
        <div className="flex flex-row p-3 items-center justify-between mx-[15%] ">
          <button
            className="bg-yellow-500 rounded-sm p-2"
            onClick={() => navigate("/")}
          >
            <div className="font-bold text-xl font-mono">MyMovieList</div>
          </button>
          <div className="text-xl">
            <button className="flex flex-row items-center">
              <h3 className="text-white text-xl font-medium mr-2">Search</h3>
              <FiSearch className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
