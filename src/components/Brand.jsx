import React from "react";
import net from "/net.svg";
import forb from '/forb.svg'
import itel from '/itel.svg'
import fed from '/fed.svg'
import audio from '/auidio.svg'
import ang from '/ang.svg'
import sun from '/sun.svg'
import goto from '/goto.svg'

const Brand = () => {
  return (
    <>
      <div className="cards pt-60 px-30 flex flex-wrap justify-center gap-8">
        <div className="card bg-blue-200 w-[230px] flex items-center justify-center rounded-3xl px-[20px] py-[6px]">
          <img src={net} alt="" />
        </div>
        <div className="card bg-blue-200 w-[230px] flex items-center justify-center rounded-3xl px-[20px] py-[6px]">
          <img src={forb} alt="" />
        </div>
        <div className="card bg-blue-200 w-[230px] flex items-center justify-center rounded-3xl px-[20px] py-[6px]">
          <img src={itel} alt="" />
        </div>
        <div className="card bg-blue-200 w-[230px] flex items-center justify-center rounded-3xl px-[20px] py-[6px]">
          <img src={fed} alt="" />
        </div>
        <div className="card bg-blue-200 w-[230px] flex items-center justify-center rounded-3xl px-[20px] py-[6px]">
          <img src={audio} alt="" />
        </div>
        <div className="card bg-blue-200 w-[230px] flex items-center justify-center rounded-3xl px-[20px] py-[6px]">
          <img src={ang} alt="" />
        </div>
        <div className="card bg-blue-200 w-[230px] flex items-center justify-center rounded-3xl px-[20px] py-[6px]">
          <img src={sun} alt="" />
        </div>
        <div className="card bg-blue-200 w-[230px] flex items-center justify-center rounded-3xl px-[20px] py-[6px]">
          <img src={goto} alt="" />
        </div>
      </div>
    </>
  );
};

export default Brand;
