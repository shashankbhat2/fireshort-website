import React from "react";
import { Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Features: [
      { title: "Content Repurposing", link: "/features/content-repurposing" }, 
      { title: "Smart AI Highlight Clips", link: "/features/smart-clips" },
      { title: "AI Subtitles", link: "/features/ai-subtitles" },
      { title: "AI B-rolls", link: "/features/ai-b-rolls" },
    ],
    Product: [
      { title: "Pricing", link: "/pricing" },
      { title: "Use Cases", link: "/use-cases" },
      { title: "FAQ", link: "/faq" },  
      { title: "Compare", link: "/compare" }
    ],
    Company: [
      { title: "About", link: "about" },
      { title: "Blog", link: "blog" },
      { title: "Careers", link: "careers" },
      { title: "Contact", link: "contact" }
    ],
  };

  return (
    <div className="relative">
      <footer className="relative font-primary z-10 bg-[#0A0A0B] border-t border-[#2D2D3A]/30">
        <div className="container mx-auto px-4 py-16 relative">
          <div className="flex flex-col md:flex-row justify-between w-full">
            <div className="flex flex-col gap-6">
              <div>
                <img src="/logo.png" alt="Fireshort" className="h-12 w-auto" />
                <p className="mt-4 text-gray-400 max-w-xs">
                  Transform your long-form content into engaging social media
                  posts with AI
                </p>
              </div>

              <div className="flex gap-4">
                <a
                  href="https://twitter.com/fireshortapp"
                  className="text-gray-400 hover:text-indigo-400 transition-colors duration-300"
                >
                  <Twitter className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-indigo-400 transition-colors duration-300"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-indigo-400 transition-colors duration-300"
                >
                  <Youtube className="w-6 h-6" />
                </a>
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-gray-400">
                  &copy; {new Date().getFullYear()} Fireshort. All rights reserved.
                </p>
                <p className="text-gray-400">
                  Made with <span className="text-red-500">❤️</span> in{" "}
                  <span className="font-medium text-indigo-400">Bengaluru</span>
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h3 className="font-bold text-lg text-white mb-4">
                    {category}
                  </h3>
                  <ul className="space-y-3">
                    {links.map((link) => (
                      <li key={link.title}>
                        <a
                          href={`${link.link}`}
                          className="text-gray-400 hover:text-indigo-400 transition-colors duration-300"
                        >
                          {link.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full text-center overflow-hidden z-0 pointer-events-none select-none">
          <div className="container mx-auto px-4">
            <h1 className="text-[180px] font-primary font-bold text-indigo-400/5 leading-none">
              fireshort
            </h1>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;