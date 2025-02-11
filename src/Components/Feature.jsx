import React from "react";

const features = [
  {
    image: "/token-based.png",
    title: "Token-Based Gas Request System",
    description:
      "Guarantees gas pickup within two weeks; reschedules automatically if unavailable, ensuring fair, transparent distribution.",
  },
  {
    image: "/real-time.png",
    title: "Real-Time Delivery Notifications",
    description:
      "Sends SMS/email updates for token confirmation, delivery scheduling, and reminders, preventing missed pickups.",
  },
  {
    image: "/request-limitation.png",
    title: "NIC/Phone/Email-Based Request Limitation",
    description:
      "Restricts multiple gas requests using unique identification, ensuring fair distribution and preventing overstocking.",
  },
  {
    image: "/industry-service.png",
    title: "Separate Service for Businesses and Industries",
    description:
      "Offers tailored gas distribution for industries, validated by organizational certification, distinguishing residential and commercial needs effectively.",
  },
];

const Feature = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900">Features Just GasByGas Has</h1>
        <p className="mt-4 text-lg text-gray-600">
          When life gets overwhelming, GasByGas simplifies your needs with a smart,<br />
          efficient gas distribution and delivery system.
        </p>
      </div>

      {/* Feature Grid */}
      <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 px-6 relative">
        {features.map((feature, index) => (
          <div key={index} className="relative flex items-center bg-gray-100 shadow-lg rounded-xl p-6">
            {/* Feature Image */}
            <div className="w-50 h-50 flex justify-center items-center bg-white rounded-xl shadow-md p-2">
              <img src={feature.image} alt={feature.title} className="w-16 h-16" />
            </div>

            {/* Feature Description */}
            <div className="ml-6">
              <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
              <p className="text-gray-700 text-sm">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile App Section */}
      <div className="flex flex-col md:flex-row items-center justify-center space-x-6 mt-16 px-6">
        {/* Image on the left */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/mobile_app.png"
            alt="Gas Delivery"
            className="w-[500px] h-auto"
          />
        </div>

        {/* Text and Buttons on the right */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <p className="text-3xl font-bold text-gray-900">Use GasByGas In Mobile</p>
          <p className="mt-4 text-gray-600">
            We support multiple platforms to provide the best experience,<br />
            allowing you to manage gas requests effortlessly.<br />
            GasByGas makes life easier!
          </p>

          {/* Buttons positioned closer to the Gas Delivery image */}
          <div className="mt-6 flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4">
            <a
              href="#"
              className="bg-gray-200 text-blue-900 font-semibold px-6 py-3 rounded-lg flex items-center justify-center space-x-2 shadow hover:bg-amber-50 w-60"
            >
              <img src="/Apple.png" alt="Apple Store" className="w-6 h-6" />
              <span>Apple Store</span>
            </a>
            <a
              href="#"
              className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg flex items-center justify-center space-x-2 shadow hover:bg-blue-700 w-60"
            >
              <img src="/google-play.png" alt="Google Play" className="w-6 h-6" />
              <span>Google Play</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
