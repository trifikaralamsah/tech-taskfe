import React from "react";
import { notFound } from "../assets";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <div className="grid w-full md:h-96 md:grid-cols-2 md:px-24">
        <div className="flex items-center justify-center">
          <div className="flex flex-col gap-3 px-4">
            <h3 className="text-2xl font-semibold">
              Ooops!
              <br />
              Page Not Found
            </h3>
            <p className="text-xl text-slate-600">
              This page doesn`t exist or was removed <br />
              We suggest you back to home
            </p>
            <button
              className="mt-4 w-3/6 rounded-full bg-[#2161D5] py-2"
              onClick={() => navigate("/")}
            >
              <span className="font-semibold text-white">Learn More</span>
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img src={notFound} alt="not found" className="w-96" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default NotFound;
