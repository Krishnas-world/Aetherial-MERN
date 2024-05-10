
import React from 'react';

const inputClasses = "shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 leading-tight focus:outline-none focus:shadow-outline";
const labelClasses = "block text-white text-sm font-bold mb-2 w-screen";
const buttonClasses = "bg-white hover:bg-zinc-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline";

const SignUpForm = () => {
  return (
    <div className="bg-black  p-8">
      <div className="max-w-lg mx-auto bg-gray p-6 rounded-lg shadow">
        <form>
          <div className="mb-4 bg-gray">
            <label htmlFor="name" className={labelClasses}>Your Name</label>
            <input type="text" id="name" name="name" placeholder="Full Name" className={inputClasses} />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className={labelClasses}>Your Email</label>
            <input type="email" id="email" name="email" placeholder="name@company.com" className={inputClasses} />
          </div>
          <div className="mb-4">
            <label htmlFor="blood-group" className={labelClasses}>Blood Group</label>
            <input type="text" id="blood-group" name="blood-group" placeholder="Blood Group" className={inputClasses} />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className={labelClasses}>Phone Number</label>
            <input type="tel" id="phone" name="phone" placeholder="Phone Number" className={inputClasses} />
          </div>
          <div className="mb-4">
            <label htmlFor="alt-phone" className={labelClasses}>Alternate Phone Number</label>
            <input type="tel" id="alt-phone" name="alt-phone" placeholder="Alternate Phone Number" className={inputClasses} />
          </div>
          <div className="mb-6">
            <label htmlFor="address" className={labelClasses}>Address</label>
            <textarea id="address" name="address" rows="3" placeholder="Your Address" className={inputClasses}></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button className={buttonClasses} type="submit">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
