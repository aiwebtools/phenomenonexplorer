
import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

interface GlowingButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  color?: "cyan" | "magenta" | "purple" | "blue";
  onClick?: () => void;
  dropdown?: boolean;
  dropdownItems?: { label: string; url: string }[];
}

const GlowingButton: React.FC<GlowingButtonProps> = ({
  children,
  className,
  href,
  color = "cyan",
  onClick,
  dropdown = false,
  dropdownItems = [],
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  
  // Define color styles
  const colorStyles = {
    cyan: {
      bg: "bg-neon-cyan/10",
      border: "border-neon-cyan/50",
      shadow: "shadow-neon-cyan",
      text: "text-neon-cyan",
      hover: "hover:bg-neon-cyan/20",
    },
    magenta: {
      bg: "bg-neon-magenta/10",
      border: "border-neon-magenta/50",
      shadow: "shadow-neon-magenta",
      text: "text-neon-magenta",
      hover: "hover:bg-neon-magenta/20",
    },
    purple: {
      bg: "bg-neon-purple/10",
      border: "border-neon-purple/50",
      shadow: "shadow-neon-purple",
      text: "text-neon-purple",
      hover: "hover:bg-neon-purple/20",
    },
    blue: {
      bg: "bg-neon-blue/10",
      border: "border-neon-blue/50",
      shadow: "shadow-neon-blue",
      text: "text-neon-blue",
      hover: "hover:bg-neon-blue/20",
    },
  };
  
  const styles = colorStyles[color];
  
  const handleButtonClick = () => {
    if (dropdown) {
      setIsDropdownOpen(!isDropdownOpen);
    } else if (onClick) {
      onClick();
    }
  };
  
  const buttonProps = {
    className: cn(
      "relative px-6 py-3 rounded-full border backdrop-blur-sm transition-all duration-300 transform",
      styles.bg,
      styles.border,
      styles.text,
      styles.hover,
      isHovered && styles.shadow,
      "font-medium tracking-wide text-shadow-glow uppercase text-sm md:text-base",
      className
    ),
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
    onClick: handleButtonClick,
  };
  
  // Render button with dropdown
  if (dropdown) {
    return (
      <div ref={dropdownRef} className="relative inline-block">
        <button {...buttonProps}>
          <span className="relative z-10 font-medium flex items-center">
            {children}
            <ChevronDown className="ml-2 h-4 w-4" />
          </span>
          {isHovered && (
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="absolute w-8 h-8 rounded-full bg-white/20 animate-ripple"></span>
            </span>
          )}
        </button>
        
        {isDropdownOpen && (
          <div 
            className="absolute z-[100] left-0 right-0 mt-2 w-64 rounded-xl border backdrop-blur-xl bg-black/95 border-white/20 shadow-lg shadow-neon-cyan/30 overflow-hidden"
            style={{ position: 'absolute', top: '100%' }}
          >
            <div className="py-1">
              {dropdownItems.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block px-4 py-3 hover:bg-white/20 ${styles.text} transition-colors duration-200`}
                >
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
  
  // Render either a button or an anchor for non-dropdown
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...buttonProps}>
        {isHovered && (
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="absolute w-8 h-8 rounded-full bg-white/20 animate-ripple"></span>
          </span>
        )}
        <span className="relative z-10 font-medium">{children}</span>
      </a>
    );
  }
  
  return (
    <button {...buttonProps}>
      {isHovered && (
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="absolute w-8 h-8 rounded-full bg-white/20 animate-ripple"></span>
        </span>
      )}
      <span className="relative z-10 font-medium">{children}</span>
    </button>
  );
};

export default GlowingButton;
