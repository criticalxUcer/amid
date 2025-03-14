import React from "react";
import please from "/please.svg";
import group from '/Group 9.svg'
import app from '/app.svg'

const Hero = () => {
  return (
    <>
      <div className="container flex justify-center items-center">
        <div className="row bg-blue-200 w-[80%] flex justify-between px-[30px] pt-[20px] rounded-3xl">
          <div className="left">
            <p className="text-red-600 bg-white px-[8px] py-[4px] rounded-[10px] w-[100px] text-center">
              It works!
            </p>
            <h1 className=" pt-8 text-gray-900 font-extrabold text-5xl w-[400px]">
              Try Our Business Ideas to grow Rapidly
            </h1>
            <h3 className="pt-8 w-[400px] text-[20px] text-gray-600">
              We understand how desperatly you want to grow in the business
              world & our motto is to help you with practicale idea and plan{" "}
            </h3>
            <div className="buttons flex w-full justify-between py-8">
              <button className="font-medium text-white bg-orange-500 px-3 rounded-3xl">Get Started</button>
              <button className="text-orange-500 font-medium flex items-center"><img className="w-[60px]" src={group} alt="" /> DEMO VIDEOS</button>
            </div>
          </div>
          <div className="right relative">
            <img src={please} alt="" />
            <img className="absolute top-58 left-[-50px] opacity-[0.8]" src={app} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
