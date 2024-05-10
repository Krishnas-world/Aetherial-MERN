
import React from 'react';
import FeatureCard from '../components/Features';
import ContactForm from '../components/ContactUs';
import ProfileCard from '../components/Dash';

import SignUpForm from '../components/userform';


const sharedClasses = {
  cardContainer: 'flex gap-8',
  card: 'p-6 rounded-lg w-64',
  button: 'py-2 px-4 rounded-lg w-full',
};

const PricingCard = ({ bgColor, title, price, features }) => {
  return (
    <div className={`bg-${bgColor} ${sharedClasses.card}`}>
      <h2 className="text-xl text-black font-semibold mb-4">{title}</h2>
      <p className="text-4xl text-black font-bold mb-2">{price} <span className="text-lg">/ month</span></p>
      <p className="text-sm mb-4 text-black">FREE INTEGRATION</p>
      <ul className="text-sm mb-6 text-black">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button className={` bg-gray-950 rounded-xl text-white ${sharedClasses.button}`}>Choose Plan</button>
    </div>
  );
};

const PricingComponent = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center py-12">
      <h1 className="text-6xl font-bold mb-6">PRICING</h1>
      <p className="text-lg mb-12">Please choose a plan below</p>
      <div className={sharedClasses.cardContainer}>
        <PricingCard
          bgColor="white"
          title="Basic"
          price="₹69"
          features={["1. HELM-LOCK", "2. LIFE-LINE"]}
        />
        <PricingCard
          bgColor="red-700"
          title="Premium"
          price="₹149"
          features={["1. HELM-LOCK", "2. LIFE-LINE & SOS-ALERT", "3. WE-TRAC", "4. ECG SYSTEM"]}
        />
        <PricingCard
          bgColor="white"
          title="Standard"
          price="₹99"
          features={["1. HELM-LOCK", "2. LIFE-LINE", "3. WE-TRAC"]}
        />
      </div>
      <br/><br/><br/><br/>
<FeatureCard/><br/><br/><br/><br/>
<ContactForm/>
<ProfileCard/>

<SignUpForm/>
=======

    </div>
  );
};

export default PricingComponent;

