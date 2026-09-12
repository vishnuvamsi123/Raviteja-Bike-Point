import React, { useEffect, useRef } from 'react';

export const ParticleCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    try {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      let animationFrameId: number;
      let width = (canvas.width = window.innerWidth);
      let height = (canvas.height = window.innerHeight);

      const handleResize = () => {
        try {
          if (!canvas) return;
          width = canvas.width = window.innerWidth;
          height = canvas.height = window.innerHeight;
        } catch (e) {}
      };
      window.addEventListener('resize', handleResize);

      interface Particle {
        x: number;
        y: number;
        size: number;
        speedX: number;
        speedY: number;
        opacity: number;
        color: string;
        life: number;
        maxLife: number;
      }

      const particles: Particle[] = [];
      const particleCount = Math.min(Math.floor(width / 20), 75);
      const colors = ['#D4AF37', '#8B0000', '#F5D77A', '#38BDF8'];

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 2.5 + 0.5,
          speedX: (Math.random() - 0.5) * 0.4,
          speedY: -Math.random() * 0.6 - 0.2,
          opacity: Math.random() * 0.7 + 0.2,
          color: colors[Math.floor(Math.random() * colors.length)],
          life: 0,
          maxLife: Math.random() * 300 + 100
        });
      }

      const render = () => {
        try {
          ctx.clearRect(0, 0, width, height);

          ctx.strokeStyle = 'rgba(212, 175, 55, 0.02)';
          ctx.lineWidth = 1;
          const gridSize = 80;
          for (let x = 0; x < width; x += gridSize) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, height);
            ctx.stroke();
          }
          for (let y = 0; y < height; y += gridSize) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(width, y);
            ctx.stroke();
          }

          particles.forEach((p, idx) => {
            p.x += p.speedX;
            p.y += p.speedY;
            p.life++;

            if (p.y < 0 || p.life > p.maxLife) {
              particles[idx] = {
                x: Math.random() * width,
                y: height + 10,
                size: Math.random() * 2.5 + 0.5,
                speedX: (Math.random() - 0.5) * 0.4,
                speedY: -Math.random() * 0.6 - 0.2,
                opacity: Math.random() * 0.7 + 0.2,
                color: colors[Math.floor(Math.random() * colors.length)],
                life: 0,
                maxLife: Math.random() * 300 + 100
              };
            }

            ctx.save();
            ctx.shadowBlur = p.size * 4;
            ctx.shadowColor = p.color;
            ctx.globalAlpha = p.opacity * (1 - p.life / p.maxLife);
            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
          });

          animationFrameId = requestAnimationFrame(render);
        } catch (e) {}
      };

      render();

      return () => {
        window.removeEventListener('resize', handleResize);
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
      };
    } catch (e) {
      console.warn('Particle canvas fallback active:', e);
    }
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
    />
  );
};
