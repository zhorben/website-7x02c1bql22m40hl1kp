import React from 'react'
import { LinkedIn, Twitter, Facebook } from 'lucide-react'

import React from 'react';
import { LinkedIn, Twitter, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">John Doe Law</h3>
            <p>123 Legal Street, Cityville, State 12345</p>
            <p>Phone: (555) 123-4567</p>
            <p>Email: contact@johndoelaw.com</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300"><LinkedIn size={24} /></a>
            <a href="#" className="hover:text-gray-300"><Twitter size={24} /></a>
            <a href="#" className="hover:text-gray-300"><Facebook size={24} /></a>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 John Doe Law. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;