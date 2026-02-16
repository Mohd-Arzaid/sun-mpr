import React from "react";

const Hero = () => {
  return (
    <div className="max-w-[1232px] mx-auto px-4">
      <div className="bg-[url('/hero-image.png')] bg-cover bg-center py-20">
        <div className="text-white text-4xl max-w-4xl font-syncopate px-8 py-8">
          your one-stop certification{" "}
          <span className="font-bold">solution!</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
