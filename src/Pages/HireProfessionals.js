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
     <div className="container mx-auto py-8 mt-12">
      <h2 className="text-3xl font-bold text-center mb-6">Talent Pool</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 animate-fade-in-down">
        {professionals.map((professional, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-lg font-bold mb-2">{professional}</h3>
              <p className="text-gray-600">"Unlock the Power of Talent: Hire Experts to Drive Success!"</p>
            </div>
            <div className="bg-white py-3 px-4 text-right">
            <a href="mailto:benedictamusan@withires.com">
                <button className="px-2 py-1 rounded-lg bg-gray-800 font-semibold text-white mt-4">
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
