import React from 'react';
import { FaUserPlus, FaSyncAlt, FaUsers } from 'react-icons/fa';

const OurValue = () => {
  return (
    <div className="flex flex-col items-center mt-12 animate-fade-in-up mb-24">
      <h1 className="text-4xl font-bold mb-4 text-white">Our Values</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 ml-6">
        <div className="flex flex-col items-center  rounded-lg p-4">
          <FaUserPlus className="text-blue-900 text-4xl mb-2" />
          <h2 className="text-xl font-bold mb-2">Quality</h2>
          <p className="text-center text-base text-white font-medium">We maintain a high level of quality by hiring only the top 1% of professionals that instantly make an impact on clients.</p>
        </div>
        <div className="flex flex-col items-center  rounded-lg p-4">
          <FaSyncAlt className="text-blue-900 text-4xl mb-2" />
          <h2 className="text-xl font-bold mb-2">Support Each Other</h2>
          <p className="text-center text-base text-white font-medium">We have built a culture where inclusion and respect are a defining part of our identity.</p>
        </div>
        <div className="flex flex-col items-center  rounded-lg p-4">
          <FaUsers className="text-blue-900 text-4xl mb-2" />
          <h2 className="text-xl font-bold mb-2">Integrity</h2>
          <p className="text-center text-base text-white font-medium">We do the right thing, even when no one is watching, and are admired for our commitment to honesty, trust, and transparency.</p>
        </div>
        <div className="flex flex-col items-center  rounded-lg p-4">
          <FaUsers className="text-blue-900 text-4xl mb-2" />
          <h2 className="text-xl font-bold mb-2">Find A Better Way</h2>
          <p className="text-center text-base text-white font-medium">We are constantly seeking personal and professional growth through innovation and continuous improvement.</p>
        </div>
      </div>
    </div>
  );
};

export default OurValue;
