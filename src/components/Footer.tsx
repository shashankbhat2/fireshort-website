import React from "react";
import { Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Features: [
      { title: "AI Video Editor", link: "ai-video-editor" },
      { title: "Transcript Analysis", link: "transcript-analysis" },
      { title: "Content Repurposing", link: "content-repurposing" }
    ],
    Product: [
      { title: "Pricing", link: "pricing" },
      { title: "Use Cases", link: "use-cases" },
      { title: "FAQ", link: "faq" },
      { title: "Compare", link: "compare" }
    ],
    Company: [
      { title: "About", link: "about" },
      { title: "Blog", link: "blog" },
      { title: "Careers", link: "careers" },
      { title: "Contact", link: "contact" }
    ],
    Resources: [
      { title: "Documentation", link: "docs" },
      { title: "API", link: "api" },
      { title: "Support", link: "support" },
      { title: "Community", link: "community" }
    ]
  };

  return (
    <div className="relative">
      <footer className="relative font-primary z-10 bg-brand-background">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row justify-between gap-12">
            {/* Logo and Social Section */}
            <div className="flex flex-col gap-6">
              <div>
                <img src="/logo.png" alt="Fireshort" className="h-12 w-auto" />
                <p className="mt-4 text-brand-gray-600 dark:text-brand-gray-400 max-w-xs">
                  Transform your long-form content into engaging social media
                  posts with AI
                </p>
              </div>

              <div className="flex gap-4">
                <a
                  href="https://twitter.com/fireshortapp"
                  className="text-brand-gray-600 hover:text-primary transition-colors"
                >
                  <Twitter className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-brand-gray-600 hover:text-primary transition-colors"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-brand-gray-600 hover:text-primary transition-colors"
                >
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Links Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h3 className="font-bold text-lg text-brand-gray-800 dark:text-brand-gray-200 mb-4">
                    {category}
                  </h3>
                  <ul className="space-y-3">
                    {links.map((link) => (
                      <li key={link.title}>
                        <a
                          href={`/${link.link}`}
                          className="text-brand-gray-600 dark:text-brand-gray-400 hover:text-primary transition-colors"
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

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-brand-gray-600 dark:text-brand-gray-400">
              &copy; {new Date().getFullYear()} Fireshort. All rights reserved.
            </p>
            <p className="text-brand-gray-600 dark:text-brand-gray-400">
              Made with <span className="text-primary">❤️</span> in{" "}
              <span className="font-bold">Bengaluru</span>
            </p>
          </div>
        </div>
        <div className="w-full text-center overflow-hidden z-0 pointer-events-none select-none">
          <div className="container mx-auto px-4">
            <h1 className="text-[180px] font-primary font-bold text-red-900/5 leading-none text-shadow-lg">
              fireshort
            </h1>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;