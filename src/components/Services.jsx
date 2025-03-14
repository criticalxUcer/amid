import React from "react";
import vector from "/vector.svg";
import arr from '/arr.svg'
import vec from "/vec.svg";
import vec1 from "/vec1.svg";

const Services = () => {
  return (
    <>
      <div className="container pt-32 flex flex-col items-center justify-center px-[180px]">
        <div className="row flex items-center justify-between">
          <div className="left">
            <p className="text-red-600 font-medium">services</p>
            <h1 className="text-gray-900 text-[48px] font-extrabold w-[600px]">
              Exactly Everything You Need For Business
            </h1>
          </div>
          <div className="right">
            <h3 className="text-gray-600">
              We understand how desperatly you want to grow in the business
              world & our motto is to help you with practicale idea and plan{" "}
            </h3>
          </div>
        </div>
        <div className="row2 pt-22">
          <div className="cards flex flex-wrap items-center justify-between">
            <div className="card w-[300px] ">
              <img src={vector} alt="" />
              <h2 className="font-bold text-[22px]">Business Growing Support</h2>
              <p className="text-gray-600">Get every necessary support to grow as business startup</p>
              <button className="flex gap-3 font-[600] text-green-950">Learn More <img src={arr} alt="" /></button>
            </div>
            <div className="card w-[300px]">
              <img src={vec} alt="" />
              <h2 className="font-bold text-[22px]">Community Attachment</h2>
              <p className="text-gray-600">A lifetime attachment with the community dreamer</p>
              <button className="flex gap-3 font-[600] text-green-950">Learn More <img src={arr} alt="" /></button>
            </div>
            <div className="card w-[300px]">
              <img src={vec1} alt="" />
              <h2 className="font-bold text-[22px]">Exceptional Discovery Plans</h2>
              <p className="text-gray-600">An exceptional plan can take you ahead millions of step which  we discove</p>
              <button className="flex gap-3 font-[600] text-green-950">Learn More <img src={arr} alt="" /></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
