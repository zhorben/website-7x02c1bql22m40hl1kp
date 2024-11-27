import React from 'react'
import { Button } from './ui/button'

import React from 'react';
import { Button } from './ui/button';

const Hero: React.FC = () => {
  return (
    <section className="bg-gray-800 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Expert Legal Solutions for Your Business</h1>
        <p className="text-xl mb-8">Protecting your interests with decades of corporate law experience</p>
        <Button size="lg">Schedule a Consultation</Button>
      </div>
    </section>
  );
};

export default Hero;