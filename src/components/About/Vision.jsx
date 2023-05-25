import React from 'react'

const Vision = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse rounded-lg overflow-hidden mt-24">
        <div className="md:w-1/2">
          <img src="https://media.istockphoto.com/id/1264334407/photo/coworkers-doing-a-meeting-outdoors.jpg?s=612x612&w=0&k=20&c=rCIRjU-Wns_1X4nyFOYBfouP6h595Do6aFDoq0FYGWE=" 
          alt="Vision" className=" rounded-lg object-cover animate-fade-in-down" />
        </div>
        <div className="md:w-1/2 p-6 pl-8">
          <h1 className="text-3xl font-bold mb-4">Our Vision</h1>
          <p className="text-gray-700 text-base text-primary font-[Verdana]">
          At Withires, our vision is to be the leading provider of exceptional services,
          renowned for our unwavering commitment to quality, integrity, support, and continuous innovation.
          We aspire to be recognized as the foremost choice for clients seeking unparalleled excellence, driven
          by our relentless pursuit of hiring the top 1% of professionals who consistently deliver impactful
          solutions. By maintaining an exceptional level of quality, we ensure that our clients' needs are not
          only met but exceeded. Integrity is the bedrock of our organization. We consistently do the right
          thing, even when no one is watching. Our dedication to honesty, trust, and transparency inspires
          admiration from both clients and colleagues alike, fostering enduring relationships built on mutual
          respect.
          </p>
        </div>
      </div>
  );
};

export default Vision
