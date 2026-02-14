import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="max-w-[1232px] px-4 py-10 mx-auto">
      <div className="flex items-center justify-between">
        <CompanyLogo />
        <div className="flex flex-col gap-4">
          <div className="flex gap-6 items-center justify-center">
            <img
              src="/customer-helper-icon.svg"
              alt="Customer Helper Icon"
              className="size-8 object-contain"
            />
            <img
              src="/world-icon.svg"
              alt="World Icon"
              className="size-8 object-contain"
            />
            <div className="text-sm font-inter text-neutral-800">
              Choose Language
            </div>
            <img
              src="/search-icon.svg"
              alt="Search Icon"
              className="size-8 object-contain"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-5">
        <div className="flex flex-col gap-4">
          <div className="flex gap-8 items-center justify-center">
            <div className="font-inter text-neutral-800 font-medium text-lg ">
              AIS/TAC
            </div>
            <div className="font-inter text-neutral-800 font-medium text-lg ">
              BIS
            </div>
            <div className="font-inter text-neutral-800 font-medium text-lg ">
              WPC
            </div>
            <div className="font-inter text-neutral-800 font-medium text-lg ">
              TEC
            </div>
            <div className="font-inter text-neutral-800 font-medium text-lg ">
              PESO
            </div>
            <div className="font-inter text-neutral-800 font-medium text-lg ">
              Other Services
            </div>
            <div className="font-inter text-neutral-800 font-medium text-lg ">
              Company
            </div>
          </div>

          <div className="w-full h-px bg-purple-600"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

const CompanyLogo = () => {
  return (
    <Link to="/" className="flex items-center gap-2.5">
      <img
        src="/company-logo/company-logo.webp"
        alt="Sun Certifications India logo"
        className="size-12 object-contain shrink-0"
      />
      <div className="text-center mt-0.5">
        <div className="font-inter text-neutral-900 font-semibold text-xl uppercase">
          Sun Certifications India
        </div>
        <div className="font-inter text-neutral-600 font-medium -mt-0.5 tracking-tight text-sm uppercase">
          Simplifying Certifications
        </div>
      </div>
    </Link>
  );
};
