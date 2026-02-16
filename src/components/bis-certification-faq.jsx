import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqData = [
  {
    question:
      "How do I know if my products require BIS certification (ISI) or BIS registration (CRS)?",
    answer: (
      <>
        You can check our{" "}
        <a
          href="#"
          className="font-inter text-blue-700 underline hover:text-blue-800"
        >
          list of BIS required products
        </a>
        . You can also visit the{" "}
        <a
          href="https://bis.gov.in"
          target="_blank"
          rel="noopener noreferrer"
          className="font-inter text-blue-700 underline hover:text-blue-800"
        >
          Bureau of Indian Standards (BIS) website
        </a>{" "}
        for an overview of products requiring registration according to{" "}
        <a
          href="https://bis.gov.in"
          target="_blank"
          rel="noopener noreferrer"
          className="font-inter text-blue-700 underline hover:text-blue-800"
        >
          BIS standards
        </a>
        . We recommend checking with BIS as Indian standards and regulations
        change frequently. We would be happy to assist you in this process.
      </>
    ),
  },
  {
    question: "Which HS codes mandate a BIS certification?",
    answer:
      "BIS certification or registration is tied to product categories rather than specific HS codes in a single list. Products under BIS-ISI (Scheme I) and BIS-CRS (Scheme II) are defined by Indian Standards and MEITY notifications. We can help you map your product or HS code to the relevant BIS scheme.",
  },
  {
    question: "How long does the BIS certification process take?",
    answer:
      "BIS-ISI certification typically takes 6–8 months including application, factory inspection, and testing. BIS-CRS registration usually takes 2–3 months. Exact timelines depend on product type, laboratory availability, and documentation.",
  },
  {
    question: "How long is the BIS certificate valid?",
    answer:
      "BIS-ISI certificates are generally valid for 1 year; BIS-CRS registration is valid for 2 years. Renewal and surveillance requirements apply as per the relevant scheme.",
  },
  {
    question: "What is the best way to prepare for BIS certification?",
    answer:
      "Prepare application documents, identify an Authorized Indian Representative (AIR), and ensure products can be tested in BIS-accredited labs. We recommend a gap assessment and support with application and audit preparation.",
  },
  {
    question: "Which plants need to be audited?",
    answer:
      "Only BIS-ISI (Scheme I) requires a factory audit. BIS-CRS (Scheme II) does not require a plant audit.",
  },
  {
    question: "How do I have to label my products after certification?",
    answer:
      "BIS-ISI products must carry the ISI mark (BIS Standard Mark); BIS-CRS products must carry the BIS-CRS logo. The relevant license or registration number (e.g. CM/L number or R-number) must be displayed as specified by BIS.",
  },
  {
    question:
      "Do the authorities inform BIS certificate holders about changes in the regulations?",
    answer:
      "BIS and the relevant ministries publish amendments and notifications. Certificate holders are responsible for staying informed. We recommend subscribing to official updates and reviewing regulations periodically.",
  },
];

const BISCertificationFAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="max-w-[1232px] px-4 mx-auto pt-12">
      <div className=" flex gap-4 items-center">
        <div className="bg-purple-800 w-1 h-8"></div>
        <div className="font-inter text-neutral-800 uppercase text-xl font-medium">
          BIS Certification FAQ
        </div>
      </div>

      <div className="mt-8 border border-neutral-300 overflow-hidden flex flex-col gap-1 p-1">
        {faqData.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index}>
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className={`font-inter w-full flex items-center justify-between text-left px-8 py-6 transition-colors ${
                  isOpen
                    ? "bg-neutral-200 text-neutral-800 font-medium"
                    : "bg-neutral-100 text-neutral-800 font-medium"
                }`}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
              >
                <span className="pr-4">
                  <span className="shrink-0 font-semibold mr-2">{index + 1}.</span>
                  {item.question}
                </span>
                <span
                  className={`shrink-0 ${isOpen ? "text-blue-400" : "text-blue-700"}`}
                  aria-hidden
                >
                  {isOpen ? (
                    <Minus className="size-5" strokeWidth={2.25} />
                  ) : (
                    <Plus className="size-5" strokeWidth={2.25} />
                  )}
                </span>
              </button>
              <div
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
                hidden={!isOpen}
                className="bg-neutral-100 font-inter text-neutral-800 text-base px-7 py-5"
              >
                {typeof item.answer === "string" ? item.answer : item.answer}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BISCertificationFAQ;
