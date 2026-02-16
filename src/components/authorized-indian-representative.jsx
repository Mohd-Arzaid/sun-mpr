import React from "react";

const AuthorizedIndianRepresentative = () => {
  return (
    <div className="max-w-[1232px] px-4 mx-auto pt-12">
      <div className=" flex gap-4 items-center">
        <div className="bg-purple-800 w-1 h-8"></div>
        <div className="font-inter text-neutral-800 uppercase text-xl font-medium">
          AIR (Authorized Indian Representative)
        </div>
      </div>

      <div className="font-inter text-neutral-500 mt-5">
        The application for BIS approval must always be made through an
        Authorized Indian Representative (AIR). This is a representative in
        India authorized by the manufacturer who acts as a local contact for the
        Indian authorities and is responsible for submitting applications.
      </div>
    </div>
  );
};

export default AuthorizedIndianRepresentative;
