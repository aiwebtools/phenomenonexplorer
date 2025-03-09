
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ToolCard from '../components/ToolCard';
import FAQ from '../components/FAQ';
import Disclaimer from '../components/Disclaimer';
import Footer from '../components/Footer';
import StarField from '../components/StarField';
import { toast } from '@/components/ui/use-toast';

const Index = () => {
  useEffect(() => {
    // Welcome toast
    setTimeout(() => {
      toast({
        title: "Welcome to Phenomenon Explorer AI Suite",
        description: "Explore our four specialized AI tools designed to investigate the unexplained.",
        duration: 5000,
      });
    }, 1500);
    
    // Change page title
    document.title = "Phenomenon Explorer AI Suite | AiWebTools.Ai";
  }, []);
  
  const tools = [
    {
      title: "UFO Investigation GPT",
      description: "A comprehensive investigator providing tailored support for UFO case investigations, legal inquiries, and hypothetical defense strategies.",
      iconPath: "M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z",
      gradient: "bg-tool-gradient-1",
      borderColor: "neon-cyan",
      glowColor: "neon-cyan",
      textGradient: "text-gradient-cyan",
      url: "https://chatgpt.com/g/g-67cdc7fe2fdc8191bf47c5e4ec78528b-ufo-investigation-gpt",
    },
    {
      title: "Supernatural Myths GPT",
      description: "Analyzes supernatural claims by cross-referencing historical records, scientific principles, and factual evidence across different cultures and time periods.",
      iconPath: "M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z",
      gradient: "bg-tool-gradient-2",
      borderColor: "neon-magenta",
      glowColor: "neon-magenta",
      textGradient: "text-gradient-magenta",
      url: "https://chatgpt.com/g/g-67cdc3f657648191b1865eb62651d278-supernatural-myths-gpt",
    },
    {
      title: "Cryptozoology Report GPT",
      description: "A documentation assistant offering structured reports for cryptid sightings with in-depth research, evidence analysis, and case management.",
      iconPath: "M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      gradient: "bg-tool-gradient-3",
      borderColor: "neon-purple",
      glowColor: "neon-purple",
      textGradient: "text-gradient-purple",
      url: "https://chatgpt.com/g/g-67cdbfacd8a481918cb2f50a0aabd34a-cryptozoology-report-gpt",
    },
    {
      title: "Ghost Hunting GPT 👻",
      description: "Guides users through structured methodologies to investigate paranormal activity with tools, best practices, and data analysis.",
      iconPath: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
      gradient: "bg-tool-gradient-4",
      borderColor: "neon-blue",
      glowColor: "neon-blue",
      textGradient: "text-gradient-blue",
      url: "https://chatgpt.com/g/g-67cdbca3ed408191b888c9c93a23776a-ghost-hunting-gpt",
    },
  ];

  return (
    <>
      <Helmet>
        <meta name="description" content="Phenomenon Explorer AI Suite - Advanced AI tools for investigating UFOs, supernatural myths, cryptids, and paranormal activity." />
        <meta property="og:title" content="Phenomenon Explorer AI Suite | AiWebTools.Ai" />
        <meta property="og:description" content="Harness the power of specialized AI to investigate the unexplained - from UFO encounters to supernatural phenomena." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <StarField />
      <Header />
      
      <main className="relative">
        <Hero />
        
        {/* Tools section */}
        <section id="tools" className="py-24 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block mb-4 py-1 px-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
                <span className="text-sm text-white font-medium">Four specialized AI tools</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Explore the <span className="text-gradient-rainbow">Unexplained</span>
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Our AI suite provides specialized tools for investigating various paranormal and unexplained phenomena with scientific precision and analytical depth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tools.map((tool, index) => (
                <ToolCard
                  key={index}
                  title={tool.title}
                  description={tool.description}
                  iconPath={tool.iconPath}
                  gradient={tool.gradient}
                  borderColor={tool.borderColor}
                  glowColor={tool.glowColor}
                  textGradient={tool.textGradient}
                  url={tool.url}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonials section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-cyan/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-magenta/50 to-transparent"></div>
          
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block mb-4 py-1 px-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
                <span className="text-sm text-white font-medium">User experiences</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                What <span className="text-gradient-rainbow">Explorers</span> Say
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Testimonial 1 */}
              <div className="glass-morphism rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-neon-cyan/10 border border-neon-cyan/30 flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-neon-cyan" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Alex Thompson</h4>
                    <p className="text-gray-400 text-sm">UFO Researcher</p>
                  </div>
                </div>
                <p className="text-gray-300">
                  "UFO Investigation GPT changed how I document sightings. The structured format and analytical capabilities help me present cases with much more credibility and detail than ever before."
                </p>
                <div className="mt-4 flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-neon-cyan" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              
              {/* Testimonial 2 */}
              <div className="glass-morphism rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-neon-magenta/10 border border-neon-magenta/30 flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-neon-magenta" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Maya Rodriguez</h4>
                    <p className="text-gray-400 text-sm">Paranormal Investigator</p>
                  </div>
                </div>
                <p className="text-gray-300">
                  "Ghost Hunting GPT is like having an expert partner during investigations. The tools analysis and historical context have helped me understand patterns I would have missed otherwise."
                </p>
                <div className="mt-4 flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-neon-magenta" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              
              {/* Testimonial 3 */}
              <div className="glass-morphism rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-neon-purple/10 border border-neon-purple/30 flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-neon-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">James Wilson</h4>
                    <p className="text-gray-400 text-sm">Folklore Scholar</p>
                  </div>
                </div>
                <p className="text-gray-300">
                  "Supernatural Myths GPT has been invaluable for my research. The ability to cross-reference historical accounts and analyze cultural patterns has added depth to my work on folklore origins."
                </p>
                <div className="mt-4 flex">
                  {[1, 2, 3, 4, 5].map((star, index) => (
                    <svg key={star} xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${index < 4 ? 'text-neon-purple' : 'text-gray-600'}`} viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* How it works section */}
        <section className="py-24 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block mb-4 py-1 px-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
                <span className="text-sm text-white font-medium">Simple process</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                How It <span className="text-gradient-rainbow">Works</span>
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Our AI tools are designed to be intuitive and effective, guiding you through investigations of unexplained phenomena step by step.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
              {/* Connection line */}
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-purple hidden md:block"></div>
              
              {/* Step 1 */}
              <div className="glass-morphism rounded-2xl p-8 relative">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-space-dark border-4 border-neon-cyan flex items-center justify-center text-neon-cyan font-bold text-xl z-10">
                  1
                </div>
                <div className="pt-6">
                  <h3 className="text-xl font-bold text-white mb-4">Choose Your Tool</h3>
                  <p className="text-gray-300">
                    Select the specialized AI tool that matches your area of interest - UFOs, supernatural myths, cryptozoology, or ghost hunting.
                  </p>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="glass-morphism rounded-2xl p-8 relative">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-space-dark border-4 border-neon-magenta flex items-center justify-center text-neon-magenta font-bold text-xl z-10">
                  2
                </div>
                <div className="pt-6">
                  <h3 className="text-xl font-bold text-white mb-4">Share Your Case</h3>
                  <p className="text-gray-300">
                    Provide details, evidence, or questions about your phenomenon of interest. The more information you share, the better the analysis.
                  </p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="glass-morphism rounded-2xl p-8 relative">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-space-dark border-4 border-neon-purple flex items-center justify-center text-neon-purple font-bold text-xl z-10">
                  3
                </div>
                <div className="pt-6">
                  <h3 className="text-xl font-bold text-white mb-4">Get Expert Analysis</h3>
                  <p className="text-gray-300">
                    Receive structured reports, analyses, and insights based on the latest methodologies in paranormal investigation and research.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <FAQ />
        <Disclaimer />
      </main>
      
      <Footer />
    </>
  );
};

export default Index;
