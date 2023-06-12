import React from 'react';
import { skillDetails } from './__skillsDetails';

const SkillSection = () => {
  return (
    <section id="skills" className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {skillDetails.map((item) => (
            <div key={item.key} className="flex flex-col items-center">
              {item.icon}
              <h3 className="text-lg font-medium">{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
