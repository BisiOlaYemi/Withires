import React from 'react'
import MainLayout from '../components/Layouts/MainLayout';

const HireProfessionals = () => {
  const professionals = [
    'Software Engineer',
    'UI/UX Designer',
    'RPA Developer',
    'DevOps Engineer',
    'Data Engineer',
    'Automation Tester',
    'Product Manager',
    'Business Analyst',
    'Cybersecurity Expert',
  ];

  return (
    <MainLayout>
     <div className="container mx-auto py-8 mt-12 mb-12">
      <h2 className="text-3xl font-bold text-center mb-6">Talent Pool</h2>
      <div className="flex flex-wrap justify-center gap-4 animate-fade-in-down">
        {professionals.map((professional, index) => (
          <div key={index} className="md:w-200 p-8 min-w-260 bg-gray-300  rounded-3xl flex flex-col justify-center drop-shadow-lg gap-4 hover:scale-105 transition-all duration-300">
            <div className="p-6">
              <h3 className="text-lg font-bold mb-2">{professional}</h3>
              <p className="text-gray-800">"Unlock the Power of Talent: Hire Experts to Drive Success!"</p>
            </div>
            <div className=" py-3 px-4 text-right">
            <a href="mailto:support@withires.info">
                <button className=" px-2 py-1 rounded-lg bg-gray-800 hover:bg-teal-600 font-semibold text-white mt-4">
                  Click here to hire
                </button>
            </a>
            </div>
          </div>
        ))}
      </div>
    </div>
    </MainLayout>
  )
}

export default HireProfessionals
