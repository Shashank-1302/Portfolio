import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-white py-8 md:py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 ">
            <img
              className="w-auto h-auto object-cover  rounded-xl"
              src="/OIP.jpeg"
              alt="Profile Image"
            />
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0 md:ml-8">
            <p className="text-base md:text-lg text-gray-700">
              Hi, I am Shashank Shekhar, a 2nd Year Computer Science student and a full stack developer. I have a
              passion for building web applications that are not only visually appealing but also highly functional
              and user-friendly.
            </p>
            <p className="text-base md:text-lg text-gray-700 mt-4">
              I specialize in front-end development using modern web technologies such as HTML, CSS, JavaScript,
              and React. I also have experience working with back-end technologies such as Node.js and Express.
            </p>
            <p className="text-base md:text-lg text-gray-700 mt-4">
              In my free time, I enjoy exploring new technologies, learning new programming languages, and
              contributing to open-source projects. I am always excited to take on new challenges and collaborate
              with like-minded individuals to create amazing web experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
