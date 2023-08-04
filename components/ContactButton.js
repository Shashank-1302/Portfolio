'use client'
import React from 'react';

const ContactButton = () => {
  const handleContactClick = () => {
    const email = 'shashankshekhar1302@gmail.com';
    const subject = 'hi';
    const body = 'Hi, I would like to get in touch with you.';
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <button
      className="relative -top-1 -left-1 bg-gray-800 py-2.5 px-5 font-medium uppercase text-white transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-full before:border-2 before:border-gray-700 before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0"
      onClick={handleContactClick}
    >
      Contact Me
    </button>
  );
};

export default ContactButton;
