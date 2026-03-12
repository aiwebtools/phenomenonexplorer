
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10 last:border-b-0">
      <button 
        className="w-full py-6 flex justify-between items-center text-left" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-base sm:text-lg md:text-xl font-medium text-white pr-4">{question}</h3>
        <span className={cn(
          "text-white transform transition-transform duration-300", 
          isOpen ? "rotate-45" : ""
        )}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>
      <div 
        className={cn(
          "overflow-hidden transition-all duration-300", 
          isOpen ? "max-h-96 pb-6" : "max-h-0 pb-0"
        )}
      >
        <p className="text-gray-300">{answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-24 bg-space-light/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient-rainbow">Frequently Asked Questions</h2>
            <p className="text-gray-300">Everything you need to know about the Phenomenon Explorer AI Suite</p>
          </div>
          
          <div className="glass-morphism rounded-2xl overflow-hidden">
            <FAQItem
              question="What is the Phenomenon Explorer AI Suite?"
              answer="The Phenomenon Explorer AI Suite is a collection of four specialized AI tools designed to investigate and analyze various unexplained phenomena. It includes UFO Investigation GPT, Supernatural Myths GPT, Cryptozoology Report GPT, and Ghost Hunting GPT. Each tool offers unique capabilities for researching, documenting, and analyzing different types of paranormal or unexplained events."
            />
            <FAQItem
              question="How does UFO Investigation GPT work?"
              answer="UFO Investigation GPT combines structured report formats with hypothetical scenario reconstructions for UFO event analysis. It integrates advanced AI capabilities for legal defense, data analysis, and investigative methodologies to provide comprehensive support for UFO case investigations. The tool performs in-depth research, evidence analysis, legal report drafting, and much more while maintaining scientific analysis standards."
            />
            <FAQItem
              question="What can Supernatural Myths GPT help me with?"
              answer="Supernatural Myths GPT analyzes supernatural claims, myths, and legends by cross-referencing historical records, scientific principles, and factual evidence. It debunks myths while providing cultural context to supernatural beliefs across different time periods. The tool conducts deep web searches, performs truth-scoring breakdowns, highlights biases, and cross-examines supernatural stories with historical context."
            />
            <FAQItem
              question="How do I use Cryptozoology Report GPT?"
              answer="Cryptozoology Report GPT functions as a comprehensive documentation assistant for cryptid sightings. It performs in-depth research, structured report drafting, witness communication, evidence analysis, and more. Simply provide details about your sighting, including witness information, location, environmental conditions, and any evidence, and the tool will help you build a structured and scientifically sound report."
            />
            <FAQItem
              question="What features does Ghost Hunting GPT offer?"
              answer="Ghost Hunting GPT guides users through structured methodologies for investigating paranormal activity. It provides detailed instructions on ghost hunting tools, best practices, investigation techniques, and paranormal data analysis using Python. The tool can help analyze supernatural information, create investigation outlines, analyze evidence like EMF readings and EVPs, and provide case studies for reference."
            />
            <FAQItem
              question="Are these AI tools scientifically accurate?"
              answer="The Phenomenon Explorer AI Suite tools bridge the gap between unexplained phenomena and scientific analysis. While they take reports of paranormal events seriously, they also apply critical thinking, data analysis, and scientific principles when analyzing evidence. They provide balanced perspectives that consider both conventional explanations and potential paranormal factors."
            />
            <FAQItem
              question="Can I use these tools for research purposes?"
              answer="Yes, these tools are excellent for research purposes across various paranormal and unexplained phenomena. They can help organize information, analyze evidence, draft structured reports, compare historical accounts, and much more. Whether you're a serious researcher or simply curious about unexplained events, the suite provides valuable resources and analytical capabilities."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
