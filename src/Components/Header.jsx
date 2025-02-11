import React, { useRef } from "react";

const Header = () => {
  const videoRef = useRef(null);

  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <header className="bg-white text-black">
      {/* Hero Section */}
      <div className="py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-12">
          {/* Left Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl font-bold leading-tight">
              Delivering Reliable Gas Solutions, <br /> Anytime, Anywhere!
            </h1>
            <p className="mt-4 text-lg">
              When life demands more than you can handle, let GasByGas make it easier
              with our smart, reliable gas delivery and payment system.
            </p>

            {/* "Get Started" Button */}
            <button
              onClick={playVideo}
              className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              Get Started
            </button>
          </div>

          {/* Right Video (Hidden Controls) */}
          <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
            <video
              ref={videoRef}
              className="w-[800px] h-auto rounded-lg shadow-md"
              controls={false} // Hides controls
            >
              <source src="/Our Services.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
