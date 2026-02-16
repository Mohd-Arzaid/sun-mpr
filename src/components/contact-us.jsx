import React from "react";

const ContactUs = () => {
  return (
    <div className="max-w-[1232px] px-4 mx-auto pt-12">
      <div className=" flex gap-4 items-center">
        <div className="bg-purple-800 w-1 h-8"></div>
        <div className="font-inter text-neutral-800 uppercase text-xl font-medium">
          Contact Us{" "}
        </div>
      </div>

      <div className="font-inter text-neutral-500 text-lg font-medium mt-5">
        Sun Certifications India – expert consulting and implementation of
        certification projects worldwide.
      </div>

      <div className="mt-8 rounded-lg border border-blue-200 bg-blue-50/80 px-8 flex justify-between items-center py-5">
        <div className="flex flex-col gap-4">
          <div className="font-inter text-neutral-800 font-medium text-xl">
            Contact Details
          </div>
          <div className="flex flex-col gap-2">
            <div className="font-inter text-neutral-500 text-base">
              T +49-69-2713769261 [EU]
            </div>
            <div className="font-inter text-neutral-500 text-base">
              T +1-773-654-2673 (US)
            </div>
            <div className="font-inter text-neutral-500 text-base">
              info@certification-india.com
            </div>
          </div>
        </div>
        <img src="/customer-helper-icon.svg" alt="Contact Us"
        className="size-28 object-contain shrink-0"
        />
      </div>
    </div>
  );
};

export default ContactUs;
