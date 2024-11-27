import React from 'react'
import { Card, CardContent } from './ui/card'

import React from 'react';
import { Card, CardContent } from './ui/card';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About John Doe</h2>
        <Card>
          <CardContent className="p-6">
            <p className="mb-4">
              John Doe is a renowned corporate lawyer with over 20 years of experience in providing expert legal solutions to businesses of all sizes. He has successfully handled numerous high-profile cases and complex corporate transactions.
            </p>
            <p className="mb-4">
              Credentials:
              <ul className="list-disc list-inside">
                <li>J.D. from Harvard Law School</li>
                <li>Member of the American Bar Association</li>
                <li>Board Certified in Business Law</li>
              </ul>
            </p>
            <p>
              Key Achievements:
              <ul className="list-disc list-inside">
                <li>Successfully negotiated multi-billion dollar mergers</li>
                <li>Recognized as a "Top Corporate Lawyer" by Legal 500</li>
                <li>Published author on corporate law and compliance</li>
              </ul>
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;