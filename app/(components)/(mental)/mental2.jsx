import React from "react";

function Mental2() {
  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto">
        <h1 className="text-2xl font-semibold text-center mb-6 text-c4">
          Choose Your Therapy Plan
        </h1>
        <div className="flex justify-center space-x-4">
          {/* Basic Plan */}
          <div className="w-1/ bg-pink-200 p-4 shadow-md rounded-lg">
            <h2 className="text-lg font-semibold mb-2 text-c4">Basic Plan</h2>
            <p className="text-gray-600">Money: $50</p>
            <p className="text-gray-600">Time of Consultation: 30 minutes</p>
            <p className="text-gray-600">Validity: 1 month</p>
            <p className="text-gray-600">Mode of Therapy: WhatsApp</p>
            <div className="flex justify-center">
              <button
                className="mt-5 hover:bg-t4 text-white font-bold py-2 px-4 hover:text-c4 
          hover:outline-double rounded-2xl
        focus:outline-none focus:shadow-outline bg-c5"
              >
                Choose Basic Plan
              </button>
            </div>
          </div>

          {/* Normal Plan */}
          <div className="w-1/3 bg-purple-300 p-4 shadow-md rounded-lg">
            <h2 className="text-lg font-semibold mb-2 text-c4">Normal Plan</h2>
            <p className="text-gray-600">Money: $80</p>
            <p className="text-gray-600">Time of Consultation: 45 minutes</p>
            <p className="text-gray-600">Validity: 2 months</p>
            <p className="text-gray-600">Mode of Therapy: WhatsApp</p>
            <div className="flex justify-center">
              <button
                className="mt-5 hover:bg-t4 text-white font-bold py-2 px-4 hover:text-c4 
          hover:outline-double rounded-2xl
        focus:outline-none focus:shadow-outline bg-c5"
              >
                Choose Normal Plan
              </button>
            </div>
          </div>

          {/* Advanced Plan */}
          <div className="w-1/3  bg-lime-200 p-4 shadow-md rounded-lg">
            <h2 className="text-lg font-semibold mb-2 text-c4">
              Advanced Plan
            </h2>
            <p className="text-gray-600">Money: $120</p>
            <p className="text-gray-600">Time of Consultation: 60 minutes</p>
            <p className="text-gray-600">Validity: 3 months</p>
            <p className="text-gray-600">Mode of Therapy: Google Meet</p>
            <div className="flex justify-center">
              <button
                className="mt-5 hover:bg-t4 text-white font-bold py-2 px-4 hover:text-c4 
          hover:outline-double rounded-2xl
        focus:outline-none focus:shadow-outline bg-c5"
              >
                Choose Advance Plan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mental2;
