import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonialsData = [
  {
    heading:
      "Marco G., Senior Commodity Manager, Webasto-Edscha Cabrio GmbH",
    description:
      '"Anyone who needs product certification is well advised to choose the service pack from MPR International. We have used it in recent years for the certification of our products manufactured in a variety of factories and at all levels had a positive experience. We especially appreciated the good communication with Julian Busch, our contact person. Thank you Mr. Busch, keep up the good work."',
  },
  {
    heading: "Priya S., Compliance Lead, TechElectronics Pvt Ltd",
    description:
      '"Professional support from start to finish. The BIS certification process was clearly explained and handled efficiently. We recommend their services for anyone exporting to India."',
  },
  {
    heading: "Thomas K., Quality Director, AutoParts Europe GmbH",
    description:
      '"Smooth coordination for our CRS registration. The team was responsive and made the compliance process straightforward. Highly satisfied with the outcome."',
  },
  {
    heading: "Anita R., Export Manager, Solar Solutions India",
    description:
      '"MPR guided us through ISI certification for our solar inverters. Timely delivery and clear communication. Would work with them again."',
  },
  {
    heading: "Michael B., Head of Regulatory, MedDevice International",
    description:
      '"Complex certification requirements were broken down and executed without delays. Our AIR coordination was seamless."',
  },
  {
    heading: "Sneha M., Product Manager, Consumer Electronics Co",
    description:
      '"From application prep to marking advice, everything was professional. BIS registration completed within the promised timeline."',
  },
  {
    heading: "David L., Supply Chain Director, Global Cables Ltd",
    description:
      '"We needed BIS for multiple cable types. The team managed multiple applications in parallel and kept us updated at every step."',
  },
  {
    heading: "Kavita P., R&D Manager, Lighting Innovations",
    description:
      '"CRS registration for our LED products was handled efficiently. Good technical understanding of the testing requirements."',
  },
  {
    heading: "James W., Certification Specialist, Industrial Controls Inc",
    description:
      '"First-time BIS applicants here. MPR made the process understandable and supported us through the factory audit. Highly recommend."',
  },
  {
    heading: "Rekha V., Director – Quality, Precision Components Ltd",
    description:
      '"Long-standing partnership for BIS renewals and new product certifications. Reliable, responsive, and technically sound."',
  },
  {
    heading: "Stefan H., Operations Manager, EuroCables GmbH",
    description:
      '"BIS-ISI for our wiring harnesses was completed on schedule. Clear documentation and support during the audit. Very professional."',
  },
  {
    heading: "Lakshmi N., Regulatory Affairs, PharmaExports India",
    description:
      '"We rely on MPR for multiple market certifications. The BIS team is knowledgeable and always available when we have questions."',
  },
];

const VISIBLE_COUNT = 3;
const TOTAL = 12; // exactly 12 testimonials; carousel moves by 3 (pages: 1–3, 4–6, 7–9, 10–12)

const ClientTestimonials = () => {
  const [page, setPage] = useState(0); // 0 = items 1–3, 1 = 4–6, 2 = 7–9, 3 = 10–12
  const maxPage = Math.floor(TOTAL / VISIBLE_COUNT) - 1; // 3

  const goPrev = () => {
    setPage((p) => (p <= 0 ? 0 : p - 1));
  };
  const goNext = () => {
    setPage((p) => (p >= maxPage ? maxPage : p + 1));
  };

  // Track = 4 slides × 100% viewport. One page = 100% viewport = 25% of track.
  const translatePercent = page * 25;

  const data = testimonialsData.slice(0, TOTAL);
  const slides = [
    data.slice(0, 3),
    data.slice(3, 6),
    data.slice(6, 9),
    data.slice(9, 12),
  ];

  return (
    <div className="max-w-[1232px] px-4 mx-auto pt-12 pb-12">
      <div className=" flex gap-4 items-center">
        <div className="bg-purple-800 w-1 h-8"></div>
        <div className="font-inter text-neutral-800 uppercase text-xl font-medium">
          Client Testimonials{" "}
        </div>
      </div>

      <div className="font-inter text-neutral-500 text-lg font-medium mt-5">
        Please enable cookies to enable embedded YouTube videos. For
        privacy-related details on data exchange through use of the videos as
        well as changeable cookie settings, please see the privacy policy page.
      </div>

      <div className="bg-[url('/video-background.png')] bg-cover bg-center mt-8 flex items-center justify-center py-10">
        <div className="flex items-center justify-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/dDNID5s6bvo"
            title="Client testimonial video"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      {/* Testimonials carousel – exactly 3 visible per slide; moves by 3 per click */}
      <div className="mt-12 relative">
        <div className="border border-neutral-300 overflow-hidden w-full bg-neutral-100 rounded-lg">
          <div
            className="flex transition-[transform] duration-300 ease-out w-full"
            style={{
              width: "400%",
              transform: `translateX(-${translatePercent}%)`,
            }}
          >
            {slides.map((slideItems, slideIndex) => (
              <div
                key={slideIndex}
                className="flex shrink-0 w-1/4"
              >
                {slideItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex-1 min-w-0 border-r border-neutral-300 last:border-r-0 bg-white px-6 py-6 md:px-8 md:py-8 box-border"
                  >
                    <div className="font-inter">
                      <h3 className="text-neutral-800 font-semibold text-lg mb-3">
                        {item.heading}
                      </h3>
                      <p className="text-neutral-500 text-sm leading-relaxed line-clamp-4">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center  gap-4 mt-6">
          <button
            type="button"
            onClick={goPrev}
            disabled={page === 0}
            className="font-inter flex items-center justify-center size-10 rounded-full border border-neutral-300 bg-white text-neutral-700 hover:bg-neutral-100 hover:border-neutral-400 transition-colors disabled:pointer-events-none"
            aria-label="Previous page (3 testimonials)"
          >
            <ChevronLeft className="size-5" strokeWidth={2.25} />
          </button>
          <button
            type="button"
            onClick={goNext}
            disabled={page >= maxPage}
            className="font-inter flex items-center justify-center size-10 rounded-full border border-neutral-300 bg-white text-neutral-700 hover:bg-neutral-100 hover:border-neutral-400 transition-colors  disabled:pointer-events-none"
            aria-label="Next page (3 testimonials)"
          >
            <ChevronRight className="size-5" strokeWidth={2.25} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientTestimonials;
