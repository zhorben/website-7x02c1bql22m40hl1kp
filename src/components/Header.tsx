import React from 'react'
import { Button } from './ui/button'

import React from 'react';
import { Button } from './ui/button';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">John Doe Law</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#services" className="text-gray-600 hover:text-gray-800">Services</a></li>
            <li><a href="#about" className="text-gray-600 hover:text-gray-800">About</a></li>
            <li><a href="#contact" className="text-gray-600 hover:text-gray-800">Contact</a></li>
          </ul>
        </nav>
        <Button variant="outline">Schedule Consultation</Button>
      </div>
    </header>
  );
};

export default Header;