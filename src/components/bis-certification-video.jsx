import React from "react";

const BISCertificationVideo = () => {
  return (
    <div className="max-w-[1232px] px-4 mx-auto pt-12">
      <div className=" flex gap-4 items-center">
        <div className="bg-purple-800 w-1 h-8"></div>
        <div className="font-inter text-neutral-800 uppercase text-xl font-medium">
          BIS Certification Video
        </div>
      </div>

      <div className="font-inter text-neutral-500 text-lg font-medium mt-5">
        Please enable cookies to enable embedded YouTube videos. For
        privacy-related details on data exchange through use of the videos as
        well as changeable cookie settings, please see the privacy policy page.
      </div>

      <div className="bg-[url('/video-background.png')] bg-cover bg-center mt-8 flex items-center justify-center py-10">
        {/* Youtube Video - centered */}
        <div className="flex items-center justify-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default BISCertificationVideo;
