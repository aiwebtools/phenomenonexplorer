
import React, { useState, useEffect } from "react";
import GlowingButton from "./GlowingButton";
import { cn } from "@/lib/utils";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full",
        scrolled
          ? "py-3 bg-space-dark/80 backdrop-blur-md border-b border-white/10"
          : "py-5 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-neon-cyan via-neon-purple to-neon-magenta p-[1px] overflow-hidden">
            <div className="absolute inset-0 rounded-full bg-space-dark/80"></div>
            <div className="relative h-full w-full flex items-center justify-center">
              <span className="text-xl font-bold text-white">PE</span>
            </div>
          </div>
          <div className="flex flex-col items-start">
            <span className="font-bold text-lg text-white">Phenomenon Explorer</span>
            <span className="text-xs text-gray-400 -mt-1 group-hover:text-gradient-rainbow transition-all duration-300">
              Presented by <a href="http://www.aiwebtools.ai" className="underline">AiWebTools.Ai</a>
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a
            href="https://chatgpt.com/g/g-67cdc7fe2fdc8191bf47c5e4ec78528b-ufo-investigation-gpt"
            className="text-gray-300 hover:text-neon-cyan transition-colors duration-300"
          >
            UFO Investigation GPT
          </a>
          <a
            href="https://chatgpt.com/g/g-67cdc3f657648191b1865eb62651d278-supernatural-myths-gpt"
            className="text-gray-300 hover:text-neon-magenta transition-colors duration-300"
          >
            Supernatural Myths GPT
          </a>
          <a
            href="https://chatgpt.com/g/g-67cdbfacd8a481918cb2f50a0aabd34a-cryptozoology-report-gpt"
            className="text-gray-300 hover:text-neon-purple transition-colors duration-300"
          >
            Cryptozoology Report GPT
          </a>
          <a
            href="https://chatgpt.com/g/g-67cdbca3ed408191b888c9c93a23776a-ghost-hunting-gpt"
            className="text-gray-300 hover:text-neon-blue transition-colors duration-300"
          >
            Ghost Hunting GPT 👻
          </a>
          <a
            href="#faq"
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            FAQ
          </a>
          <a
            href="#disclaimer"
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            Disclaimer
          </a>
          <GlowingButton href="https://aiwebtools.lovable.app/?via=aiwebtools" color="cyan">
            More AI Tools
          </GlowingButton>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-morphism border-t border-white/10 py-4 animate-fadeIn">
          <nav className="container mx-auto px-4 flex flex-col gap-4">
            <a
              href="https://chatgpt.com/g/g-67cdc7fe2fdc8191bf47c5e4ec78528b-ufo-investigation-gpt"
              className="text-gray-300 hover:text-neon-cyan py-2 transition-colors duration-300"
            >
              UFO Investigation GPT
            </a>
            <a
              href="https://chatgpt.com/g/g-67cdc3f657648191b1865eb62651d278-supernatural-myths-gpt"
              className="text-gray-300 hover:text-neon-magenta py-2 transition-colors duration-300"
            >
              Supernatural Myths GPT
            </a>
            <a
              href="https://chatgpt.com/g/g-67cdbfacd8a481918cb2f50a0aabd34a-cryptozoology-report-gpt"
              className="text-gray-300 hover:text-neon-purple py-2 transition-colors duration-300"
            >
              Cryptozoology Report GPT
            </a>
            <a
              href="https://chatgpt.com/g/g-67cdbca3ed408191b888c9c93a23776a-ghost-hunting-gpt"
              className="text-gray-300 hover:text-neon-blue py-2 transition-colors duration-300"
            >
              Ghost Hunting GPT 👻
            </a>
            <a
              href="#faq"
              className="text-gray-300 hover:text-white py-2 transition-colors duration-300"
            >
              FAQ
            </a>
            <a
              href="#disclaimer"
              className="text-gray-300 hover:text-white py-2 transition-colors duration-300"
            >
              Disclaimer
            </a>
            <GlowingButton href="http://www.aiwebtools.ai" color="cyan" className="mt-2">
              More AI Tools
            </GlowingButton>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
