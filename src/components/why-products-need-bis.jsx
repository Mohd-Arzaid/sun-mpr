import React from "react";

const WhyProductsNeedBIS = () => {
  return (
    <div className="max-w-[1232px] px-4 mx-auto">
      <div className=" flex gap-4 items-center">
        <div className="bg-purple-800 w-1 h-8"></div>
        <div className="font-inter text-neutral-800 uppercase text-xl font-medium">
          Which products need BIS?
        </div>
      </div>

      <div className="font-inter text-neutral-500 text-lg font-medium mt-5">
        Since new products are constantly being added to the BIS catalog, it is
        recommended to clarify the certification requirements of the individual
        products with the authorities before attempting import to India.
      </div>

      <div className="font-inter text-neutral-500 text-lg font-medium mt-5">
        The affected product groups include:
      </div>

      <div className="border border-neutral-300 my-8 flex flex-col max-w-4xl mx-auto">
        <div className="flex items-center justify-between w-full">
          <div className="bg-neutral-100 h-40 w-full flex items-center justify-center">
            <div className="font-inter text-neutral-800 font-medium text-2xl">
              ISI MARK
            </div>
          </div>
          <div className="h-40 w-full flex gap-1 items-center justify-center">
            <div className="flex flex-col gap-1 items-start">
              <div className="flex items-center justify-center gap-2">
                <span className="rounded-full bg-neutral-400 w-1.5 h-1.5"></span>
                <div className="font-inter text-neutral-500  text-base">
                  Cables
                </div>
              </div>

              <div className="flex items-center justify-center gap-2">
                <span className="rounded-full bg-neutral-400 w-1.5 h-1.5"></span>
                <div className="font-inter text-neutral-500  text-base">
                  Safety Glass
                </div>
              </div>

              <div className="flex items-center justify-center gap-2">
                <span className="rounded-full bg-neutral-400 w-1.5 h-1.5"></span>
                <div className="font-inter text-neutral-500  text-base">
                  Automotive Rims
                </div>
              </div>

              <div className="flex items-center justify-center gap-2">
                <span className="rounded-full bg-neutral-400 w-1.5 h-1.5"></span>
                <div className="font-inter text-neutral-500  text-base">
                  Steel
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between w-full border-t border-neutral-300">
          <div className="bg-neutral-100 h-40 w-full flex items-center justify-center">
            <div className="font-inter text-neutral-800 font-medium text-2xl">
              CRS MARK
            </div>
          </div>
          <div className="h-40 w-full flex gap-1 items-center justify-center">
            <div className="flex flex-col gap-1 items-start">
              <div className="flex items-center justify-center gap-2">
                <span className="rounded-full bg-neutral-400 w-1.5 h-1.5"></span>
                <div className="font-inter text-neutral-500  text-base">
                  Cameras
                </div>
              </div>

              <div className="flex items-center justify-center gap-2">
                <span className="rounded-full bg-neutral-400 w-1.5 h-1.5"></span>
                <div className="font-inter text-neutral-500  text-base">
                  Power Supplies
                </div>
              </div>

              <div className="flex items-center justify-center gap-2">
                <span className="rounded-full bg-neutral-400 w-1.5 h-1.5"></span>
                <div className="font-inter text-neutral-500  text-base">
                  LED Lights
                </div>
              </div>

              <div className="flex items-center justify-center gap-2">
                <span className="rounded-full bg-neutral-400 w-1.5 h-1.5"></span>
                <div className="font-inter text-neutral-500  text-base">
                  Displays/ Monitors
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="font-inter text-neutral-500 mt-5">
        The complete list of products currently covered by the mandatory BIS-
        certification and BIS-CRS registration can be found here.
      </div>
    </div>
  );
};

export default WhyProductsNeedBIS;
