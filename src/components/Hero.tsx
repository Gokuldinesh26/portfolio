import React from 'react';
import { Download, ChevronDown, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = personalInfo.resumeUrl;
    link.download = 'Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16">
        <div className="text-center">
          {/* Greeting Animation */}
          <div className="flex items-center justify-center mb-6 animate-fade-in">
            <Sparkles className="h-6 w-6 text-blue-500 mr-2 animate-spin-slow" />
            <p className="text-lg text-gray-600 font-medium">Welcome to my portfolio</p>
            <Sparkles className="h-6 w-6 text-blue-500 ml-2 animate-spin-slow" />
          </div>

          {/* Name with typing animation effect */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 animate-slide-up">
            Hi, I'm{' '}
           <span className="text-blue-700 font-extrabold">
  {personalInfo.name}
</span>


          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up animation-delay-300">
            {personalInfo.tagline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-slide-up animation-delay-600">
            <button
              onClick={downloadResume}
              className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center space-x-2"
            >
              <Download className="h-5 w-5 group-hover:animate-bounce" />
              <span>Download Resume</span>
            </button>
            
            <button
              onClick={() => scrollToSection('projects')}
              className="group border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              View My Work
            </button>
          </div>

          {/* Scroll indicator */}
          <button
            onClick={() => scrollToSection('skills')}
            className="animate-bounce hover:text-blue-600 transition-colors duration-200 group"
          >
            <ChevronDown className="h-8 w-8 mx-auto text-gray-400 group-hover:text-blue-600" />
          </button>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 left-8 w-16 h-16 border-2 border-blue-200 rounded-lg rotate-45 animate-float"></div>
      <div className="absolute top-1/3 right-8 w-12 h-12 bg-blue-100 rounded-full animate-float animation-delay-1000"></div>
      <div className="absolute bottom-1/4 left-1/4 w-8 h-8 bg-indigo-200 rounded-full animate-float animation-delay-2000"></div>
    </section>
  );
};

export default Hero;
