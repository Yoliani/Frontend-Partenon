import React from 'react';
import image from '../public/hero.png';
import HeroText from './Text/HeroText';
import Image from 'next/image';

const Landing = () => {
  return (
    <div className="">
      {' '}
      <div className="wrapper">
        {' '}
        <div className="inner-wrapper">
          <div className="left">
            {' '}
            <HeroText />
          </div>
          <div className="tilt-wrapper">
            {' '}
            <Image src={image} alt="image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
