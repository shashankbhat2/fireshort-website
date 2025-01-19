import React from 'react';

const CTABanner = () => {
  return (
    <section className="relative overflow-hidden border-t border-gray-800 font-primary">      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Ready to Revolutionize Your Content?
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Transform your videos into engaging content that captivates your audience
          </p>
          <div className="mt-8">
            <a
              href="https://app.fireshort.in"
              className="inline-flex items-center justify-center px-4 py-2 text-lg font-medium text-white rounded-lg shadow-lg hover:shadow-red-500/25 transition-all duration-300 hover:-translate-y-1 border border-red-500/20 bg-red-500"
            >
              Start Creating Now
            </a>
          </div>
        </div>
      </div>

    </section>
  );
};

export default CTABanner; 