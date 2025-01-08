import React from 'react';
import MainLayout from '../components/Layouts/MainLayout';
import about from '../assets/about.jpg';
import { Link } from 'react-router-dom';

const AboutWithires = () => {
  return (
    <MainLayout>
      <div className="flex flex-col md:flex-row-reverse rounded-lg overflow-hidden mt-12">
        <div className="md:w-1/2 px-6 py-4 md:px-10 md:py-6">
          <h1 className="text-3xl font-bold mb-4">About us</h1>
          <p className="text-gray-700 text-base text-white font-medium">
            WitHires Consulting is a technology-driven deep jobs platform that gives clients
            the fastest access on the market to the support they need with highly skilled specialists
            and industry-leading tech professionals. We help source, hire, onboard, and manage the talent
            you need at the push of a button. Our 'remote-first' culture allows us to support clients on a
            global scale and to source our own talent to match the requirements, time zones, and languages needed.
            Whether you need one person or an entire team, we match you with highly skilled talents in just 24 hours.
          </p>
          <Link to='/courses'>
              <button className="px-4 py-2 rounded-lg bg-gray-800 font-semibold text-white mt-4">Enroll now</button>
          </Link>
        </div>
        <div className="md:w-1/2 pl-8">
          <img
            src={about}
            alt="About us"
            className="w-full h-auto object-cover rounded-lg animate-fade-in-up"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row-reverse rounded-lg overflow-hidden mt-12">
        <div className="md:w-1/2 animate-fade-in-down">
          <img src="https://media.istockphoto.com/id/1264334407/photo/coworkers-doing-a-meeting-outdoors.jpg?s=612x612&w=0&k=20&c=rCIRjU-Wns_1X4nyFOYBfouP6h595Do6aFDoq0FYGWE=" alt="Vision" className="rounded-lg object-cover animate-fade-in-down" />
        </div>
        <div className="md:w-1/2 p-6 pl-8 mb-8">
          <h1 className="text-3xl font-bold mb-4">Our Vision</h1>
          <p className="text-gray-700 text-base text-white font-medium">
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
          <div className='flex flex-wrap justify-center mt-12'>
              {/* <p className="text-gray-700 text-gray-800 font-bold text-2xl">Contact: Benedict Olusola Amusan</p> */}
              <p className="text-gray-700 text-base text-white font-medium">Email Address: support@withires.info</p> <br/>
              <p className="text-gray-700 text-base text-white font-medium"> Mobile No: +442031050869 | +2348027000770</p>
              {/* <p className="text-gray-700 text-base text-white font-medium hover:text-gray-800">
                  LinkedIn: <a href="https://www.linkedin.com/in/benedict-olusola-amusan-b0457838/" target="_blank" rel="noopener noreferrer">Benedict Olusola Amusan</a>
                </p> */}
      </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default AboutWithires;
