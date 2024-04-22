import React from "react";
import { footer2, footer3, footer4, footer5 } from "../../assets";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="mt-20 bg-[#F8F8F8]">
        <div className="grid grid-cols-[47%_17%_20%_20%] px-24 py-10">
          <div className="flex flex-col gap-3">
            <div className="flex">
              <img src={footer5} alt="logo" />
            </div>
            <p className="w-3/5 text-lg">
              Geolabs is a private virtual network that has unique features and
              has high security.
            </p>
            <div className="-mx-5 flex justify-start">
              <img src={footer2} alt="logo" className="w-30 h-20" />
              <img src={footer3} alt="logo" className="h-20 w-20" />
              <img src={footer4} alt="logo" className="h-20 w-20" />
            </div>
            <p className="-mt-4 text-lg">©2024EBDESK</p>
          </div>
          <div className="flex flex-col gap-2 px-12">
            <h3 className="mb-4 text-xl font-semibold">Product</h3>
            <p className="text-md">Download</p>
            <p className="text-md">Pricing</p>
            <p className="text-md">Locations</p>
            <p className="text-md">Server</p>
            <p className="text-md">Countries</p>
            <p className="text-md">Blog</p>
          </div>
          <div className="flex flex-col gap-2 px-12">
            <h3 className="mb-4 text-xl font-semibold">Engage</h3>
            <p className="text-md">Geolabs ?</p>
            <p className="text-md">FAQ</p>
            <p className="text-md">Tutorials</p>
            <p className="text-md">About Us</p>
            <p className="text-md">Privacy Policy</p>
            <p className="text-md">Terms of Service</p>
          </div>
          <div className="flex flex-col gap-2 px-12">
            <h3 className="mb-4 text-xl font-semibold">Earn Money</h3>
            <p className="text-md">Affiliate</p>
            <p className="text-md">Become Partner</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
