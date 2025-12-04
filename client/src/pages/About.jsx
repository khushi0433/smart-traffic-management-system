import React from 'react';
import { Target, Users, Globe, Award } from 'lucide-react';

function About() {
  const values = [
    {
      icon: <Target className="h-8 w-8 text-primary-600" />,
      title: "Our Mission",
      description: "To revolutionize urban mobility through intelligent traffic management solutions."
    },
    {
      icon: <Users className="h-8 w-8 text-primary-600" />,
      title: "Our Team",
      description: "Experts in AI, traffic engineering, and urban planning working together."
    },
    {
      icon: <Globe className="h-8 w-8 text-primary-600" />,
      title: "Global Impact",
      description: "Serving cities worldwide to create smarter, more efficient urban spaces."
    },
    {
      icon: <Award className="h-8 w-8 text-primary-600" />,
      title: "Excellence",
      description: "Committed to delivering the highest quality solutions and support."
    }
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About STMS</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Smart Traffic Management System is at the forefront of urban mobility innovation, 
            combining cutting-edge technology with practical solutions.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-primary-50 rounded-2xl p-8 mb-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Making Cities Smarter, One Intersection at a Time
            </h2>
            <p className="text-gray-700">
              Founded with a vision to transform urban transportation, STMS leverages artificial 
              intelligence and real-time data to optimize traffic flow, reduce congestion, and 
              create more livable cities for everyone.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Story Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              STMS began as a hackathon project in 2024, where a team of developers, 
              traffic engineers, and data scientists came together to address the 
              growing problem of urban traffic congestion.
            </p>
            <p>
              What started as a simple prototype has evolved into a comprehensive 
              platform that now serves cities around the world. Our journey has been 
              driven by a shared passion for using technology to solve real-world 
              problems and improve quality of life.
            </p>
            <p>
              Today, we continue to innovate, constantly adding new features and 
              capabilities to help cities become smarter, more efficient, and more 
              sustainable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;