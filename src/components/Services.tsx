import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from './ui/card'
import { ScrollArea } from './ui/scroll-area'

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { ScrollArea } from './ui/scroll-area';

const services = [
  { title: 'Contract Law', description: 'Drafting, reviewing, and negotiating complex business contracts.' },
  { title: 'Corporate Compliance', description: 'Ensuring your business adheres to legal and regulatory requirements.' },
  { title: 'Business Disputes', description: 'Representing your interests in litigation and alternative dispute resolution.' },
  { title: 'Mergers & Acquisitions', description: 'Guiding you through complex corporate transactions.' },
  { title: 'Intellectual Property', description: 'Protecting your company's valuable intellectual assets.' },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <ScrollArea className="h-[400px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </div>
    </section>
  );
};

export default Services;