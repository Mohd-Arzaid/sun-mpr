import React from "react";

const Hero = () => {
  return (
    <div className="relative">
      <img src="/hero-image.png" alt="Hero Image" />

      <div className="absolute inset-0 flex items-center max-w-[1232px] px-4 mx-auto">
        <div className=" text-white text-4xl max-w-3xl font-syncopate">
          your one-stop certification{" "}
          <span className="font-bold">solution!</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
