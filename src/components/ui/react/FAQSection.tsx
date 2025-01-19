import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How does the AI content generation work?",
      answer: "Our AI analyzes your long-form content using advanced machine learning algorithms. It identifies key moments, topics, and patterns to automatically generate short-form content, highlight clips, and social media posts while maintaining the context and quality of your original content."
    },
    {
      question: "What types of content can I process?",
      answer: "Our platform supports a wide range of content formats including video files (.mp4, .mov), audio files (.mp3, .wav), and podcast RSS feeds. You can upload content directly or import from platforms like YouTube, Spotify, and other major content hosting services."
    },
    {
      question: "How accurate are the automated subtitles?",
      answer: "Our AI-powered subtitles are highly accurate and support multiple languages. The system continuously learns and improves from corrections. For professional content, we recommend a quick review of the generated subtitles, which can be easily edited in our interface."
    },
    {
      question: "Can I customize the output formats?",
      answer: "Yes! You can customize aspect ratios (16:9, 9:16, 1:1), export quality (up to 4K), subtitle styles, and branding elements. We also offer templates for different social media platforms to ensure your content looks perfect wherever you share it."
    },
    {
      question: "How long does it take to process my content?",
      answer: "Processing time depends on the length and type of your content. Most videos are processed in minutes - typically 5-10 minutes for an hour-long video. You'll receive a notification when your content is ready, and you can process multiple files simultaneously."
    },
    {
      question: "What about content security and privacy?",
      answer: "We take security seriously. All content is encrypted in transit and at rest. We use enterprise-grade security measures, and you retain full ownership of your content. Our systems are compliant with major data protection regulations."
    }
  ];

  return (
    <section className="py-24 px-4 bg-black/95">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300">
            Everything you need to know about our AI content platform
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#1E1E2E]/50 rounded-lg overflow-hidden
                border border-[#2D2D3A] hover:border-indigo-500/30
                shadow-lg hover:shadow-indigo-500/10
                transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full flex items-center justify-between p-6 text-left 
                  hover:bg-[#2D2D3A]/30 transition-colors"
              >
                <span className="text-lg font-semibold text-white">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-red-500 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-gray-300">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;