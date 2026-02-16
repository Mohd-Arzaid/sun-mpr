import React from "react";

const MPRServices = () => {
  return (
    <div className="max-w-[1232px] px-4 mx-auto pt-12">
      <div className=" flex gap-4 items-center">
        <div className="bg-purple-800 w-1 h-8"></div>
        <div className="font-inter text-neutral-800 uppercase text-xl font-medium">
          MPR Services
        </div>
      </div>

      <div className="bg-[url('/background-image.png')] mt-8 flex flex-col gap-5 p-8">
        <div className="font-inter text-4xl text-white font-medium">
          Your One-Stop Certification Solution.
        </div>
        <div className="font-inter text-white ">
          Our complete package for product certifications for India.
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex items-center  gap-8 w-full border border-neutral-300 bg-neutral-200 px-8 py-4">
            <img
              src="/personal-consultant.png"
              alt="Personal Consultant"
              className="size-12 object-contain shrink-0"
            />
            <div className="font-inter text-neutral-800 font-medium text-xl">
              <span className="font-bold">Personal</span> consultant for all
              questions about BIS
            </div>
          </div>

          <div className="flex items-center  gap-8 w-full border border-neutral-300 bg-neutral-200 px-8 py-4">
            <img
              src="/personal-consultant.png"
              alt="Personal Consultant"
              className="size-12 object-contain shrink-0"
            />
            <div className="font-inter text-neutral-800 font-medium text-xl">
              <span className="font-bold">Clarification</span> of the
              certification requirements
            </div>
          </div>

          <div className="flex items-center  gap-8 w-full border border-neutral-300 bg-neutral-200 px-8 py-4">
            <img
              src="/personal-consultant.png"
              alt="Personal Consultant"
              className="size-12 object-contain shrink-0"
            />
            <div className="font-inter text-neutral-800 font-medium text-xl">
              <span className="font-bold">Application</span> preparation
            </div>
          </div>

          <div className="flex items-center  gap-8 w-full border border-neutral-300 bg-neutral-200 px-8 py-4">
            <img
              src="/personal-consultant.png"
              alt="Personal Consultant"
              className="size-12 object-contain shrink-0"
            />
            <div className="font-inter text-neutral-800 font-medium text-xl">
              <span className="font-bold">We provide</span> a local Authorized
              India Representative (AIR)
            </div>
          </div>

          <div className="flex items-center  gap-8 w-full border border-neutral-300 bg-neutral-200 px-8 py-4">
            <img
              src="/personal-consultant.png"
              alt="Personal Consultant"
              className="size-12 object-contain shrink-0"
            />
            <div className="font-inter text-neutral-800 font-medium text-xl">
              <span className="font-bold">Preparation</span> and support for the
              audit
            </div>
          </div>

          <div className="flex items-center  gap-8 w-full border border-neutral-300 bg-neutral-200 px-8 py-4">
            <img
              src="/personal-consultant.png"
              alt="Personal Consultant"
              className="size-12 object-contain shrink-0"
            />
            <div className="font-inter text-neutral-800 font-medium text-xl">
              <span className="font-bold">Organization</span> of testing
            </div>
          </div>

          <div className="flex items-center  gap-8 w-full border border-neutral-300 bg-neutral-200 px-8 py-4">
            <img
              src="/personal-consultant.png"
              alt="Personal Consultant"
              className="size-12 object-contain shrink-0"
            />
            <div className="font-inter text-neutral-800 font-medium text-xl">
              <span className="font-bold">Advice</span> on how to mark your
              products, if needed
            </div>
          </div>

          <div className="flex items-center  gap-8 w-full border border-neutral-300 bg-neutral-200 px-8 py-4">
            <img
              src="/personal-consultant.png"
              alt="Personal Consultant"
              className="size-12 object-contain shrink-0"
            />
            <div className="font-inter text-neutral-800 font-medium text-xl">
              <span className="font-bold">Complete</span> organization of the
              follow-up certification
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MPRServices;
