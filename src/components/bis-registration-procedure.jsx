import React from "react";
import { Info } from "lucide-react";

const BISRegistrationProcedure = () => {
  return (
    <div className="max-w-[1232px] px-4 mx-auto pt-12">
      <div className=" flex gap-4 items-center">
        <div className="bg-purple-800 w-1 h-8"></div>
        <div className="font-inter text-neutral-800 uppercase text-xl font-medium">
          BIS Registration Procedure according to BIS Standards
        </div>
      </div>

      <div className="font-inter text-neutral-500 text-lg font-medium mt-5">
        The BIS certification process always includes:
      </div>

      <div className="grid grid-cols-5 gap-2 mt-8">
        <div className="bg-linear-to-b from-blue-800 to-blue-900 rounded-md w-full shadow-[inset_-12px_-8px_40px_#46464620]">
          <div className="flex flex-col gap-4 p-6">
            <div className="font-inter text-white font-medium text-xl">1</div>
            <div className="font-inter text-white text-base font-medium">
              Preparation of application documents and application at BIS
            </div>
          </div>
        </div>

        <div className="bg-linear-to-b from-blue-800 to-blue-900 rounded-md w-full shadow-[inset_-12px_-8px_40px_#46464620]">
          <div className="flex flex-col gap-4 p-6">
            <div className="font-inter text-white font-medium text-xl">2</div>
            <div className="font-inter text-white text-base font-medium">
              Only with ISI: Factory Inspection
            </div>
          </div>
        </div>

        <div className="bg-linear-to-b from-blue-800 to-blue-900 rounded-md w-full shadow-[inset_-12px_-8px_40px_#46464620]">
          <div className="flex flex-col gap-4 p-6">
            <div className="font-inter text-white font-medium text-xl">3</div>
            <div className="font-inter text-white text-base font-medium">
              Product tests in accredited laboratory
            </div>
          </div>
        </div>

        <div className="bg-linear-to-b from-blue-800 to-blue-900 rounded-md w-full shadow-[inset_-12px_-8px_40px_#46464620]">
          <div className="flex flex-col gap-4 p-6">
            <div className="font-inter text-white font-medium text-xl">4</div>
            <div className="font-inter text-white text-base font-medium">
              Issuance of certificate
            </div>
          </div>
        </div>

        <div className="bg-linear-to-b from-blue-800 to-blue-900 rounded-md w-full shadow-[inset_-12px_-8px_40px_#46464620]">
          <div className="flex flex-col gap-4 p-6">
            <div className="font-inter text-white font-medium text-xl">5</div>
            <div className="font-inter text-white text-base font-medium">
              Marking and labeling of the product
            </div>
          </div>
        </div>
      </div>

      <div className="font-inter text-neutral-500 mt-8">
        BIS certificates are valid between 1-2 years, depending on the relevant
        certification scheme. During this period additional tests may also be
        required to maintain the validity of the BIS certificate. The intervals
        at which the tests are required depend on the testing standards for the
        product type. Besides, BIS can randomly request manufacturers to submit
        their latest test reports to demonstrate compliance. Any change to the
        product or manufacturing process will require retesting to maintain the
        certificate validity.
      </div>

      <div className="font-inter text-neutral-500 mt-8 text-lg font-medium">
        Changes Requiring Notification Include the Following:
      </div>

      <div className="flex flex-col gap-1 items-start mt-4">
        <div className="flex items-center justify-center gap-2">
          <span className="rounded-full bg-neutral-400 w-1.5 h-1.5"></span>
          <div className="font-inter text-neutral-500">
            Product design change
          </div>
        </div>

        <div className="flex items-center justify-center gap-2">
          <span className="rounded-full bg-neutral-400 w-1.5 h-1.5"></span>
          <div className="font-inter text-neutral-500 ">
            Change to the product structure (for example adding another layer of
            material to the housing)
          </div>
        </div>

        <div className="flex items-center justify-center gap-2">
          <span className="rounded-full bg-neutral-400 w-1.5 h-1.5"></span>
          <div className="font-inter text-neutral-500 ">
            Changes to a core component or &quot;Key Components&quot; (for
            example any electrical component)
          </div>
        </div>

        <div className="flex items-center justify-center gap-2">
          <span className="rounded-full bg-neutral-400 w-1.5 h-1.5"></span>
          <div className="font-inter text-neutral-500 ">
            Raw material change
          </div>
        </div>

        <div className="flex items-center justify-center gap-2">
          <span className="rounded-full bg-neutral-400 w-1.5 h-1.5"></span>
          <div className="font-inter text-neutral-500 ">
            Change of raw material suppliers
          </div>
        </div>
      </div>

      <div className="font-inter mt-8 rounded-lg border border-blue-200 bg-blue-50/80 p-5 flex gap-4 items-start">
        <span className="shrink-0 size-9 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center">
          <Info className="size-5 text-blue-700" strokeWidth={2.25} />
        </span>
        <p className="text-neutral-600 text-base">
          An update to the BIS regulations may require you to submit a change
          request for your product. It is important to always stay up to date
          with the regulations and testing standards that apply to your product.
        </p>
      </div>
    </div>
  );
};

export default BISRegistrationProcedure;
