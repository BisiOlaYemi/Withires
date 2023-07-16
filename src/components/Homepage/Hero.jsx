import React from 'react';
import bgrm from '../../assets/bgrm.png';
// import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section
            className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full sm:m12"
            id="home"
        >
            <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6 mt-24 p-8">


                <p className="text-[2.5rem] text-center md:text-left lg:text-[3.5rem] font-bold tracking-wide text-headingColor md:w-[85%] md:leading-tight">
                    <span className="bg-gradient-to-r from-purple-500 to-amber-500 text-transparent bg-clip-text text-[3rem] lg:text-[4rem]">Dream Jobs.</span> Top Talent. All in One Place 
                </p>

                <p className="text-center md:text-justify text-lighttextGray text-lg md:w-[85%] flex flex-wrap gap-1">
                Our ‘remote-first’ culture allows us to support clients on a global scale. WitHires Consulting is a technology-driven deep jobs platform that gives clients the fastest access on the market to the support they need with highly skilled specialists and industry-leading tech professionals.
                </p>


                <div className="text-center md:w-[85%] flex flex-wrap gap-1 md:gap-3">
                    <input type="text" className="md:w-3/4 border px-2 py-3 rounded-lg " placeholder="Search Jobs"/>
                    <button className="bg-gray-800 text-white md:px-7 px-4 py-3   text-lg rounded-lg">Search</button>
                </div>


            </div>
            <div className="py-2 flex-1 flex items-center relative">
                <img
                    src={bgrm}
                    className=" ml-auto h-420 w-full lg:w-auto lg:h-650"
                    alt="hero-bg"
                />
            </div>


        
        </section>
  );
};

export default Hero;
