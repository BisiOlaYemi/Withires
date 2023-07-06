import React from 'react';
import MainLayout from '../components/Layouts/MainLayout';
// import { Link } from 'react-router-dom';
import course1PDF from '../assets/course1.pdf';
import course2PDF from '../assets/course2.pdf';
import course3PDF from '../assets/course3.pdf';

const Courses = () => {
  const technos = [
    { course: 'Robotic Process Automation', pdf: course1PDF },
    { course: 'Data Engineering', pdf: course2PDF },
    { course: 'UX/UI Designer', pdf: course3PDF },
  ];

  const openCourse = (pdf) => {
    window.open(pdf, '_blank');
  };

  return (
    <MainLayout>
      <div className="container mx-auto py-8 mt-12">
        <h2 className="text-3xl font-bold text-center mb-6">Courses</h2>
        <div className="flex flex-wrap justify-center gap-4 animate-fade-in-down">
          {technos.map((techno, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2">{techno.course}</h3>
                <p className="text-gray-800">"Get the needed Training in Tech"</p>
              </div>
              <div className="bg-white py-3 px-4 text-right">
                <button
                  className="px-2 py-1 rounded-lg bg-gray-800 font-semibold text-white mt-4"
                  onClick={() => openCourse(techno.pdf)}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Courses;
