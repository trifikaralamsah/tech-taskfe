import React from "react";
import {
  aboutUs1,
  aboutUs2,
  aboutUs3,
  aboutUs4,
  aboutUs5,
  aboutUs6,
  elipseBig,
  elipseSmall,
  kutip2,
} from "../assets";
import "../style/about-us.css";

const AboutUs = () => {
  return (
    <React.Fragment>
      <div className="relative h-[500px] w-full bg-[#2161D5]">
        <img
          src={elipseBig}
          alt="elipse"
          className="absolute left-1/2 w-1/2 -translate-x-1/2 transform"
        />
        <img
          src={elipseSmall}
          alt="elipse"
          className="absolute left-1/2 top-1/2 w-1/3 -translate-x-1/2 -translate-y-1/2 transform"
        />
        <div className="flex h-full items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-2 px-6 text-center md:w-3/6">
            <h1 className="text-4xl font-semibold text-white">About Us</h1>
            <p className="text-lg text-white">
              A small company offering data-driven solutions for campaign
              effectiveness using spatial data and detailed analysis of target
              audience (voters). Use technology that unites spatial data science
              and political science.
            </p>
            <button className="border-1 relative mt-6 rounded-full border-2 bg-white py-3 text-blue-500 hover:cursor-pointer hover:bg-slate-200">
              <span className="px-8 font-bold md:px-16 ">Contact Me</span>
            </button>
          </div>
        </div>
      </div>

      <div className="mt-14 bg-white md:px-24">
        <div className="mx-auto px-6 md:w-1/2">
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <img src={kutip2} alt="kutip2" />
            <p className="text-lg text-slate-600">
              In just small steps you’ll connected directly to our technology.
              Knowledge about your own-power, your rivals, your voters, and your
              region in Election.
            </p>
          </div>
        </div>

        <div className="mt-14 text-center">
          <h3 className="text-3xl font-semibold text-slate-600">
            Our Advisors
          </h3>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          <div className="flex flex-col items-center justify-center gap-3">
            <img src={aboutUs1} alt="About us 1" />
            <h3 className="text-lg font-semibold">Xavier Oswald</h3>
            <p className="text-slate-600">CO-FONDER DEVELOPER</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3">
            <img src={aboutUs5} alt="About us 1" />
            <h3 className="text-lg font-semibold">Sara Creighton</h3>
            <p className="text-slate-600">CO-FONDER DEVELOPER</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3">
            <img src={aboutUs6} alt="About us 1" />
            <h3 className="text-lg font-semibold">Brandon Ogden</h3>
            <p className="text-slate-600">PROJECT MANAGER</p>
          </div>
        </div>

        <div className="mt-20 text-center">
          <div className="flex flex-col items-center justify-center gap-4 px-4">
            <h3 className="text-3xl font-semibold text-slate-600">
              What Political Figure Say
            </h3>
            <p className="text-lg text-slate-600 md:w-1/2">
              These are the stories of political figure who have joined us with
              great pleasure when using this crazy feature.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          <div className="rounded-lg border border-slate-400 px-8 py-8">
            <div className="flex items-center gap-3">
              <img src={aboutUs2} alt="about 2" />
              <div className="flex flex-col">
                <h3>Airlangga Hartanto</h3>
                <p className="text-sm">
                  Menteri Koordinator dan Perekonomian RI
                </p>
              </div>
            </div>
            <div className="mt-3 text-justify">
              <p>
                Saya minta kepada segenap pengurus DPD, provinsi, kabupten dan
                kota, untuk kita harus memiliki roadmap 2024. Di tahun melakukan
                penggalangan opini masyarakat
              </p>
            </div>
          </div>
          <div className="rounded-lg border border-slate-400 px-8 py-8">
            <div className="flex items-center  gap-3">
              <img src={aboutUs3} alt="about 2" />
              <div className="flex flex-col">
                <h3>Jokowi Dodo</h3>
                <p className="text-sm">Presiden RI</p>
              </div>
            </div>
            <div className="mt-3 text-justify">
              <p>
                Daerah merupakan bagian dari pemerintah yang langsung
                berinteraksi dengan
              </p>
            </div>
          </div>
          <div className="rounded-lg border border-slate-400 px-8 py-8">
            <div className="flex items-center gap-3">
              <img src={aboutUs4} alt="about 2" />
              <div className="flex flex-col">
                <h3>Puan Maharani</h3>
                <p className="text-sm">Ketua DPR dan Fraksi PDI Perjuangan</p>
              </div>
            </div>
            <div className="mt-3 text-justify">
              <p>
                Daerah merupakan bagian dari pemerintah yang langsung
                berinteraksi dengan masyarakat ketikaproses demokratisasi
                berlangsung.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-24">
          <div className="grid gap-12 rounded-lg bg-[#2161D5] py-14 md:grid-cols-2">
            <div className="px-20">
              <h3 className="text-4xl font-semibold text-white">
                Subscribe Now for Get Special Features!
              </h3>
              <h4 className="mt-3 text-xl text-slate-300">
                Let's subscribe with us and find the fun.
              </h4>
            </div>
            <div className="flex items-center justify-center">
              <button className="rounded-lg bg-white py-4 hover:bg-slate-300">
                <span className="px-16 font-bold text-blue-500">
                  Subcribe Now
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutUs;
