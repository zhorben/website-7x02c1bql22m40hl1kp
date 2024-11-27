import React from 'react'
import { Card, CardContent } from './ui/card'

import React from 'react';
import { Card, CardContent } from './ui/card';

const testimonials = [
  { name: 'Jane Smith', company: 'Tech Innovators Inc.', text: 'John's expertise was invaluable in navigating our complex merger. Highly recommended!' },
  { name: 'Michael Johnson', company: 'Global Enterprises LLC', text: 'We've relied on John's counsel for years. His knowledge of corporate law is unparalleled.' },
  { name: 'Sarah Lee', company: 'StartUp Solutions', text: 'As a startup, we needed guidance. John provided clear, actionable advice that set us up for success.' },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Client Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <p className="italic mb-4">"{testimonial.text}"</p>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.company}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;