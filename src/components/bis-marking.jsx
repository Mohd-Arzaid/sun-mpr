import React from "react";

const BISMarking = () => {
  return (
    <div className="max-w-[1232px] px-4 mx-auto pt-12">
      <div className=" flex gap-4 items-center">
        <div className="bg-purple-800 w-1 h-8"></div>
        <div className="font-inter text-neutral-800 uppercase text-xl font-medium">
          BIS Marking – ISI Mark and CRS Logo
        </div>
      </div>

      <div className="font-inter text-neutral-500 text-lg font-medium mt-5">
        After receiving the BIS certificate, you can mark your product.
        Initially, two types of markings were in use: the ISI mark for products
        certified under BIS-ISI, and the CRS mark for those under BIS-CRS.{" "}
      </div>

      <div className="border border-neutral-300 mt-8 py-6 px-8 flex justify-between gap-16">
        <div className="flex items-center gap-10">
          <div className="font-inter text-neutral-500">
            BIS-CRS Logo (CRS-Mark) for BIS-Registration
          </div>

          <img src="/bis-crs-logo.png" alt="BIS-CRS Logo" />
        </div>

        <div className="w-px h-90%  bg-neutral-300 shrink-0" />

        <div className="flex items-center gap-10">
          <div className="font-inter text-neutral-500">
            BIS-ISI Logo (BIS Standard Mark) for BIS-Certification
          </div>

          <img src="/bis-isi-logo.png" alt="BIS-ISI Logo" />
        </div>
      </div>

      <div className="font-inter text-neutral-500 mt-8">
        Together with the marking license, the CM/L BIS license number (for
        BIS-ISI) or the R-number (for BIS-CRS) is also assigned. This will be a
        7 or 8 digit number to simplify the identification of a product in the
        production plant.
      </div>
    </div>
  );
};

export default BISMarking;
