
import React from 'react';
import GlowingButton from './GlowingButton';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/10 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-neon-cyan/5 blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo & info */}
          <div className="md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-cyan via-neon-purple to-neon-magenta p-[1px]">
                <div className="h-full w-full rounded-full bg-space-dark flex items-center justify-center">
                  <span className="text-xl font-bold text-white">PE</span>
                </div>
              </div>
              <span className="font-bold text-lg text-white">Phenomenon Explorer</span>
            </a>
            <p className="text-gray-400 mb-6">
              Advanced AI tools for investigating the unexplained and documenting paranormal phenomena.
            </p>
            <div className="absolute bottom-4 right-4 md:relative md:bottom-auto md:right-auto">
              <GlowingButton href="https://aiwebtools.lovable.app/?via=aiwebtools" className="rounded-full">
                More AI Tools
              </GlowingButton>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="text-white font-bold mb-4">AI Tools</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://chatgpt.com/g/g-67cdc7fe2fdc8191bf47c5e4ec78528b-ufo-investigation-gpt" className="text-gray-400 hover:text-neon-cyan transition-colors duration-300">
                  UFO Investigation GPT
                </a>
              </li>
              <li>
                <a href="https://chatgpt.com/g/g-67cdc3f657648191b1865eb62651d278-supernatural-myths-gpt" className="text-gray-400 hover:text-neon-magenta transition-colors duration-300">
                  Supernatural Myths GPT
                </a>
              </li>
              <li>
                <a href="https://chatgpt.com/g/g-67cdbfacd8a481918cb2f50a0aabd34a-cryptozoology-report-gpt" className="text-gray-400 hover:text-neon-purple transition-colors duration-300">
                  Cryptozoology Report GPT
                </a>
              </li>
              <li>
                <a href="https://chatgpt.com/g/g-67cdbca3ed408191b888c9c93a23776a-ghost-hunting-gpt" className="text-gray-400 hover:text-neon-blue transition-colors duration-300">
                  Ghost Hunting GPT 👻
                </a>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-white font-bold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#faq" className="text-gray-400 hover:text-white transition-colors duration-300">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#disclaimer" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Legal Disclaimer
                </a>
              </li>
              <li>
                <a href="https://openai.com/policies/privacy-policy/" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="https://aiwebtools.lovable.app/?via=aiwebtools" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:Contact@ai-webtools.com" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contact@ai-webtools.com
                </a>
              </li>
              <li>
                <a href="tel:+14758008096" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (475) 800-8096
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 <a href="https://aiwebtools.lovable.app/?via=aiwebtools" className="hover:text-white transition-colors duration-300">AI WEB TOOLS LLC</a> All rights reserved.
          </p>
          
          <div className="flex gap-6">
            <a href="https://openai.com/policies/privacy-policy/" className="text-gray-400 text-sm hover:text-white transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="https://aiwebtools.ai/terms-of-services" className="text-gray-400 text-sm hover:text-white transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
