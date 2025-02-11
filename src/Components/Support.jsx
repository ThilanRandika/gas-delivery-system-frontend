const Support = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start justify-center pt-10 space-x-6">
      {/* Image on the left */}
      <div className="flex justify-center md:justify-start w-full md:w-1/2">
        <img src="/Sup.png" alt="Support" className="w-[800px] h-auto" />
      </div>

      {/* Text on the right */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl font-bold text-blue-900">We Are Here To Help!</h1>
        <p className="mt-4 text-lg text-gray-600">
          Need assistance with gas orders, deliveries, or payments? <br />
          GasByGas offers 24/7 support to ensure a smooth and hassle-free experience.
        </p>
        <p className="mt-4 text-lg text-gray-600">
          Whether you need help with tracking your order, scheduling a delivery, 
          or understanding safety guidelines, our dedicated team is ready to assist you!
        </p>
        <p className="mt-4 text-lg text-gray-600">
          📞 <strong>Customer Helpline:</strong> +94 71 234 5678 <br />
          📧 <strong>Email Support:</strong> support@gasbygas.com <br />
        </p>
      </div>
    </div>
  );
};

export default Support;
