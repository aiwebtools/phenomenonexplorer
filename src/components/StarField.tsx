
import React, { useEffect, useRef } from 'react';

const StarField: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Star properties
    const stars: { x: number; y: number; radius: number; color: string; speed: number }[] = [];
    const shootingStars: { x: number; y: number; speedX: number; speedY: number; radius: number; trail: number; opacity: number }[] = [];
    
    // Create stars
    const createStars = () => {
      const numberOfStars = Math.floor(canvas.width * canvas.height / 1000);
      
      for (let i = 0; i < numberOfStars; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius = Math.random() * 1.5;
        const opacity = Math.random();
        const color = `rgba(255, 255, 255, ${opacity})`;
        const speed = Math.random() * 0.05;
        
        stars.push({ x, y, radius, color, speed });
      }
    };
    
    // Create a shooting star
    const createShootingStar = () => {
      const x = Math.random() * canvas.width;
      const y = Math.random() * (canvas.height / 2);
      const radius = Math.random() * 2 + 1;
      const speedX = (Math.random() * 5) + 5;
      const speedY = (Math.random() * 5) + 5;
      const trail = Math.random() * 30 + 20;
      const opacity = 1;
      
      shootingStars.push({ x, y, speedX, speedY, radius, trail, opacity });
    };
    
    // Animation
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw stars
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.fill();
        
        // Twinkle effect
        star.radius += Math.random() * 0.05 - 0.025;
        star.radius = Math.max(0.1, Math.min(1.5, star.radius));
        
        // Subtle movement
        star.y += star.speed;
        
        // Wrap around the screen
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      }
      
      // Draw shooting stars
      for (let i = 0; i < shootingStars.length; i++) {
        const shootingStar = shootingStars[i];
        
        ctx.beginPath();
        ctx.arc(shootingStar.x, shootingStar.y, shootingStar.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${shootingStar.opacity})`;
        ctx.shadowColor = 'white';
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
        
        // Draw trail
        ctx.beginPath();
        ctx.moveTo(shootingStar.x, shootingStar.y);
        ctx.lineTo(shootingStar.x - shootingStar.trail, shootingStar.y - shootingStar.trail);
        ctx.strokeStyle = `rgba(255, 255, 255, ${shootingStar.opacity * 0.5})`;
        ctx.stroke();
        
        // Update position
        shootingStar.x += shootingStar.speedX;
        shootingStar.y += shootingStar.speedY;
        
        // Fade out
        shootingStar.opacity -= 0.01;
        
        // Remove if off screen or faded out
        if (shootingStar.x > canvas.width || shootingStar.y > canvas.height || shootingStar.opacity <= 0) {
          shootingStars.splice(i, 1);
          i--;
        }
      }
      
      // Randomly create shooting stars
      if (Math.random() < 0.005) {
        createShootingStar();
      }
      
      requestAnimationFrame(animate);
    };
    
    createStars();
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  );
};

export default StarField;
