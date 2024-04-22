import React from "react";
import { footer2, footer3, footer4, footer5 } from "../../assets";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="mt-20 hidden bg-[#F8F8F8] md:block">
        <div className="grid px-24 py-10 md:grid-cols-[47%_17%_20%_20%]">
          <div className="flex flex-col gap-3">
            <div className="flex">
              <img src={footer5} alt="logo" />
            </div>
            <p className="w-3/5 text-lg">
              Geolabs is a private virtual network that has unique features and
              has high security.
            </p>
            <div className="-mx-5 flex justify-start">
              <img
                src={footer2}
                alt="logo"
                className="h-20 w-20 cursor-pointer shadow-md shadow-slate-200"
              />
              <img
                src={footer3}
                alt="logo"
                className="h-20 w-20 cursor-pointer shadow-md shadow-slate-200"
              />
              <img
                src={footer4}
                alt="logo"
                className="h-20 w-20 cursor-pointer shadow-md shadow-slate-200"
              />
            </div>
            <p className="text-lg md:-mt-4">©2024EBDESK</p>
          </div>
          <div className="flex flex-col gap-2 px-12">
            <h3 className="mb-4 text-xl font-semibold">Product</h3>
            <a href="#" className="text-md">
              Download
            </a>
            <a href="#" className="text-md">
              Pricing
            </a>
            <a href="#" className="text-md">
              Locations
            </a>
            <a href="#" className="text-md">
              Server
            </a>
            <a href="#" className="text-md">
              Countries
            </a>
            <a href="#" className="text-md">
              Blog
            </a>
          </div>
          <div className="flex flex-col gap-2 px-12">
            <h3 className="mb-4 text-xl font-semibold">Engage</h3>
            <a href="#" className="text-md">
              Geolabs ?
            </a>
            <a href="#" className="text-md">
              FAQ
            </a>
            <a href="#" className="text-md">
              Tutorials
            </a>
            <a href="#" className="text-md">
              About Us
            </a>
            <a href="#" className="text-md">
              Privacy Policy
            </a>
            <a href="#" className="text-md">
              Terms of Service
            </a>
          </div>
          <div className="flex flex-col gap-2 px-12">
            <h3 className="mb-4 text-xl font-semibold">Earn Money</h3>
            <a href="#" className="text-md">
              Affiliate
            </a>
            <a href="#" className="text-md">
              Become Partner
            </a>
          </div>
        </div>
      </div>

      <div className="mt-14 block md:hidden">
        <div className="h-16 bg-[#F8F8F8] text-center">
          <p className="text-lg md:-mt-4">©2024EBDESK</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
