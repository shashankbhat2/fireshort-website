import React, { useState } from 'react';

const TabsSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    "Smart Clips",
    "Subtitles",
    "B-rolls",
    "Transcript",
    "Content Generation"
  ];

  return (
    <div className="relative w-full -mb-32">
      <div className="max-h-[650px] relative z-10">
        <div className="grid gap-2 grid-cols-2 md:grid-cols-5 w-full mb-4">
          {tabs.map((tab, index) => (
            <button 
              key={index}
              className={`tab-button rounded-md border-brand-black border-2 duration-200 p-2
                ${activeTab === index 
                  ? 'bg-primary text-white' 
                  : 'text-brand-gray-600 hover:border-primary hover:text-primary'
                }
                ${index === tabs.length - 1 ? 'col-span-2 md:col-span-1' : ''}
              `}
              onClick={() => setActiveTab(index)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="border-2 border-brand-black rounded-lg h-[600px] bg-white">
          <div className="w-full h-full rounded-md bg-white flex items-center justify-center">
            Video Content for {tabs[activeTab]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabsSection;