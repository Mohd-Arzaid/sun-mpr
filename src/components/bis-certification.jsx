import React from "react";

const BISCertification = () => {
  return (
    <div className="max-w-[1232px] px-4 mx-auto py-12">
      <div className="font-inter text-neutral-800 text-4xl font-medium">
        What is BIS Certification for India?
      </div>

      <div className="flex gap-16 items-center justify-center mt-12">
        <img src="/bis-logo.png" alt="BIS Logo" />
        <div className="flex flex-col gap-4">
          <div className="font-inter text-normal text-neutral-500 font-medium">
            For export to India, manufacturers need BIS certification (ISI) or
            BIS registration (CRS) for certain products. The BIS Certification
            is obligatory for a large variety of products, so that they can be
            introduced and sold on the Indian market. BIS Certification India or
            BIS Registration issued by the Bureau of Indian Standards (BIS)
            ensure the quality, safety and reliability of products in accordance
            with Indian Standards (IS).
          </div>
          <div className="font-inter text-normal text-neutral-500">
            The Bureau of Indian Standards (BIS) is the national certification
            body in India under the umbrella of the Indian Ministry of Consumer
            Affairs, Food & Public Distribution. On April 1, 1987, it
            effectively replaced the Indian Standards Institution (ISI)
            organization and took over their functions.
          </div>
        </div>
      </div>

      <div className="mt-14 flex gap-4 items-center">
        <div className="bg-purple-800 w-1 h-8"></div>
        <div className="font-inter text-neutral-800 uppercase text-xl font-medium ">
          BIS Certification (ISI) and BIS Registration (CRS) for Export to india
        </div>
      </div>

      <div className="font-inter text-neutral-500 text-lg font-medium mt-5">
        There are two main types of certifications regarding BIS compliance for
        India:
      </div>

      <div className="border border-neutral-300 mt-8 py-6 px-8 flex justify-between gap-16">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <div className="font-inter text-neutral-800 text-2xl font-medium">
              BIS-Certifications with Factory Inspection:
            </div>
            <div className="w-full h-px bg-purple-800"></div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="font-inter text-neutral-800 font-medium">
              BIS ISI Certification (BIS Scheme I, ISI-Mark Scheme)
            </div>

            <div className="font-inter text-neutral-500 text-normal">
              The Foreign Manufacturers Certification Department (FMCD) issues
              the BIS ISI certification for foreign manufacturers. Since 2000
              this authority has been responsible for the BIS certificate under
              the umbrella of BIS. Rules and regulations under which ISI
              certification is granted are set out in the Foreign Manufacturers
              Certification Scheme (FMCS).
            </div>

            <div className="font-inter text-neutral-500 text-normal ">
              All products that comply with the FMCS regulations are marked with
              the ISI logo, also known as the “BIS Standard Mark” or “ISI Mark”
              in accordance with ISI Mark Scheme I.
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <div className="font-inter text-neutral-800 text-2xl font-medium">
              BIS-Certification without Factory Inspection:
            </div>
            <div className="w-full h-px bg-purple-800"></div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="font-inter text-neutral-800 font-medium">
              BIS CRS Certification (BIS Scheme II, BIS Registration){" "}
            </div>

            <div className="font-inter text-neutral-500 text-normal">
              The BIS registration under CRS (Compulsory Registration Scheme)
              was introduced in 2012 for 15 product categories. Since then, new
              products have been added in phases. Based on the regulations
              published by the Ministry of Electronics and Information
              Technology (MEITY), foreign products for the Indian market can
              also obtain BIS registration.
            </div>

            <div className="font-inter text-neutral-500 text-normal">
              The BIS-CRS registration mainly covers products in the IT,
              electronics and lighting categories, however the list of products
              subject to registration is constantly being expanded. This makes
              BIS-CRS registration one of the most important and common
              registrations in India.
            </div>
          </div>
        </div>
      </div>

      <section className="mt-12">
        <h3 className="font-inter text-neutral-800 text-2xl font-semibold mb-6">
          BIS Certification under Scheme X (as of 2026)
        </h3>
        <div className="flex flex-col gap-4">
          <p className="font-inter text-neutral-500 text-normal leading-relaxed">
            BIS Scheme X was envisioned as a certification framework in the
            context of India&apos;s Machinery and Electrical Equipment Safety
            (Omnibus Technical Regulation, OTR) and aimed to introduce a
            BIS-based conformity assessment for certain machinery and electrical
            products (including those falling under HS code chapters 84 and 85).
            The regulation was initially scheduled to be implemented on 28
            August 2025. In 2025, this deadline was postponed to 1 September
            2026 through an amendment. In a further step, the effective date was
            subsequently suspended until further notice (&quot;...to a date as
            may be notified...&quot;), meaning there was ultimately no fixed
            implementation/enforcement date anymore.
          </p>
          <p className="font-inter text-neutral-500 text-normal leading-relaxed">
            On 14 January 2026, it was announced that BIS Scheme X is no longer
            required. As a result, any content referring to the mandatory
            implementation of Scheme X is no longer up to date.
          </p>
          <p className="font-inter text-neutral-500 text-normal leading-relaxed">
            Important: Regardless of the fact that Scheme X is no longer
            required, individual spare parts, components, or product variants
            may still fall under other BIS obligations (e.g., Scheme I or Scheme
            II). We therefore recommend having relevant items and/or bills of
            materials reviewed to ensure the correct regulatory classification.
          </p>
        </div>
      </section>
    </div>
  );
};

export default BISCertification;
