
import React from 'react';

const sharedClasses = {
  cardContainer: 'flex gap-8',
  card: 'p-6 rounded-lg w-64',
  button: 'py-2 px-4 rounded-lg w-full',
};

const PricingCard = ({ bgColor, title, price, features }) => {
  return (
    <div className={`bg-${bgColor} ${sharedClasses.card}`}>
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <p className="text-4xl font-bold mb-2">{price} <span className="text-lg">/ month</span></p>
      <p className="text-sm mb-4">FREE INTEGRATION</p>
      <ul className="text-sm mb-6">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button className={`bg-${bgColor} text-white ${sharedClasses.button}`}>Choose Plan</button>
    </div>
  );
};

const PricingComponent = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center py-12">
      <h1 className="text-4xl font-bold mb-6">PRICING</h1>
      <p className="text-lg mb-12">Please choose a plan below</p>
      <div className={sharedClasses.cardContainer}>
        <PricingCard
          bgColor="zinc-800"
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
          bgColor="zinc-800"
          title="Standard"
          price="₹99"
          features={["1. HELM-LOCK", "2. LIFE-LINE", "3. WE-TRAC"]}
        />
      </div>
    </div>
  );
};

export default PricingComponent;