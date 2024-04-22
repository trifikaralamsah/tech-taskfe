import React from "react";
import {
  check,
  homeDraw1,
  homeDraw2,
  homeDraw3,
  homeDraw4,
  homeDraw5,
  homeDraw6,
  homeDraw7,
  homeDraw8,
  homeGroup1,
  homeIcon1,
  homeIcon2,
  homeIcon3,
  homeImage1,
} from "../assets";

const HomePage = () => {
  return (
    <React.Fragment>
      <div className="mt-14 h-full w-full">
        <div className="bg-white md:px-24">
          <div className="grid h-96 w-full md:grid-cols-2">
            <div className="flex flex-col justify-center gap-2 px-4">
              <h1 className="text-[65px] font-semibold">Observe Your Power</h1>
              <p className="text-md text-slate-600">
                Trafalgar provides progressive, and affordable healthcare,
                accessible on mobile and online for everyone
              </p>
              <button className="mt-2 w-1/3 rounded-full bg-[#2161D5] py-2 shadow-xl shadow-blue-200 hover:bg-blue-900">
                <span className="font-semibold text-white">See a demo</span>
              </button>
            </div>
            <div className="flex items-center justify-center">
              <img src={homeDraw1} alt="home" className="w-80" />
            </div>
          </div>

          <div className=" grid h-56 w-full">
            <div className="flex flex-col items-center justify-center gap-4 px-4">
              <h1 className="invisible text-[60px] font-semibold md:visible">
                Why choose us?
              </h1>
              <p className="text-md w-1/2 text-center text-slate-600">
                We provide to you the best choiches for you. The leading
                political campaign intelligence platform
              </p>
            </div>
          </div>

          <div className="grid h-80 w-full gap-8 md:grid-cols-3">
            <div className="flex h-[max-content] flex-col items-start justify-center gap-4 rounded-xl border px-8 py-14 hover:border-2 hover:border-blue-500 md:border-slate-600">
              <img src={homeIcon1} alt="home" className="w-20" />
              <p className="text-xl font-semibold">Data</p>
              <p className="text-md font-semibold text-slate-600">
                The biggest regional data, development, and POI data.
              </p>
            </div>
            <div className="flex h-[max-content] flex-col items-start justify-center gap-4 rounded-xl border border-slate-600 px-8 py-14 hover:border-2 hover:border-blue-500">
              <img src={homeIcon2} alt="home" className="w-20" />
              <p className="text-xl font-semibold">Technology</p>
              <p className="text-md font-semibold text-slate-600">
                Geospatial platform with advanced analysis that suit your
                neetds.
              </p>
            </div>
            <div className="flex h-[max-content] flex-col items-start justify-center gap-4 rounded-xl border border-slate-600 px-8 py-14 hover:border-2 hover:border-blue-500">
              <img src={homeIcon3} alt="home" className="w-20" />
              <p className="text-xl font-semibold">Services</p>
              <p className="text-md font-semibold text-slate-600">
                An expert team help you to analyze your poltical power.
              </p>
            </div>
          </div>

          <div className="invisible grid h-56 w-full md:visible">
            <div className="flex flex-col items-center justify-center">
              <button className="border-1 mt-2 w-1/5 rounded-full border-[#2161D5] py-3 hover:border-2">
                <span className="font-semibold text-[#2161D5]">Learn More</span>
              </button>
            </div>
          </div>
        </div>

        <div className="relative mt-14 h-[1400px] bg-[#2161D5]">
          <div className="grid md:grid-cols-2">
            <div>
              <img
                src={homeGroup1}
                alt="home"
                className="absolute left-20 top-10 w-80"
              ></img>
              <img
                src={homeImage1}
                alt="homeImage"
                className="invisible absolute left-48 top-[-70px] w-72 md:visible"
              ></img>
            </div>
            <div className="ml-6 flex h-72 w-3/4 flex-col justify-end gap-3 py-2 md:ml-0">
              <h3 className="text-[35px] font-semibold text-white">
                APP Overview 1
              </h3>
              <p className="text-white">
                Advanced spatial analysis to understand where and why things
                happen, identify the target constituency, and optimize the
                campaign.{" "}
              </p>
              <button className="border-1 mt-2 w-1/3 rounded-full border-white py-3 hover:border-2 hover:border-white">
                <span className="font-semibold text-white">Learn More</span>
              </button>
            </div>
          </div>

          <div className="mt-40 grid md:grid-cols-2">
            <div className="ml-8 flex h-72 w-full  flex-col justify-end gap-3 px-24 py-2">
              <h3 className="text-[35px] font-semibold text-white">
                APP Overview 2
              </h3>
              <p className="text-white">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              <button className="border-1 mt-2 w-1/3 rounded-full border-white py-3 hover:border-2 hover:border-white">
                <span className="font-semibold text-white">Learn More</span>
              </button>
            </div>
            <div className="flex justify-end">
              <img
                src={homeGroup1}
                alt="home"
                className="absolute right-44 w-80"
              ></img>
              <img
                src={homeDraw2}
                alt="homeImage"
                className="invisible absolute right-48 w-80 md:visible"
              ></img>
            </div>
          </div>

          <div className="mt-40 grid md:grid-cols-2">
            <div className="flex justify-end">
              <img
                src={homeGroup1}
                alt="home"
                className="absolute left-44 w-80"
              ></img>
              <img
                src={homeDraw3}
                alt="homeImage"
                className="invisible absolute left-48 w-80 md:visible"
              ></img>
            </div>
            <div className="flex h-72 w-full  flex-col justify-end gap-3 px-24 py-2">
              <h3 className="text-[35px] font-semibold text-white">
                APP Overview 3
              </h3>
              <p className="text-white">
                Advanced spatial analysis to understand where and why things
                happen, identify the target constituency, and optimize the
                campaign.
              </p>
              <button className="border-1 mt-2 w-1/3 rounded-full border-white py-3 hover:border-2 hover:border-white">
                <span className="font-semibold text-white">Learn More</span>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-14 bg-white md:px-24">
          <div className="flex items-center justify-center text-center">
            <div className="flex w-1/2 flex-col items-center justify-center gap-4">
              <h3 className="text-[35px] font-semibold">
                How it works for you?
              </h3>
              <p className="text-md text-slate-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
              <button className="border-1 mt-2 w-1/3 rounded-full bg-[#2161D5] py-3 shadow-lg shadow-blue-400  hover:bg-blue-800">
                <span className="font-semibold text-white">See a Demo</span>
              </button>
            </div>
          </div>

          <div className="mt-14 grid gap-8 px-20 md:grid-cols-2">
            <div className="flex flex-col items-center justify-center gap-4 border border-slate-300 py-4 text-center">
              <img src={homeDraw4} alt="home" className="w-80" />
              <h3 className="text-xl font-semibold">Geographic Segmentation</h3>
              <p className="text-md w-1/2 text-slate-600">
                Consist of creating differend groups of customers based on
                geographic boundaries
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 border border-slate-300 py-4 text-center">
              <img src={homeDraw6} alt="home" className="w-80" />
              <h3 className="text-xl font-semibold">
                Demographic Segmentation
              </h3>
              <p className="text-md w-3/4 text-slate-600">
                Consist of creating differend groups of customers based on
                geographic boundaries
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-8 px-20 md:grid-cols-2">
            <div className="flex flex-col items-center justify-center gap-4 border border-slate-300 py-4 text-center">
              <img src={homeDraw7} alt="home" className="w-80" />
              <h3 className="text-xl font-semibold">
                Psychograpich Segmentation
              </h3>
              <p className="text-md w-1/2 text-slate-600">
                Consist of creating differend groups of customers based on
                geographic boundaries
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 border border-slate-300 py-4 text-center">
              <img src={homeDraw8} alt="home" className="w-80" />
              <h3 className="text-xl font-semibold">Behavorial Segmentation</h3>
              <p className="text-md w-1/2 text-slate-600">
                Consist of creating differend groups of customers based on
                geographic boundaries
              </p>
            </div>
          </div>

          <div className="mt-24 flex items-center justify-center text-center">
            <div className="flex w-1/2 flex-col items-center justify-center gap-4">
              <h3 className="text-[35px] font-semibold">Plans and Pricing</h3>
              <p className="text-md text-slate-600">
                We provide to you the best choiches for you. The leading
                political campaign intelligence platform
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-8 px-20 md:grid-cols-2">
            <div className="flex flex-col justify-center gap-6 border border-slate-400 py-10 md:pr-10">
              <div className="mx-auto">
                <img src={homeDraw5} alt="home" className="mx-auto  w-48" />
                <h3 className="text-center text-xl font-semibold">
                  Individual Plan
                </h3>
                <div className="mt-6 flex gap-6">
                  <img src={check} alt="check" className="w-10" />
                  <p className="text-md text-slate-600">1 User</p>
                </div>
                <div className="mt-2 flex gap-6">
                  <img src={check} alt="check" className="w-10" />
                  <p className="text-md text-slate-600">1 Basic Analysis</p>
                </div>
                <div className="mt-2 flex gap-6">
                  <img src={check} alt="check" className="w-10" />
                  <p className="text-md text-slate-600">
                    Unlimited Select Services
                  </p>
                </div>
                <div className="mt-24 flex flex-col gap-6 text-center">
                  <h3 className="text-2xl">
                    <span className="font-bold">$99</span> / mo
                  </h3>{" "}
                  <button className="mt-2 rounded-full border-2 border-[#2161D5] py-3 text-blue-500 shadow-lg shadow-blue-200 hover:bg-slate-200">
                    <span className="px-20 font-semibold ">Select</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-6 border border-slate-400 py-10 md:pr-10">
              <div className="mx-auto">
                <img src={homeDraw5} alt="home" className="mx-auto  w-48" />
                <h3 className="text-center text-xl font-semibold">
                  Parties Plan
                </h3>
                <div className="mt-6 flex gap-6">
                  <img src={check} alt="check" className="w-10" />
                  <p className="text-md text-slate-600">Unlimited User</p>
                </div>
                <div className="mt-2 flex gap-6">
                  <img src={check} alt="check" className="w-10" />
                  <p className="text-md text-slate-600">Basic Analysis</p>
                </div>
                <div className="mt-2 flex gap-6">
                  <img src={check} alt="check" className="w-10" />
                  <p className="text-md text-slate-600">
                    Unlimited Select Services
                  </p>
                </div>
                <div className="mt-2 flex gap-6">
                  <img src={check} alt="check" className="w-10" />
                  <p className="text-md text-slate-600">Free extend 1 Month</p>
                </div>
                <div className="mt-14 flex flex-col gap-6 text-center">
                  <h3 className="text-2xl">
                    <span className="font-bold">$500</span> / mo
                  </h3>{" "}
                  <button className="border-1 mt-2 rounded-full bg-[#2161D5] py-3 shadow-lg shadow-blue-200 hover:bg-blue-800">
                    <span className="px-20 font-semibold text-white">
                      Select
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14 px-20">
            <div className="text-center">
              <h3 className="text-[35px] font-semibold">
                Frequenly Asked Questions
              </h3>
            </div>
            <div className="mt-10 flex flex-col gap-6">
              <div className="grid gap-6 border border-slate-400 px-4 py-4 md:grid-cols-[80%_20%] md:px-14">
                <div className="py-10">
                  <h3 className="text-2xl font-semibold text-blue-500">
                    What do you mean by public-facing usage?
                  </h3>
                  <p className="text-md mt-3 text-slate-600">
                    We define public-facing usage as leveraging CARTO to power
                    enterprise-scale applications that are made available to
                    external parties such as clients or the public, as opposed
                    to internal demonstration-only applications.
                  </p>
                </div>
                <div className=" flex items-center justify-center">
                  <h3 className="text-4xl font-semibold text-blue-500">-</h3>
                </div>
              </div>
              <div className="grid gap-6 border border-slate-400 px-4 py-4 md:grid-cols-[80%_20%] md:px-14">
                <div className="py-10">
                  <h3 className="text-2xl font-semibold">
                    Can i buy more storage for my individual plan?
                  </h3>
                </div>
                <div className=" flex items-center justify-center">
                  <h3 className="text-4xl font-semibold">+</h3>
                </div>
              </div>
              <div className="grid gap-6 border border-slate-400 px-4 py-4 md:grid-cols-[80%_20%] md:px-14">
                <div className="py-10">
                  <h3 className="text-2xl font-semibold">
                    What happens to my data after the trial or if i cancel my
                    subscription?
                  </h3>
                </div>
                <div className=" flex items-center justify-center">
                  <h3 className="text-4xl font-semibold">+</h3>
                </div>
              </div>
              <div className="grid gap-6 border border-slate-400 px-4 py-4 md:grid-cols-[80%_20%] md:px-14">
                <div className="py-10">
                  <h2 className="text-2xl font-semibold">
                    Can i cancel my monthly or annual subscription?
                  </h2>
                </div>
                <div className=" flex items-center justify-center">
                  <h3 className="text-4xl font-semibold">+</h3>
                </div>
              </div>
              <div className="flex justify-center">
                <button className="border-1 rounded-full border-2 border-blue-500 py-4 shadow-lg shadow-blue-200 hover:border-blue-900 hover:bg-slate-200">
                  <span className="px-4 font-bold text-blue-500 md:px-16">
                    Add Question
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div className="mt-20">
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
      </div>
    </React.Fragment>
  );
};

export default HomePage;
