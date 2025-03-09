
import React, { useState } from 'react';
import GlowingButton from './GlowingButton';
import { cn } from '@/lib/utils';

interface ToolCardProps {
  title: string;
  description: string;
  iconPath: string;
  gradient: string;
  borderColor: string;
  glowColor: string;
  textGradient: string;
  url: string;
  index: number;
}

const ToolCard: React.FC<ToolCardProps> = ({
  title,
  description,
  iconPath,
  gradient,
  borderColor,
  glowColor,
  textGradient,
  url,
  index,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={cn(
        'glass-morphism rounded-2xl p-1 transition-all duration-300 overflow-hidden',
        `border-${borderColor}/40`,
        isHovered ? `shadow-${glowColor}` : ''
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      <div className={cn(
        'h-full rounded-2xl p-6 md:p-8 flex flex-col',
        gradient
      )}>
        {/* Icon */}
        <div className="mb-6 w-12 h-12 rounded-full glass-morphism flex items-center justify-center relative">
          <div className={cn(
            'absolute inset-0 rounded-full opacity-0 transition-opacity duration-300',
            isHovered ? 'opacity-40' : ''
          )} style={{ boxShadow: `0 0 20px ${glowColor}` }}></div>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={iconPath} />
          </svg>
        </div>
        
        {/* Content */}
        <h3 className={cn(
          'text-2xl font-bold mb-3 transition-colors duration-300',
          isHovered ? textGradient : 'text-white'
        )}>
          {title}
        </h3>
        
        <p className="text-gray-300 mb-6 flex-grow">
          {description}
        </p>
        
        <GlowingButton 
          href={url} 
          className="self-start"
          color={
            borderColor === "neon-cyan" ? "cyan" : 
            borderColor === "neon-magenta" ? "magenta" : 
            borderColor === "neon-purple" ? "purple" : "blue"
          }
        >
          Try Now
        </GlowingButton>
      </div>
    </div>
  );
};

export default ToolCard;
