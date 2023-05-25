import React from 'react'
import MainLayout from '../components/Layouts/MainLayout';
import about from '../assets/about.jpg'

const AboutWithires = () => {
  return (
    <MainLayout>
    <div className="container mx-auto py-10 px-4 sm:px-6 lg:py-20 lg:px-8">
      {/* <h2 className="text-center text-4xl font-bold mb-10">Our Instructors Work at</h2>
      <div className="flex flex-wrap justify-center">
        <div className="overflow-hidden mx-2 my-2 sm:mx-4 sm:my-2 w-1/2 sm:w-1/4">
          <img src={} alt="Instructor 1" className="w-full object-cover" />
        </div>
        <div className="overflow-hidden mx-2 my-2 sm:mx-4 sm:my-2 w-1/2 sm:w-1/4">
          <img src={} alt="Instructor 2" className="w-full object-cover" />
        </div>
        <div className="overflow-hidden mx-2 my-2 sm:mx-4 sm:my-2 w-1/2 sm:w-1/4">
          <img src={} alt="Instructor 3" className="w-full object-cover" />
        </div> */}
        <div className="flex flex-col md:flex-row rounded-lg shadow-lg overflow-hidden mt-24 animate-fade-in-up">
            <div className="md:w-2/3 h-screen">
              <img src={about} alt="place" />
            </div>
            <div className="p-6 md:w-2/3">
              <h2 className="text-2xl font-bold mb-2">About us</h2>
              <p className="text-gray-800 text-base text-white font-medium">
              WitHires Consulting is a technology-driven deep jobs platform that give clients the
              fastest access on the market to the support they need with highly skilled specialists
              and industry leading tech professionals. We help source, hire, onboard and manage the
              talent you need at the push of a button. Our ‘remote-first’ culture allows us to support
              clients on a global scale, and to source our own talent to match the requirements, time 
              zones and languages needed. Whether you need one person or an entire team, we match you with
              highly skilled talents in just 24 hours.
              </p>
              <button className='px-2 py-2 bg-white rounded-lg font-semibold text-gray-950 mt-2 '>Get in touch </button>
            </div>
    </div>
      </div>
    {/* </div> */}
    </MainLayout>
  )
}

export default AboutWithires
