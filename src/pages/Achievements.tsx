import React from 'react';
import { Award, Medal, FileText, Calendar } from 'lucide-react';
import { achievements } from '../data/portfolioData';

const Achievements = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'certification':
        return <Medal className="h-6 w-6" />;
      case 'publication':
        return <FileText className="h-6 w-6" />;
      default:
        return <Award className="h-6 w-6" />;
    }
  };

  const getIconColor = (type: string) => {
    switch (type) {
      case 'certification':
        return 'text-blue-600 bg-blue-100';
      case 'publication':
        return 'text-purple-600 bg-purple-100';
      default:
        return 'text-green-600 bg-green-100';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white pt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            My <span className="text-blue-600">Achievements</span>
          </h1>
        </div>

        {/* Achievements List */}
        <div className="space-y-8">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                {/* Icon */}
                <div className={`rounded-2xl p-4 ${getIconColor(achievement.type)} w-fit`}>
                  {getIcon(achievement.type)}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 lg:mb-0">
                      {achievement.title}
                    </h3>
                    <div className="flex items-center text-gray-500">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="font-medium">{achievement.date}</span>
                    </div>
                  </div>

                  <p className="text-lg font-semibold text-blue-600 mb-3">
                    {achievement.organization}
                  </p>

                  <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
