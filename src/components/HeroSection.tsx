import React from 'react';
import { FaGavel, FaArrowLeft } from 'react-icons/fa';

interface HeroSectionProps {
  firmName?: string;
  yearsOfExperience?: number;
}

export default function HeroSection({ 
  firmName = 'rrrr',
  yearsOfExperience = 15 
}: HeroSectionProps) {
  return (
    <div className="bg-primary-light text-right min-h-[80vh] flex flex-col justify-center relative overflow-hidden" dir="rtl">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-secondary-light transform rotate-45 scale-150 translate-x-1/2 translate-y-1/4"></div>
      </div>
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="max-w-3xl mr-auto">
          <div className="flex items-center mb-4">
            <FaGavel className="text-secondary-dark text-3xl ml-3" />
            <h2 className="text-xl font-medium text-secondary-dark">{firmName}</h2>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            מומחים במשפט <span className="text-secondary-dark">טכנולוגיה</span> ודיני אינטרנט
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            מלווים חברות טכנולוגיה וסטארטאפים כבר {yearsOfExperience} שנים עם ניסיון עשיר בתחום המשפטי הדיגיטלי
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <button className="bg-secondary-dark hover:bg-secondary-darker text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 flex items-center">
              קביעת פגישת ייעוץ
              <FaArrowLeft className="mr-2 text-sm" />
            </button>
            
            <button className="bg-transparent hover:bg-gray-100 text-gray-800 font-semibold py-3 px-8 border border-gray-400 rounded-lg transition-all duration-300">
              אודות המשרד
            </button>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-l from-secondary-light to-primary-dark"></div>
      <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-secondary-light opacity-20"></div>
      <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-primary-dark opacity-10"></div>
    </div>
  );
}