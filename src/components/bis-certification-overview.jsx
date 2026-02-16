import React from "react";

const overviewRows = [
  {
    label: "Validity of the Certificate",
    value: "1-2 years (ISI = 1 year, CRS = 2 years)",
    rightBg: "bg-white",
  },
  {
    label: "Certification Estimated Timing",
    value: "BIS-ISI Certification 6-8 months\nBIS-CRS registration: 2-3 months",
    rightBg: "bg-neutral-50",
  },
  {
    label: "Marking",
    value:
      "Products covered under BIS-ISI must be marked with an ISI logo\n\nBIS-CRS: Products must be marked with the so-called BIS-CRS logo",
    rightBg: "bg-white",
  },
  {
    label: "Testing Required?",
    value: "ISI & CRS: Yes",
    rightBg: "bg-neutral-50",
  },
  {
    label: "Factory Audit Required?",
    value: "Only for BIS-ISI",
    rightBg: "bg-white",
  },
  {
    label: "Representative in the country",
    value:
      "AIR (Authorized Indian Representative) required in all cases",
    rightBg: "bg-neutral-50",
  },
  {
    label: "Follow-Up Process",
    value:
      "Follow-up inspections at the plant are not currently implemented. However, the authority may request product tests during the validity period of the certificate.",
    rightBg: "bg-white",
  },
];

const BISCertificationOverview = () => {
  return (
    <div className="max-w-[1232px] px-4 mx-auto pt-12 pb-12">
      <div className=" flex gap-4 items-center">
        <div className="bg-purple-800 w-1 h-8"></div>
        <div className="font-inter text-neutral-800 uppercase text-xl font-medium">
          BIS Certification Overview
        </div>
      </div>

      <div className="border border-neutral-300 mt-8 overflow-hidden">
        <div className="divide-y divide-white">
          {overviewRows.map((row) => (
            <div key={row.label} className="flex">
              <div className="font-inter text-neutral-800 font-medium text-base w-[min(280px,35%)] shrink-0 px-8 py-4 bg-neutral-100">
                {row.label}
              </div>
              <div
                className={`font-inter text-neutral-800 text-base px-8 py-4 flex-1 whitespace-pre-line ${row.rightBg}`}
              >
                {row.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BISCertificationOverview;
