import React from "react";
import { Link } from "react-router-dom";

const footerLinks = [
  { label: "Imprint", to: "/imprint" },
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Contact", to: "/contact" },
  { label: "Sitemap", to: "/sitemap" },
  { label: "Glossary", to: "/glossary" },
  { label: "LinkedIn", to: "https://www.linkedin.com", external: true },
];

const Footer = () => {
  return (
    <footer className="bg-neutral-800 mt-12">
      <div className="max-w-[1232px] px-4 py-10 mx-auto flex flex-col items-center gap-6 text-center">
        <p className="font-inter text-neutral-300 text-sm font-medium">
          Sun Certification India
        </p>
        <p className="font-inter text-neutral-300 text-sm -mt-4">
          © 2026 Sun Certification India – All Rights Reserved
        </p>

        <nav
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1"
          aria-label="Footer navigation"
        >
          {footerLinks.map((link) =>
            link.external ? (
              <a
                key={link.to}
                href={link.to}
                target="_blank"
                rel="noopener noreferrer"
                className="font-inter text-neutral-300 text-sm hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.to}
                to={link.to}
                className="font-inter text-neutral-300 text-sm hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
