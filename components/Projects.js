import React from 'react';
import {projects} from './Details/__projectDetails'
import {AiOutlineGithub} from 'react-icons/ai'

const Project = () => {
  return (
    <section className="bg-white rounded-xl py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-semibold text-black mb-4">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl hover:scale-105   ease-in duration-200">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-32 object-cover mb-4 rounded-lg"
              />
              <h3 className="text-xl font-semibold text-black mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a
              
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-black hover:bg-blue-500 text-white px-4 py-2 rounded-xl transition-colors duration-300 "
              >
                Github
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
