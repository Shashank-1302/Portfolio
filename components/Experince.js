import React from 'react';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';  
import { experiences } from './Details/__experinceDetails';

const Experience = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6">Experience</h2>
        <div className="flex flex-col space-y-8">
          {experiences.map((experience, index) => (
            <div key={index} className="flex items-start">
              <div className="flex-shrink-0">
                <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center">
                  <FaBriefcase className="text-white text-xl hover:scale-[120%] ease-in duration-150" />
                </div>
                {index !== experiences.length - 1 && (
                  <div className="flex-grow bg-gray-300 w-1 h-20 ml-6"></div>
                )}
              </div>
              <div className="ml-8">
                <h3 className="text-2xl font-bold">{experience.title}</h3>
                <p className="text-gray-600 mb-2">{experience.company}</p>
                <div className="flex items-center text-gray-700 mb-4">
                  <FaCalendarAlt className="mr-2" />
                  <p>{experience.duration}</p>
                </div>
                <p className="text-gray-700">{experience.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
