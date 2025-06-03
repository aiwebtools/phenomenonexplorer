
import React, { useState, useEffect } from 'react';
import GlowingButton from './GlowingButton';
import DisclaimerPopup from './DisclaimerPopup';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
    
    // Check if the user has already agreed to the disclaimer
    const hasAgreed = localStorage.getItem('disclaimerAgreed');
    if (!hasAgreed) {
      setShowDisclaimer(true);
    }
  }, []);
  
  const handleAgreeDisclaimer = () => {
    localStorage.setItem('disclaimerAgreed', 'true');
    setShowDisclaimer(false);
  };
  
  const toolItems = [
    { 
      label: "UFO Investigation GPT", 
      url: "https://chatgpt.com/g/g-67cdc7fe2fdc8191bf47c5e4ec78528b-ufo-investigation-gpt" 
    },
    { 
      label: "Supernatural Myths GPT", 
      url: "https://chatgpt.com/g/g-67cdc3f657648191b1865eb62651d278-supernatural-myths-gpt" 
    },
    { 
      label: "Cryptozoology Report GPT", 
      url: "https://chatgpt.com/g/g-67cdbfacd8a481918cb2f50a0aabd34a-cryptozoology-report-gpt" 
    },
    { 
      label: "Ghost Hunting GPT 👻", 
      url: "https://chatgpt.com/g/g-67cdbca3ed408191b888c9c93a23776a-ghost-hunting-gpt" 
    },
  ];
  
  return (
    <>
      {showDisclaimer && <DisclaimerPopup onAgree={handleAgreeDisclaimer} />}
      
      <section className="min-h-screen relative flex flex-col justify-center items-center pt-24 pb-16 overflow-visible">
        {/* 3D floating orb */}
        <div className={`absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[500px] h-[500px] opacity-0 ${isVisible ? 'opacity-100' : ''} transition-opacity duration-1000`}>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-purple opacity-10 blur-3xl animate-pulse"></div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-1/3 left-1/4 w-16 h-16 rounded-full border border-neon-cyan opacity-20 animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 rounded-full border border-neon-magenta opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-2/3 left-1/3 w-20 h-20 rounded-full border border-neon-purple opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className={`max-w-4xl mx-auto text-center opacity-0 transform translate-y-10 ${isVisible ? 'opacity-100 translate-y-0' : ''} transition-all duration-1000 delay-300`}>
            {/* UFO Image */}
            <div className="relative mb-8 max-w-2xl mx-auto">
              <img 
                src="https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-ufo-hovering-in-the-sky-wit_w8l4l.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true" 
                alt="Free AI tools for UFO investigation and paranormal research - AIWEBTOOLS.AI" 
                className="rounded-2xl border border-white/10 shadow-neon-cyan w-full max-h-[200px] sm:max-h-[300px] object-cover object-center"
              />
              <div className="absolute inset-0 rounded-2xl border border-neon-cyan/20 shadow-neon-cyan opacity-50"></div>
            </div>
            
            {/* Tag line */}
            <div className="inline-block mb-4 sm:mb-6 py-1 px-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
              <span className="text-xs sm:text-sm text-gradient-rainbow font-medium">Unveil the unexplained with free AI tools precision</span>
            </div>
            
            {/* Title */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 tracking-tight">
              <span className="block">Free AI Tools for</span>
              <span className="block">Phenomenon Investigation</span>
              <span className="text-gradient-rainbow">by AIWEBTOOLS.AI</span>
            </h1>
            
            {/* Description */}
            <p className="text-sm sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-10 max-w-2xl mx-auto">
              Harness the power of specialized free AI tools to investigate the unexplained - from UFO encounters to supernatural phenomena, cryptozoology to ghost hunting. Advanced GPT technology at your fingertips.
            </p>
            
            {/* Button group */}
            <div className="flex flex-wrap justify-center gap-4 relative z-20">
              <GlowingButton 
                dropdown={true} 
                dropdownItems={toolItems} 
                color="cyan">
                Start Using Free AI Tools
              </GlowingButton>
              <GlowingButton href="https://aiwebtools.ai" color="magenta">
                Explore More Free AI Tools
              </GlowingButton>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className={`absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-0 ${isVisible ? 'opacity-100' : ''} transition-opacity duration-1000 delay-1000`}>
          <p className="text-sm text-gray-400 mb-2">Scroll to explore our free AI tools</p>
          <div className="w-6 h-10 rounded-full border border-gray-500 flex justify-center p-1">
            <div className="w-1 h-2 bg-white rounded-full animate-[float_1.5s_ease-in-out_infinite]"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
