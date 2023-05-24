import React from 'react';
import bgrm from '../../assets/bgrm.png';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center">
      {/* Content */}
      <div className="flex flex-col justify-center max-w-md px-16 py-8 md:py-16 md:w-1/3 xl:w-1/4">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Dream Jobs.Top Talent. All in One Place </h1>
        <p className="text-lg mb-6 text-white font-medium">Our ‘remote-first’ culture allows us to support clients on a global scale</p>
        <Link to='/hireprofessionals'>
        <button className="px-4 py-2 bg-gray-800 text-white font-bold rounded-full hover:bg-blue-600">
          Talent Pool
        </button>
        </Link>
      </div>
      
      {/* Image Card */}
      <div className="flex-shrink-0 w-full md:w-2/3 xl:w-3/4">
        <div className="h-64 md:h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${bgrm})` }}></div>
      </div>
    </div>
  );
};

export default Hero;
