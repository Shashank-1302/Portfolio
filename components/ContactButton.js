'use client'
import React from 'react';

const ContactButton = () => {
  const handleContactClick = () => {
    const email = 'shashankshekhar1302@gmail.com';
    const subject = 'Inquiry from Next.js Website';
    const body = 'Hi, I would like to get in touch with you.';
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <button
      className="bg-black text-white py-2 px-4 rounded-lg text-base sm:text-lg md:text-xl lg:text-2xl hover:bg-slate-800"
      onClick={handleContactClick}
    >
      Contact Me
    </button>
  );
};

export default ContactButton;
