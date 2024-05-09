import React from 'react';

const ProfileCard = () => {
  return (
    <div className="max-w-4xl mx-auto p-5 flex flex-col md:flex-row md:items-start md:space-x-8 md:p-10">
      {/* Left Card */}
      <div className="bg-white p-6 rounded-lg shadow-lg flex-shrink-0 flex flex-col items-center space-y-4">
        <div className="w-24 h-24 bg-red-500 rounded-full"></div>
        <div className="text-center">
          <p className="text-lg font-semibold">abcdefg@gmail.com</p>
          <div className="text-gray-600">
            <p>AETHERIAL ID:</p>
            <p>MOBILE NO.:</p>
            <p>BLOOD GROUP:</p>
            <p>ALTERNATE MOB NO.:</p>
            <p>ADDRESS:</p>
          </div>
        </div>
      </div>

      {/* Right Card */}
      <div className="bg-white p-6 rounded-lg shadow-lg flex-shrink-0 flex flex-col items-center space-y-4">
        <img src="https://placehold.co/100x100" alt="Logo" className="mb-4 rounded-lg" />
        <div className="space-y-4">
          <button className="bg-zinc-300 text-black px-6 py-3 rounded-lg">TEST NOW</button>
          <button className="bg-zinc-300 text-black px-6 py-3 rounded-lg">BUY NOW</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
