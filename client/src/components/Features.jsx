
import React from 'react';

const featureClasses = "bg-white text-black p-4 rounded-lg";
const titleClasses = "text-xl font-semibold hover:text-red-500";
const containerClasses = "bg-black text-white p-10";
const headingClasses = "text-6xl font-bold text-center mb-10";
const spaceClasses = "space-y-4";

const Feature = ({ title, description }) => {
    return (
        <div className={featureClasses}>
            <h2 className={titleClasses}>{title}</h2>
            <p>{description}</p>
        </div>
    );
};

const Features = () => {
    return (
        <div className={containerClasses}>
            <h1 className={headingClasses}>FEATURES</h1>
            <div className={spaceClasses}>
                <Feature
                    title="HELM-LOCK"
                    description="When the helmet is not worn, it ensures that the vehicle won't start, promoting responsible and safe riding habits."
                />
                <Feature
                    title="LIFE-LINE"
                    description="In the unfortunate event of a crash, AETHERIAL automatically sends real-time notifications to emergency contacts."
                />
                <Feature
                    title="SOS-ALERT"
                    description="Users can easily trigger the SOS feature, which sends immediate alerts to pre-configured contacts and emergency services."
                />
                <Feature
                    title="WE-TRAC"
                    description="AETHERIAL leverages GPS technology to provide geolocation tracking in case of emergencies."
                />
                <Feature
                    title="ECG SYSTEM(*)"
                    description="Installed ECG to track heart-rate and send the live report to the ambulance when BP goes low."
                />
            </div>
        </div>
    );
};

export default Features;