'use client'
import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../components/Details/__animationDetails.json'; // Replace with the actual path to your animation JSON file

const LottieAnimation = () => {
    return (
      <div style={{ width: '300px', height: '300px' }}>
        <Lottie
          animationData={animationData}
          loop
          autoplay
        />
      </div>
    );
  };
export default LottieAnimation;
