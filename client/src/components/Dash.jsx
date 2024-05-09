import React from 'react';

const sharedClasses = {
  cardContainer: 'bg-white p-5 rounded-lg shadow-lg',
  flexCenter: 'flex justify-center items-center',
  flexColumnCenter: 'flex flex-col items-center',
  button: 'bg-zinc-300 text-black px-4 py-2 rounded-lg',
};

const ProfileCard = () => {
  return (
    <div className={`${sharedClasses.flexCenter} space-x-10 p-5 bg-zinc-100`}>
      <div className={sharedClasses.cardContainer}>
        <div className={sharedClasses.flexColumnCenter}>
          <div className="w-24 h-24 bg-red-500 rounded-full mb-4"></div>
          <div className="text-left space-y-1 color-black">
            <p><strong>NAME:</strong> abcdefg@gmail.com</p>
            <p><strong>AETHERIAL ID:</strong></p>
            <p><strong>MOBILE NO.:</strong></p>
            <p><strong>BLOOD GROUP:</strong></p>
            <p><strong>ALTERNATE MOB NO.:</strong></p>
            <p><strong>ADDRESS:</strong></p>
          </div>
        </div>
      </div>

      <div className={sharedClasses.cardContainer}>
        <div className={sharedClasses.flexColumnCenter}>
          <img src="https://placehold.co/100x100" alt="Logo" className="mb-4" />
          <button className={sharedClasses.button}>TEST NOW</button>
          <button className={sharedClasses.button}>BUY NOW</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;