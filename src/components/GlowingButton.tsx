
import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface GlowingButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  color?: "cyan" | "magenta" | "purple" | "blue";
  onClick?: () => void;
}

const GlowingButton: React.FC<GlowingButtonProps> = ({
  children,
  className,
  href,
  color = "cyan",
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
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
    onClick,
  };
  
  // Render either a button or an anchor
  if (href) {
    return (
      <a href={href} {...buttonProps}>
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
