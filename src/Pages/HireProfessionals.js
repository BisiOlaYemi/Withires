import React from 'react';
import MainLayout from '../components/Layouts/MainLayout';

const JobListing = () => {
  const jobs = [
    {
      title: 'Software Engineer',
      caption: 'Design and develop software applications.',
    },
    {
      title: 'UI/UX Designer',
      caption: 'Create user-friendly and visually appealing interfaces.',
    },
    {
      title: 'RPA Developer',
      caption: 'Build and automate robotic process automation solutions.',
    },
    {
      title: 'DevOps Engineer',
      caption: 'Manage and improve the software development lifecycle.',
    },
    {
      title: 'Data Engineer',
      caption: 'Design and implement data processing systems.',
    },
    {
      title: 'Automation Tester',
      caption: 'Develop and execute automated test cases.',
    },
    {
      title: 'Product Manager',
      caption: 'Lead product development and strategy.',
    },
    {
      title: 'Business Analyst',
      caption: 'Analyze business requirements and propose solutions.',
    },
    {
      title: 'Cybersecurity Expert',
      caption: 'Protect systems and data from security threats.',
    },
  ];

  const JobCard = ({ title, caption }) => {
    return (
      <div className="bg-white shadow-md rounded-lg p-6 mb-4 hover:scale-105 transition-all duration-300">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{caption}</p>
        <a href="mailto:benedictamusan@withires.com">
          <button className="bg-gray-800 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
          Click to hire
        </button>
        </a>
      </div>
    );
  };

  return (
    <MainLayout>
    <div className="container mx-auto px-4 mb-8">
      <h1 className="text-3xl font-semibold mb-6 mt-24 text-center">Talent Pool</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {jobs.map((job, index) => (
          <JobCard key={index} title={job.title} caption={job.caption} />
        ))}
      </div>
    </div>
    </MainLayout>
  );
};

export default JobListing;
