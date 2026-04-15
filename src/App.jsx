import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, ArrowUpRight, ChevronDown, MonitorSmartphone, Database, Server, Rocket, Handshake, Zap, Smartphone, Bot, Workflow, TrendingUp, Clock, PieChart, Mail, Swords, Landmark, Coins, IdCard, X, MapPin, CheckCircle2, User, XCircle } from 'lucide-react';

// ==========================================
// ESTILOS GLOBALES Y VARIABLES DINÁMICAS
// ==========================================
const GlobalStyles = () => (
  <style dangerouslySetInnerHTML={{__html: `
    @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Syne:wght@600;800&display=swap');

    :root {
      --accent: #CCFF00;
      --accent-rgb: 204, 255, 0;
      --bg-color: #030303;
      --text-main: #FFFFFF;
    }

    html, body {
      max-width: 100vw;
      overflow-x: hidden;
      font-family: 'Space Grotesk', sans-serif;
      -webkit-tap-highlight-color: transparent;
      margin: 0;
      padding: 0;
      background-color: var(--bg-color);
      color: var(--text-main);
    }

    @media (pointer: fine) {
      body { cursor: none; }
    }

    h1, h2, h3, .font-display { font-family: 'Syne', sans-serif; }

    ::-webkit-scrollbar { width: 4px; }
    ::-webkit-scrollbar-track { background: var(--bg-color); }
    ::-webkit-scrollbar-thumb { background: #333; border-radius: 10px; }
    ::-webkit-scrollbar-thumb:hover { background: var(--accent); }
    
    .text-accent { color: var(--accent); }
    .bg-accent { background-color: var(--accent); }
    .border-accent { border-color: var(--accent); }
    .fill-accent { fill: var(--accent); }
    .bg-accent-10 { background-color: rgba(var(--accent-rgb), 0.1); }
    .border-accent-40 { border-color: rgba(var(--accent-rgb), 0.4); }
    
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }
    .animate-float { animation: float 4s ease-in-out infinite; }
    .animate-float-delayed { animation: float 5s ease-in-out infinite 1.5s; }
    .animate-float-fast { animation: float 3s ease-in-out infinite 0.5s; }

    @keyframes popIn {
      0% { opacity: 0; transform: scale(0.9) translateY(10px); }
      100% { opacity: 1; transform: scale(1) translateY(0); }
    }
    .tech-pill { animation: popIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; }

    .glow-card {
      position: relative;
      transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .glow-card::before {
      content: "";
      position: absolute;
      top: 0; left: 0; width: 100%; height: 100%;
      background: radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(var(--accent-rgb), 0.08), transparent 40%);
      opacity: 0;
      transition: opacity 0.3s;
      pointer-events: none;
      z-index: 1;
      border-radius: inherit;
    }
    @media (pointer: fine) {
      .glow-card:hover::before { opacity: 1; }
    }
    .glow-card-content {
      position: relative;
      z-index: 2;
    }

    @keyframes saber-ignite-left {
      0% { height: 0vh; opacity: 1; box-shadow: 0 0 20px 5px var(--ignite-color); }
      15% { height: 100vh; opacity: 1; box-shadow: 10px 0 40px 15px var(--ignite-color), 20px 0 80px 30px var(--ignite-color); width: 8px; }
      70% { height: 100vh; opacity: 1; box-shadow: 10px 0 40px 15px var(--ignite-color), 20px 0 80px 30px var(--ignite-color); width: 8px; }
      100% { height: 100vh; opacity: 0; box-shadow: 0 0 0px 0px var(--ignite-color); width: 0px; }
    }
    @keyframes saber-ignite-right {
      0% { height: 0vh; opacity: 1; box-shadow: 0 0 20px 5px var(--ignite-color); }
      15% { height: 100vh; opacity: 1; box-shadow: -10px 0 40px 15px var(--ignite-color), -20px 0 80px 30px var(--ignite-color); width: 8px; }
      70% { height: 100vh; opacity: 1; box-shadow: -10px 0 40px 15px var(--ignite-color), -20px 0 80px 30px var(--ignite-color); width: 8px; }
      100% { height: 100vh; opacity: 0; box-shadow: 0 0 0px 0px var(--ignite-color); width: 0px; }
    }
    .saber-left {
      position: fixed; bottom: 0; left: 0; width: 4px; background: #fff;
      animation: saber-ignite-left 0.8s ease-out forwards;
      z-index: 99999; pointer-events: none; border-top-right-radius: 10px;
    }
    .saber-right {
      position: fixed; bottom: 0; right: 0; width: 4px; background: #fff;
      animation: saber-ignite-right 0.8s ease-out forwards;
      z-index: 99999; pointer-events: none; border-top-left-radius: 10px;
    }
  `}} />
);

// ==========================================
// ÍCONOS CUSTOM
// ==========================================
const WhatsAppIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.305-.88-.653-1.474-1.46-1.646-1.757-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

const LightsabersIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} strokeLinecap="round">
    <line x1="4" y1="20" x2="8" y2="16" stroke="#888888" strokeWidth="2.5" />
    <line x1="8" y1="16" x2="20" y2="4" stroke="currentColor" strokeWidth="2" style={{ filter: 'drop-shadow(0 0 3px currentColor)' }} />
    <line x1="20" y1="20" x2="16" y2="16" stroke="#888888" strokeWidth="2.5" />
    <line x1="16" y1="16" x2="4" y2="4" stroke="currentColor" strokeWidth="2" style={{ filter: 'drop-shadow(0 0 3px currentColor)' }} />
  </svg>
);

const KyberCrystalIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L16 7L14 20L12 23L10 20L8 7L12 2Z" fill="currentColor" />
    <path d="M12 2L8 7L12 11L12 2Z" fill="rgba(255, 255, 255, 0.4)" />
    <path d="M16 7L14 20L12 23L12 11L16 7Z" fill="rgba(0, 0, 0, 0.3)" />
    <path d="M12 11L10 20L12 23L12 11Z" fill="rgba(255, 255, 255, 0.15)" />
  </svg>
);

// ==========================================
// COMPONENTES DE ANIMACIÓN PREMIUM
// ==========================================
const ScrambleText = ({ text }) => {
  const [displayText, setDisplayText] = useState(text);
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$*";
  const triggerAnimation = () => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(text.split("").map((letter, index) => {
        if(index < iteration) return text[index];
        return letters[Math.floor(Math.random() * letters.length)];
      }).join(""));
      if(iteration >= text.length) clearInterval(interval);
      iteration += 1 / 3;
    }, 30);
  };
  useEffect(() => {
    const timer = setTimeout(() => { triggerAnimation(); }, 800);
    return () => clearTimeout(timer);
  }, []);
  return <span onMouseOver={triggerAnimation} onClick={triggerAnimation} className="inline-block cursor-default select-none">{displayText}</span>;
};

const HeroReveal = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100 + delay);
    return () => clearTimeout(timer);
  }, [delay]);
  return (
    <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}>
      {children}
    </div>
  );
};

const Reveal = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setIsVisible(true); }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} style={{ transitionDelay: `${delay}ms` }} className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}>
      {children}
    </div>
  );
};

const MagneticButton = ({ children, href, className = "" }) => {
  const ref = useRef(null);
  const handleMouseMove = (e) => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (e.clientX - (left + width / 2)) * 0.2;
    const y = (e.clientY - (top + height / 2)) * 0.2;
    ref.current.style.transform = `translate(${x}px, ${y}px)`;
  };
  const handleMouseLeave = () => {
    if (ref.current) ref.current.style.transform = `translate(0px, 0px)`;
  };
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : '_self'}
      rel={href.startsWith('http') ? 'noopener noreferrer' : ''}
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transition: 'transform 0.15s ease-out' }}
      className={`inline-flex active:scale-[0.95] ${className}`}
    >
      {children}
    </a>
  );
};

const GlowCard = ({ children, className = "" }) => {
  const cardRef = useRef(null);
  const handleMouseMove = (e) => {
    if (!cardRef.current || window.matchMedia('(pointer: coarse)').matches) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };
  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`glow-card border border-white/10 bg-[#0a0a0a] rounded-2xl overflow-hidden hover:border-accent active:scale-[0.98] transition-all duration-200 ${className}`}
    >
      <div className="glow-card-content h-full flex flex-col">
        {children}
      </div>
    </div>
  );
};

const InteractiveCanvas = ({ rgbColor, isHyperspace }) => {
  const canvasRef = useRef(null);
  const hyperspaceRef = useRef(isHyperspace);
  useEffect(() => {
    hyperspaceRef.current = isHyperspace;
  }, [isHyperspace]);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return; 
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let particles = [];
    let animationFrameId;
    let warpSpeed = 0; 
    let wasHyperspace = false;
    const isMobile = window.innerWidth <= 768;
    const resize = () => { if (canvas) { canvas.width = window.innerWidth; canvas.height = window.innerHeight; } };
    window.addEventListener('resize', resize); resize();
    const mouse = { x: null, y: null, radius: isMobile ? 80 : 120 };
    let isBursting = false;
    window.addEventListener('mousemove', (e) => { mouse.x = e.x; mouse.y = e.y; });
    window.addEventListener('touchstart', (e) => { mouse.x = e.touches[0].clientX; mouse.y = e.touches[0].clientY; isBursting = true; setTimeout(() => isBursting = false, 200); });
    window.addEventListener('touchmove', (e) => { mouse.x = e.touches[0].clientX; mouse.y = e.touches[0].clientY; });
    window.addEventListener('mouseout', () => { mouse.x = undefined; mouse.y = undefined; });
    window.addEventListener('touchend', () => { mouse.x = undefined; mouse.y = undefined; });

    class Particle {
      constructor(x, y, directionX, directionY, size, color) {
        this.x = x; this.y = y; this.directionX = directionX; this.directionY = directionY;
        this.size = size; this.color = color; this.baseX = this.x; this.baseY = this.y;
        this.density = (Math.random() * 30) + 1;
      }
      draw() {
        ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color; ctx.fill();
      }
      update() {
        if (warpSpeed > 0) {
          let cx = canvas.width / 2; let cy = canvas.height / 2;
          let dx = this.x - cx; let dy = this.y - cy;
          if (Math.abs(dx) < 1 && Math.abs(dy) < 1) { dx = (Math.random() - 0.5) * 10; dy = (Math.random() - 0.5) * 10; }
          let dist = Math.sqrt(dx*dx + dy*dy);
          let nx = dx / dist; let ny = dy / dist;
          let speed = (dist * 0.03 + 1) * warpSpeed * 30;
          this.x += nx * speed; this.y += ny * speed;
          let tailLength = speed * 1.5;
          ctx.beginPath(); ctx.moveTo(this.x, this.y); ctx.lineTo(this.x - nx * tailLength, this.y - ny * tailLength);
          ctx.strokeStyle = `rgba(${rgbColor}, ${Math.min(warpSpeed * 1.5, 0.8)})`;
          ctx.lineWidth = this.size * 2 * warpSpeed; ctx.lineCap = 'round'; ctx.stroke();
          ctx.beginPath(); ctx.moveTo(this.x, this.y); ctx.lineTo(this.x - nx * (tailLength * 0.7), this.y - ny * (tailLength * 0.7));
          ctx.strokeStyle = `rgba(255, 255, 255, ${warpSpeed})`; ctx.lineWidth = this.size * 0.5; ctx.stroke();
          if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
            let spawnDist = Math.random() * (canvas.width * 0.15) + 15; let angle = Math.random() * Math.PI * 2;
            this.x = cx + Math.cos(angle) * spawnDist; this.y = cy + Math.sin(angle) * spawnDist;
            this.baseX = Math.random() * canvas.width; this.baseY = Math.random() * canvas.height;
          }
          return; 
        }
        if (this.x > canvas.width || this.x < 0) this.directionX = -this.directionX;
        if (this.y > canvas.height || this.y < 0) this.directionY = -this.directionY;
        let dx = mouse.x - this.x; let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let currentRadius = isBursting ? mouse.radius * 3 : mouse.radius;
        let forceDirectionX = dx / distance; let forceDirectionY = dy / distance;
        let force = (currentRadius - distance) / currentRadius;
        let directionX = forceDirectionX * force * this.density * (isBursting ? 5 : 1);
        let directionY = forceDirectionY * force * this.density * (isBursting ? 5 : 1);
        if (distance < currentRadius) { this.x -= directionX; this.y -= directionY; } else {
          if (this.x !== this.baseX) { this.x -= (this.x - this.baseX) / 20; }
          if (this.y !== this.baseY) { this.y -= (this.y - this.baseY) / 20; }
        }
        this.x += this.directionX; this.y += this.directionY;
        this.draw();
      }
    }
    const init = () => {
      particles = []; if (!canvas) return;
      let numberOfParticles = (canvas.width * canvas.height) / (isMobile ? 8000 : 6000);
      for (let i = 0; i < numberOfParticles; i++) {
        let size = (Math.random() * 2) + 1.5;
        let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
        let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
        particles.push(new Particle(x, y, (Math.random() * 0.4) - 0.2, (Math.random() * 0.4) - 0.2, size, '#777777'));
      }
    };
    const connect = () => {
      if (warpSpeed > 0) return; const maxDist = (canvas.width / 7) * (canvas.height / 7);
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          let dx = particles[a].x - particles[b].x; let dy = particles[a].y - particles[b].y;
          let distance = (dx * dx) + (dy * dy);
          if (distance < maxDist) {
            let opacityValue = 1 - (distance / 20000);
            ctx.strokeStyle = `rgba(${rgbColor}, ${opacityValue * 0.45})`; ctx.lineWidth = 1.2;
            ctx.beginPath(); ctx.moveTo(particles[a].x, particles[a].y); ctx.lineTo(particles[b].x, particles[b].y); ctx.stroke();
          }
        }
      }
    };
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (hyperspaceRef.current) { warpSpeed += (1 - warpSpeed) * 0.05; } else {
        if (wasHyperspace) { warpSpeed = 0; init(); }
      }
      wasHyperspace = hyperspaceRef.current;
      if (warpSpeed > 0) { ctx.fillStyle = 'rgba(3, 3, 3, 0.35)'; ctx.fillRect(0, 0, canvas.width, canvas.height); } else { ctx.clearRect(0, 0, canvas.width, canvas.height); }
      for (let i = 0; i < particles.length; i++) particles[i].update(); connect();
    };
    init(); animate();
    return () => { window.removeEventListener('resize', resize); cancelAnimationFrame(animationFrameId); };
  }, [rgbColor]);
  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-0 pointer-events-auto opacity-100 transition-colors duration-500" />;
};

const TechAccordion = ({ category, index, isOpen, toggleOpen }) => {
  const contentRef = useRef(null);
  return (
    <div className="border border-white/10 rounded-2xl bg-[#0a0a0a] overflow-hidden mb-4 hover:border-accent transition-colors active:scale-[0.98] duration-200">
      <button onClick={() => toggleOpen(index)} className="w-full flex items-center justify-between p-5 sm:p-6 md:p-8 text-left focus:outline-none">
        <div className="flex items-center gap-4">
          <div className={`p-3 rounded-xl transition-all duration-300 ${isOpen ? 'bg-accent text-black shadow-[0_0_20px_rgba(var(--accent-rgb),0.3)]' : 'bg-black/30 border border-white/10 text-accent'}`}>{category.icon}</div>
          <h3 className="font-display text-lg sm:text-xl md:text-2xl font-bold text-white min-w-0 break-words">{category.title}</h3>
        </div>
        <ChevronDown className={`w-6 h-6 shrink-0 transition-transform duration-300 text-white/50 ${isOpen ? 'rotate-180 text-accent' : ''}`} />
      </button>
      <div ref={contentRef} className="transition-all duration-500 ease-in-out overflow-hidden" style={{ maxHeight: isOpen ? `${contentRef.current?.scrollHeight || 0}px` : '0px', opacity: isOpen ? 1 : 0 }}>
        <div className="p-5 sm:p-6 md:p-8 pt-0 flex flex-wrap gap-2 sm:gap-3">
          {category.skills.map((skill, sIdx) => (
            <div key={skill} className="tech-pill bg-accent-10 border border-accent-40 text-accent px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg font-bold flex items-center gap-2 text-xs sm:text-sm md:text-base active:scale-95 transition-transform" style={{ animationDelay: `${sIdx * 50}ms`, boxShadow: '0 0 15px rgba(var(--accent-rgb), 0.1)' }}>
              <Zap size={16} className="fill-accent shrink-0" /> {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const cursorRef = useRef(null);
  const hoverRef = useRef(false);
  const [isHovering, setIsHovering] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(0);
  const [isFinePointer, setIsFinePointer] = useState(true);
  const [forceColor, setForceColor] = useState({ hex: '#CCFF00', rgb: '204, 255, 0' });
  const [ignitionKey, setIgnitionKey] = useState(0); 
  const [isHyperspace, setIsHyperspace] = useState(false);
  const [showBadge, setShowBadge] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // FUNCIÓN PARA CONTROLAR EL ACORDEÓN (La que generaba el error)
  const handleToggle = (index) => setOpenAccordion(openAccordion === index ? -1 : index);

  useEffect(() => {
    document.documentElement.style.setProperty('--accent', forceColor.hex);
    document.documentElement.style.setProperty('--accent-rgb', forceColor.rgb);
  }, [forceColor]);

  const handleCrystalClick = (hex, rgb) => { setForceColor({ hex, rgb }); setIgnitionKey(prev => prev + 1); };
  const jumpToHyperspace = () => { if (isHyperspace) return; setIsHyperspace(true); setTimeout(() => { setIsHyperspace(false); }, 3000); };

  const whatsappNumber = "525628398045"; 
  const whatsappMessage = "Hola Carlos! Me interesa platicar sobre un proyecto de software.";
  const emailAddress = "cj.darg2111@gmail.com";
  const linkedinUrl = "https://www.linkedin.com/in/carlos-a-gonzález-026600213";
  const githubUrl = "https://github.com/Solrac211";

  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setIsFinePointer(mediaQuery.matches);
    const handleMouseMove = (e) => {
      if (!mediaQuery.matches) return;
      if (cursorRef.current) { cursorRef.current.style.left = `${e.clientX}px`; cursorRef.current.style.top = `${e.clientY}px`; }
      const isTargetHovering = !!(e.target.closest('button') || e.target.closest('a') || e.target.closest('.glow-card') || e.target.closest('.master-btn') || e.target.closest('.hyperdrive-btn'));
      if (isTargetHovering !== hoverRef.current) { hoverRef.current = isTargetHovering; setIsHovering(isTargetHovering); }
    };
    if (mediaQuery.matches) window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const techData = [
    { title: "Desarrollo Frontend & Móvil", icon: <MonitorSmartphone size={28} />, skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "React Native", "Next.js", "Tailwind CSS", "Framer Motion", "Flutter"] },
    { title: "Backend, Bases de Datos & Nube", icon: <Server size={28} />, skills: ["Node.js", "Python", "Java", "C", "C++", "PHP", "Spring Boot", "Express.js", "REST APIs", "GraphQL", "Oracle", "PostgreSQL", "MongoDB", "MySQL", "AWS", "Docker", "Firebase"] },
    { title: "IA & Automatización", icon: <Bot size={28} />, skills: ["OpenAI API", "Make/Integromat", "Zapier", "Chatbots", "Web Scraping"] }
  ];

  const successCases = [
    {
      id: 1,
      title: "ERP Especializado Maderería",
      shortDesc: "Sistema a medida para control de inventario, cubicación y ventas, con integración de impresoras térmicas.",
      cover: "/Madereria1.jpg",
      problem: "El cliente administraba su maderería de forma manual. El cálculo de los pies tabla y el control de inventarios en papel generaba pérdida de material y errores de cobro costosos.",
      benefits: [
        "Cálculo automatizado y exacto de volumen (pies tabla) instantáneo.",
        "Control de inventario en tiempo real con trazabilidad total.",
        "Cotizaciones semiautomáticas que aceleran la atención al cliente.",
        "Conexión con impresoras térmicas para entrega de tickets físicos.",
        "Reportes mensuales automáticos de movimientos y métricas."
      ],
      roiComparison: {
        software: ["Inversión única altamente rentable.", "Cálculos 100% exactos 24/7.", "Cierres de caja en 5 minutos.", "No hay rotación ni errores humanos."],
        human: ["Sueldos recurrentes y prestaciones.", "Propenso a errores por fatiga.", "Horas extra para cuadrar inventarios.", "Dependencia operativa total."]
      },
      gallery: ["/Madereria1.jpg", "/Madereria2.jpg", "/Madereria3.jpg"]
    },
    {
      id: 2,
      title: "VIBRA Concierge",
      shortDesc: "Plataforma premium de gestión para casas de lujo. Agendamiento de servicios, catálogos y atención exclusiva.",
      cover: "/logo2.jpg",
      url: "https://vibraconcierge.digital/",
      problem: "Los gestores de propiedades de lujo necesitaban centralizar sus servicios. Los clientes no tenían un lugar claro para consultar paquetes, agendar servicios de limpieza o mantenimiento, ni un canal de contacto directo y profesional.",
      benefits: [
        "Plataforma web premium con diseño inmersivo para clientes exigentes.",
        "Sistema de agendamiento de servicios integrado.",
        "Catálogo digital de paquetes y servicios adicionales.",
        "Canal directo de WhatsApp con tracking de interés.",
        "Panel administrativo para control de servicios agendados."
      ],
      roiComparison: {
        software: ["Presencia digital 24/7 de alta gama.", "Automatización del proceso de reserva.", "Escalabilidad para múltiples propiedades.", "Imagen de marca profesional y moderna."],
        human: ["Llamadas y mensajes manuales 24/7.", "Errores en la agenda y disponibilidad.", "Dificultad para mostrar catálogos actualizados.", "Tiempos de respuesta lentos."]
      },
      gallery: ["/logo2.jpg", "/Vibra1.jpg", "/Vibra2.jpg", "/Vibra3.jpg"]
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#030303] text-white selection:bg-accent selection:text-black pb-12 overflow-x-hidden transition-colors duration-500 w-full">
      <GlobalStyles />
      <InteractiveCanvas rgbColor={forceColor.rgb} isHyperspace={isHyperspace} />
      
      {ignitionKey > 0 && (
        <React.Fragment>
          <div key={`left-${ignitionKey}`} className="saber-left" style={{ '--ignite-color': forceColor.hex }}></div>
          <div key={`right-${ignitionKey}`} className="saber-right" style={{ '--ignite-color': forceColor.hex }}></div>
        </React.Fragment>
      )}
      
      {isFinePointer && (
        <div ref={cursorRef} className="fixed pointer-events-none z-[100] rounded-full mix-blend-difference transition-[width,height] duration-200 ease-out flex items-center justify-center" style={{ width: isHovering ? '60px' : '15px', height: isHovering ? '60px' : '15px', backgroundColor: '#FFFFFF', transform: 'translate(-50%, -50%)', left: '-100px', top: '-100px' }}>
          {isHovering && <ArrowUpRight className="text-black w-6 h-6 opacity-100 mix-blend-normal" />}
        </div>
      )}
      
      <div className="fixed bottom-6 right-6 z-[90] flex items-center justify-center">
        <div className="absolute inset-0 bg-accent rounded-full animate-ping opacity-30 pointer-events-none transition-colors duration-500"></div>
        <MagneticButton href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}>
          <div className="relative w-14 h-14 bg-accent rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300" style={{ boxShadow: '0 0 20px rgba(var(--accent-rgb), 0.4)' }}>
            <WhatsAppIcon className="w-7 h-7 text-black" />
          </div>
        </MagneticButton>
      </div>

      <main className="relative z-10 w-full">
        <section className="pt-12 md:pt-28 pb-12 px-6 md:px-12 max-w-[1400px] mx-auto min-h-[70vh] md:min-h-[85vh] flex flex-col justify-center">
          <HeroReveal delay={0}>
            <div className="flex items-center gap-3 mb-6 flex-wrap">
              <button onClick={jumpToHyperspace} className="hyperdrive-btn inline-flex items-center justify-center gap-3 px-5 py-2.5 rounded-full border border-accent-40 bg-accent-10 backdrop-blur-md w-fit transition-all duration-500 hover:scale-105 active:scale-95 group/hyper" style={{ boxShadow: '0 0 20px rgba(var(--accent-rgb), 0.15)' }} title="Saltar al Hiperespacio">
                <Rocket className="w-4 h-4 text-accent animate-pulse shrink-0 transition-all duration-500 group-hover/hyper:-translate-y-1 group-hover/hyper:translate-x-1" />
                <p className="text-white font-bold uppercase text-[10px] sm:text-xs md:text-sm tracking-widest text-center whitespace-nowrap group-hover/hyper:text-accent transition-colors duration-300">Ing. en Software • Carlos Alexis</p>
              </button>
              <button onClick={() => setShowBadge(true)} className="inline-flex items-center justify-center p-2.5 rounded-full border border-accent-40 bg-accent-10 backdrop-blur-md text-accent hover:bg-accent hover:text-black transition-all duration-300 hover:scale-105 active:scale-95" style={{ boxShadow: '0 0 20px rgba(var(--accent-rgb), 0.15)' }} title="Ver Gafete de Identificación">
                <IdCard size={20} />
              </button>
            </div>
          </HeroReveal>
          
          <HeroReveal delay={100}>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight font-black uppercase tracking-tighter text-white mb-6">
              <span className="block md:inline-block md:mr-4 break-words">Transformo</span>
              <span className="block md:inline-block break-words">ideas en</span>
              <br className="hidden md:block" />
              <span className="text-accent block mt-2 md:mt-4 transition-colors duration-500 hover-trigger">
                <span className="block lg:inline-block lg:mr-4 break-words"><ScrambleText text="Soluciones" /></span>
                <span className="block lg:inline-block break-words"><ScrambleText text="Digitales" /></span>
              </span>
            </h1>
          </HeroReveal>
          
          <HeroReveal delay={200}>
            <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:items-center justify-between border-t border-white/10 pt-6 sm:pt-8 mt-4">
              <p className="text-white font-medium text-sm sm:text-base md:text-xl max-w-2xl leading-relaxed">Hola, soy <strong className="font-bold text-accent transition-colors duration-500">Carlos Alexis González Carranza</strong>. Ayudo a empresas y emprendedores a escalar mediante desarrollo web y móvil de alto rendimiento. Páginas rápidas, aplicaciones a medida y automatizaciones inteligentes.</p>
              <MagneticButton href="#contacto" className="shrink-0 w-full lg:w-auto mt-4 lg:mt-0">
                <div className="bg-accent text-black font-bold uppercase tracking-widest px-6 sm:px-8 py-4 sm:py-5 rounded-full hover:bg-white transition-all duration-500 flex items-center justify-center gap-3 w-full text-sm sm:text-base lg:text-lg" style={{ boxShadow: '0 0 30px rgba(var(--accent-rgb), 0.2)' }}>Cotizar Proyecto <ArrowUpRight size={22} /></div>
              </MagneticButton>
            </div>
          </HeroReveal>
        </section>

        <section className="py-16 md:py-20 px-6 md:px-12 max-w-[1400px] mx-auto bg-black/40 border-y border-white/5 relative">
          <Reveal>
            <div className="mb-10 sm:mb-12 text-center md:text-left">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white">Beneficios <span className="text-accent transition-colors duration-500">Reales.</span></h2>
              <p className="text-white font-medium mt-3 text-sm sm:text-base md:text-lg">El software correcto no es un gasto, es el motor de tu empresa.</p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Reveal delay={100}><GlowCard className="p-6 sm:p-8 lg:p-10 h-full"><TrendingUp className="text-accent w-10 sm:w-12 h-10 sm:h-12 mb-4 sm:mb-6 animate-float transition-colors duration-500 shrink-0" /><h3 className="font-display text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white">Más Dinero y Ventas</h3><p className="text-white font-medium text-sm sm:text-base leading-relaxed">Una plataforma rápida e intuitiva elimina la fricción. Atraes más prospectos, cierras más ventas y aumentas la recurrencia de tus clientes.</p></GlowCard></Reveal>
            <Reveal delay={200}><GlowCard className="p-6 sm:p-8 lg:p-10 h-full"><PieChart className="text-accent w-10 sm:w-12 h-10 sm:h-12 mb-4 sm:mb-6 animate-float-delayed transition-colors duration-500 shrink-0" /><h3 className="font-display text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white">Control de cada Peso</h3><p className="text-white font-medium text-sm sm:text-base leading-relaxed">Se acabó adivinar. Con sistemas a medida sabrás exactamente a dónde va tu dinero, métricas en tiempo real y el rendimiento de cada área.</p></GlowCard></Reveal>
            <Reveal delay={300} className="md:col-span-2 lg:col-span-1"><GlowCard className="p-6 sm:p-8 lg:p-10 h-full"><Workflow className="text-accent w-10 sm:w-12 h-10 sm:h-12 mb-4 sm:mb-6 animate-float-fast transition-colors duration-500 shrink-0" /><h3 className="font-display text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white">Escalabilidad Automática</h3><p className="text-white font-medium text-sm sm:text-base leading-relaxed">Automatizamos los procesos aburridos y repetitivos. Tu empresa podrá manejar 100 o 10,000 clientes sin necesidad de multiplicar tu equipo.</p></GlowCard></Reveal>
          </div>
        </section>

        <section className="py-16 lg:py-24 px-6 md:px-12 max-w-[1400px] mx-auto">
          <Reveal><h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase mb-10 sm:mb-12 text-center md:text-left text-white">Mis <span className="text-accent transition-colors duration-500">Soluciones.</span></h2></Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Reveal delay={100}><GlowCard className="p-6 sm:p-8 lg:p-10 h-full"><div className="flex items-center gap-4 sm:gap-5 mb-4 sm:mb-6"><Smartphone className="text-accent w-10 sm:w-12 h-10 sm:h-12 shrink-0 animate-float transition-colors duration-500" /><h3 className="font-display text-xl sm:text-2xl font-bold text-white leading-tight">Desarrollo Móvil <br className="hidden lg:block" />& Web</h3></div><p className="text-white font-medium text-sm sm:text-base leading-relaxed">Aplicaciones móviles (iOS/Android) y plataformas web complejas. Interfaces modernas, rápidas y conectadas a la nube.</p></GlowCard></Reveal>
            <Reveal delay={200}><GlowCard className="p-6 sm:p-8 lg:p-10 h-full"><div className="flex items-center gap-4 sm:gap-5 mb-4 sm:mb-6"><Bot className="text-accent w-10 sm:w-12 h-10 sm:h-12 shrink-0 animate-float-delayed transition-colors duration-500" /><h3 className="font-display text-xl sm:text-2xl font-bold text-white leading-tight">Chatbots <br className="hidden lg:block" />Inteligentes</h3></div><p className="text-white font-medium text-sm sm:text-base leading-relaxed">Asistentes de IA integrados a tu WhatsApp, Instagram o sitio web para responder clientes 24/7 y agendar reuniones automáticamente.</p></GlowCard></Reveal>
            <Reveal delay={300} className="md:col-span-2 lg:col-span-1"><GlowCard className="p-6 sm:p-8 lg:p-10 h-full"><div className="flex items-center gap-4 sm:gap-5 mb-4 sm:mb-6"><Clock className="text-accent w-10 sm:w-12 h-10 sm:h-12 shrink-0 animate-float-fast transition-colors duration-500" /><h3 className="font-display text-xl sm:text-2xl font-bold text-white leading-tight">Automatización <br className="hidden lg:block" />de Procesos</h3></div><p className="text-white font-medium text-sm sm:text-base leading-relaxed">Hago que tus herramientas hablen entre sí (CRMs, Correos, Excel). Ahorramos cientos de horas manuales evitando el error humano.</p></GlowCard></Reveal>
            <Reveal delay={400} className="md:col-span-2 lg:col-span-1"><GlowCard className="p-6 sm:p-8 lg:p-10 h-full"><div className="flex items-center gap-4 sm:gap-5 mb-4 sm:mb-6"><Database className="text-accent w-10 sm:w-12 h-10 sm:h-12 shrink-0 animate-float transition-colors duration-500" /><h3 className="font-display text-xl sm:text-2xl font-bold text-white leading-tight">Sistemas <br className="hidden lg:block" />Internos</h3></div><p className="text-white font-medium text-sm sm:text-base leading-relaxed">Software a medida para gestionar tu inventario, personal o logística. Construyo el cerebro digital exclusivo para la operación de tu empresa.</p></GlowCard></Reveal>
          </div>
        </section>

        <section className="py-12 lg:py-16 px-6 md:px-12 max-w-[1400px] mx-auto border-t border-white/10">
          <Reveal><div className="mb-8 sm:mb-10 text-center md:text-left"><h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white">Con qué <span className="text-accent transition-colors duration-500">trabajo.</span></h2></div></Reveal>
          <div className="max-w-4xl mx-auto md:mx-0">
            {techData.map((category, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <TechAccordion category={category} index={idx} isOpen={openAccordion === idx} toggleOpen={handleToggle} />
              </Reveal>
            ))}
          </div>
        </section>

        <section className="py-16 lg:py-24 px-6 md:px-12 max-w-[1400px] mx-auto border-t border-white/10">
          <Reveal><h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase mb-10 sm:mb-12 text-center md:text-left text-white">Casos de <span className="text-accent transition-colors duration-500">Éxito.</span></h2></Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {successCases.map((project, idx) => (
              <Reveal key={project.id} delay={idx * 100}>
                <GlowCard className="h-full p-0 flex flex-col">
                  <div className="relative aspect-video overflow-hidden">
                    <div className="absolute inset-0 bg-accent mix-blend-color z-10 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                    <img src={project.cover} alt={project.title} className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"/>
                  </div>
                  <div className="p-6 sm:p-8 lg:p-10 flex flex-col flex-grow relative z-10">
                    <h3 className="font-display text-xl sm:text-2xl font-bold uppercase hover:text-accent transition-colors mb-3 sm:mb-4 text-white">{project.title}</h3>
                    <p className="text-white font-medium text-sm sm:text-base mb-6 sm:mb-8 flex-grow">{project.shortDesc}</p>
                    <div className="flex gap-4 border-t border-white/10 pt-5 sm:pt-6 mt-auto">
                       <button onClick={() => setSelectedProject(project)} className="flex items-center gap-2 text-sm sm:text-base font-bold text-accent hover:text-white active:scale-95 transition-all duration-300"><ExternalLink size={18} /> Ver Proyecto</button>
                    </div>
                  </div>
                </GlowCard>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="py-16 lg:py-24 px-6 md:px-12 max-w-[1400px] mx-auto border-t border-white/10">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase mb-4 text-center md:text-left text-white">Inversión a tu <span className="text-accent transition-colors duration-500">Medida.</span></h2>
            <p className="text-white/70 font-medium mb-10 sm:mb-12 text-sm sm:text-base md:text-lg text-center md:text-left max-w-2xl">Sabemos que cada empresa es diferente. Nos ajustamos a tu presupuesto con modelos de financiamiento flexibles y múltiples métodos de pago.</p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Reveal delay={100}><GlowCard className="p-6 sm:p-8 lg:p-10 h-full border border-white/10 bg-black/40"><Handshake className="text-accent w-10 sm:w-12 h-10 sm:h-12 mb-4 sm:mb-6 animate-float transition-colors duration-500 shrink-0" /><h3 className="font-display text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white break-words">Adaptabilidad</h3><p className="text-white/80 font-medium text-sm sm:text-base leading-relaxed break-words">Diseñamos soluciones por fases. Empezamos con lo esencial (MVP) para generar valor rápido y escalamos cuando tu negocio esté listo, cuidando tu capital inicial.</p></GlowCard></Reveal>
            <Reveal delay={200}><GlowCard className="p-6 sm:p-8 lg:p-10 h-full border border-white/10 bg-black/40"><Landmark className="text-accent w-10 sm:w-12 h-10 sm:h-12 mb-4 sm:mb-6 animate-float-delayed transition-colors duration-500 shrink-0" /><h3 className="font-display text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white break-words">Financiamiento</h3><p className="text-white/80 font-medium text-sm sm:text-base leading-relaxed break-words">No te descapitalices. Trabajamos con pagos divididos por hitos de entrega (ej. 30% - 40% - 30%) para que tu inversión sea siempre segura y progresiva.</p></GlowCard></Reveal>
            <Reveal delay={300} className="md:col-span-2 lg:col-span-1"><GlowCard className="p-6 sm:p-8 lg:p-10 h-full border border-white/10 bg-black/40"><Coins className="text-accent w-10 sm:w-12 h-10 sm:h-12 mb-4 sm:mb-6 animate-float-fast transition-colors duration-500 shrink-0" /><h3 className="font-display text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white break-words">Métodos de Pago</h3><p className="text-white/80 font-medium text-sm sm:text-base leading-relaxed break-words">Facilitamos las transacciones internacionales. Aceptamos transferencias (SPEI), tarjetas de crédito/débito, PayPal y alternativas modernas como Criptomonedas.</p></GlowCard></Reveal>
          </div>
        </section>

        <section id="contacto" className="py-16 lg:py-20 px-6 md:px-12 max-w-[1400px] mx-auto mt-4 lg:mt-8">
          <Reveal className="bg-accent rounded-3xl md:rounded-[2rem] p-8 sm:p-10 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-8 text-black cursor-default text-center lg:text-left relative overflow-hidden active:scale-[0.98] transition-all duration-500">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-white opacity-20 blur-[80px] rounded-full animate-pulse pointer-events-none"></div>
            <div className="lg:w-2/3 relative z-10">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-6xl font-black uppercase mb-4 sm:mb-6 leading-tight text-black">¿Listo para escalar <br className="hidden lg:block"/>tu negocio?</h2>
              <p className="text-black/90 text-base sm:text-lg lg:text-xl font-bold max-w-lg mx-auto lg:mx-0">Cuéntame sobre tu proyecto y descubramos cómo la tecnología puede multiplicar tus ingresos y darte tranquilidad.</p>
            </div>
            
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 relative z-10 w-full lg:w-auto shrink-0 mt-4 lg:mt-0">
              <MagneticButton href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`} className="w-full sm:w-auto flex justify-center">
                <div className="bg-black text-accent font-bold uppercase px-6 sm:px-8 py-4 sm:py-5 rounded-full hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base shadow-[0_10px_40px_rgba(0,0,0,0.3)] w-full sm:w-auto">
                  <WhatsAppIcon className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" /> WhatsApp
                </div>
              </MagneticButton>
              <MagneticButton href={`mailto:${emailAddress}`} className="w-full sm:w-auto flex justify-center">
                <div className="bg-transparent border-2 border-black text-black font-bold uppercase px-6 sm:px-8 py-4 sm:py-5 rounded-full hover:bg-black hover:text-accent transition-colors flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base w-full sm:w-auto">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" /> Email
                </div>
              </MagneticButton>
            </div>
          </Reveal>
        </section>

        <footer className="pt-8 lg:pt-12 pb-10 px-6 md:px-12 max-w-[1400px] mx-auto flex flex-col lg:flex-row justify-between items-center text-white font-medium text-xs sm:text-sm lg:text-base gap-8 border-t border-white/10">
          <div className="text-center lg:text-left flex flex-col gap-1"><p className="font-bold text-accent transition-colors duration-500">Carlos Alexis González Carranza</p><p className="text-white/60">© 2026. Ingeniería de Software e Innovación.</p></div>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
             <a href="/CVCarlosAlexisGonzCarra.pdf" download="CVCarlosAlexisGonzCarra.pdf" className="hover:text-accent active:scale-95 transition-all underline decoration-white/30 underline-offset-4 duration-300">Descargar CV</a>
             <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-accent active:scale-95 transition-all duration-300">LinkedIn</a>
             <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-accent active:scale-95 transition-all duration-300">GitHub</a>
          </div>
          <div className="flex flex-col items-center lg:items-end gap-3 mt-2 lg:mt-0 group">
             <p className="text-white/40 text-[10px] sm:text-xs font-bold uppercase tracking-widest flex items-center gap-2 opacity-50 group-hover:opacity-100 transition-opacity">Que la Fuerza te acompañe <LightsabersIcon className="w-5 h-5 text-accent transition-colors duration-500" /></p>
             <div className="flex gap-3 sm:gap-4 bg-white/5 p-3 rounded-full border border-white/10 items-center justify-center">
                <button onClick={() => handleCrystalClick('#CCFF00', '204, 255, 0')} title="Cristal Kyber (Neutral)" className="master-btn group/btn relative w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full hover:scale-110 active:scale-95 transition-all duration-300 bg-black/50 border border-white/5"><KyberCrystalIcon className={`w-5 h-5 sm:w-6 sm:h-6 transition-all duration-500 ${forceColor.hex === '#CCFF00' ? 'text-[#CCFF00] drop-shadow-[0_0_12px_#CCFF00]' : 'text-white/30 group-hover/btn:text-[#CCFF00]'}`} /></button>
                <button onClick={() => handleCrystalClick('#00F0FF', '0, 240, 255')} title="Cristal Kyber (Jedi)" className="master-btn group/btn relative w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full hover:scale-110 active:scale-95 transition-all duration-300 bg-black/50 border border-white/5"><KyberCrystalIcon className={`w-5 h-5 sm:w-6 sm:h-6 transition-all duration-500 ${forceColor.hex === '#00F0FF' ? 'text-[#00F0FF] drop-shadow-[0_0_12px_#00F0FF]' : 'text-white/30 group-hover/btn:text-[#00F0FF]'}`} /></button>
                <button onClick={() => handleCrystalClick('#FF003C', '255, 0, 60')} title="Cristal Kyber (Sith)" className="master-btn group/btn relative w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full hover:scale-110 active:scale-95 transition-all duration-300 bg-black/50 border border-white/5"><KyberCrystalIcon className={`w-5 h-5 sm:w-6 sm:h-6 transition-all duration-500 ${forceColor.hex === '#FF003C' ? 'text-[#FF003C] drop-shadow-[0_0_12px_#FF003C]' : 'text-white/30 group-hover/btn:text-[#FF003C]'}`} /></button>
                <button onClick={() => handleCrystalClick('#B700FF', '183, 0, 255')} title="Cristal Kyber (Maestro Windu)" className="master-btn group/btn relative w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full hover:scale-110 active:scale-95 transition-all duration-300 bg-black/50 border border-white/5"><KyberCrystalIcon className={`w-5 h-5 sm:w-6 sm:h-6 transition-all duration-500 ${forceColor.hex === '#B700FF' ? 'text-[#B700FF] drop-shadow-[0_0_12px_#B700FF]' : 'text-white/30 group-hover/btn:text-[#B700FF]'}`} /></button>
             </div>
          </div>
        </footer>

        {showBadge && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm transition-opacity duration-300" onClick={() => setShowBadge(false)}>
            <div className="relative w-full max-w-sm bg-[#050505] border border-white/10 rounded-[2rem] p-8 flex flex-col items-center animate-popIn overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_40px_rgba(var(--accent-rgb),0.15)]" onClick={(e) => e.stopPropagation()}>
              
              {/* Efecto de perforación de gafete físico en la parte superior */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-2 rounded-full bg-white/10 border border-white/5"></div>
              
              {/* Resplandores ambientales en las esquinas */}
              <div className="absolute -top-20 -left-20 w-48 h-48 bg-accent opacity-10 blur-[50px] rounded-full pointer-events-none"></div>
              <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-accent opacity-10 blur-[50px] rounded-full pointer-events-none"></div>

              <button onClick={() => setShowBadge(false)} className="absolute top-6 right-6 text-white/50 hover:text-accent transition-colors active:scale-95 z-10"><X size={24} /></button>
              
              {/* Sección de la Foto */}
              <div className="relative mt-4 mb-6 group">
                <div className="absolute inset-0 bg-accent rounded-full animate-ping opacity-20"></div>
                <div className="relative w-32 h-32 rounded-full border-[3px] border-accent/50 p-1 overflow-hidden shadow-[0_0_30px_rgba(var(--accent-rgb),0.3)] transition-transform duration-500 group-hover:scale-105 group-hover:border-accent">
                  <div className="w-full h-full rounded-full overflow-hidden bg-black relative">
                    <div className="absolute inset-0 bg-accent mix-blend-color opacity-20 z-10 transition-opacity duration-300 group-hover:opacity-0"></div>
                    <img src="/foto.jpg" alt="Carlos Alexis" className="w-full h-full object-cover" />
                  </div>
                </div>
                {/* Indicador 'Online' */}
                <div className="absolute bottom-2 right-2 w-5 h-5 bg-accent rounded-full border-4 border-[#050505] shadow-[0_0_10px_rgba(var(--accent-rgb),0.8)]"></div>
              </div>
              
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-1 text-center tracking-tight">Carlos Alexis</h2>
              <p className="text-accent font-bold text-xs sm:text-sm tracking-widest uppercase mb-8 text-center flex items-center gap-2 bg-accent/10 px-4 py-1.5 rounded-full border border-accent/20">
                <Zap size={14} className="fill-accent" /> Ingeniero en Software
              </p>
              
              {/* Cajas de Datos de Contacto */}
              <div className="w-full space-y-3 relative z-10">
                <a href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/5 hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 group">
                  <div className="bg-white/10 p-2 rounded-xl group-hover:bg-accent/20 transition-colors"><Smartphone className="text-accent" size={20} /></div>
                  <div className="flex flex-col">
                    <span className="text-white/40 text-[10px] font-bold uppercase tracking-wider mb-0.5">WhatsApp</span>
                    <span className="text-white/90 font-medium text-sm">+52 56 2839 8045</span>
                  </div>
                </a>
                
                <a href="mailto:carlosalexiscompany@gmail.com" className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/5 hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 group">
                  <div className="bg-white/10 p-2 rounded-xl group-hover:bg-accent/20 transition-colors"><Mail className="text-accent" size={20} /></div>
                  <div className="flex flex-col overflow-hidden">
                    <span className="text-white/40 text-[10px] font-bold uppercase tracking-wider mb-0.5">Email Directo</span>
                    <span className="text-white/90 font-medium text-sm truncate">carlosalexiscompany@gmail.com</span>
                  </div>
                </a>

                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/5 hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 group cursor-default">
                  <div className="bg-white/10 p-2 rounded-xl group-hover:bg-accent/20 transition-colors"><MapPin className="text-accent" size={20} /></div>
                  <div className="flex flex-col">
                    <span className="text-white/40 text-[10px] font-bold uppercase tracking-wider mb-0.5">Base de Operaciones</span>
                    <span className="text-white/90 font-medium text-sm">Valle de Bravo, México</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {selectedProject && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md transition-opacity duration-300" onClick={() => setSelectedProject(null)}>
            <div className="relative w-full max-w-4xl bg-[#0a0a0a] border border-white/10 rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col max-h-[90vh] animate-popIn shadow-[0_0_50px_rgba(var(--accent-rgb),0.15)]" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-between p-5 sm:p-8 border-b border-white/10 shrink-0 bg-[#0a0a0a] z-10"><h2 className="font-display text-xl sm:text-3xl font-bold text-white pr-4">{selectedProject.title}</h2><button onClick={() => setSelectedProject(null)} className="text-white/50 hover:text-accent transition-colors active:scale-95 bg-white/5 p-2 rounded-full shrink-0"><X size={24} /></button></div>
              <div className="overflow-y-auto p-5 sm:p-8 space-y-8">
                <div>
                  <h3 className="text-accent font-bold uppercase tracking-widest text-xs sm:text-sm mb-4 flex items-center gap-2"><MonitorSmartphone size={18} /> Galería del Sistema</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {selectedProject.gallery.map((img, i) => (<div key={i} className="aspect-video rounded-xl overflow-hidden border border-white/10 relative group"><div className="absolute inset-0 bg-accent mix-blend-color opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10"></div><img src={img} alt={`Galería ${i+1}`} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" /></div>))}
                  </div>
                </div>
                {selectedProject.url && (
                  <a href={selectedProject.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-accent text-black font-bold px-6 py-3 rounded-full hover:bg-white transition-all duration-300 self-start"><ExternalLink size={20} /> Visitar Sitio Web Vivo</a>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  <div className="bg-white/5 border border-white/10 p-6 rounded-2xl"><h3 className="text-white font-bold text-lg sm:text-xl mb-4 flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.6)]"></div> El Problema</h3><p className="text-white/70 text-sm sm:text-base leading-relaxed">{selectedProject.problem}</p></div>
                  <div className="bg-accent-10 border border-accent-40 p-6 rounded-2xl relative overflow-hidden"><div className="absolute -top-10 -right-10 w-32 h-32 bg-accent opacity-10 blur-[40px] rounded-full pointer-events-none"></div><h3 className="text-accent font-bold text-lg sm:text-xl mb-5 flex items-center gap-2 relative z-10"><Zap size={22} className="fill-accent" /> Solución y Beneficios</h3><ul className="space-y-4 relative z-10">{selectedProject.benefits.map((benefit, i) => (<li key={i} className="flex items-start gap-3 text-white/90 text-sm sm:text-base leading-relaxed"><CheckCircle2 size={20} className="text-accent shrink-0 mt-0.5" /><span>{benefit}</span></li>))}</ul></div>
                </div>
                {selectedProject.roiComparison && (
                  <div className="mt-4 pt-6 border-t border-white/10"><h3 className="text-white font-display font-bold text-xl sm:text-2xl mb-6 text-center">El verdadero costo: <span className="text-accent">Software</span> vs <span className="text-red-400">Manual</span></h3><div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"><div className="bg-accent-10 border border-accent-40 p-5 sm:p-6 rounded-2xl relative overflow-hidden"><div className="absolute top-0 right-0 w-24 h-24 bg-accent opacity-10 blur-[30px] rounded-full pointer-events-none"></div><div className="flex items-center gap-3 mb-5 relative z-10"><div className="bg-accent p-2.5 rounded-xl"><Bot size={22} className="text-black" /></div><h4 className="text-white font-bold text-lg">Nuestro Software</h4></div><ul className="space-y-4 relative z-10">{selectedProject.roiComparison.software.map((item, i) => (<li key={i} className="flex items-start gap-3 text-white/90 text-sm sm:text-base"><CheckCircle2 size={18} className="text-accent shrink-0 mt-0.5" /><span>{item}</span></li>))}</ul></div><div className="bg-white/5 border border-white/10 p-5 sm:p-6 rounded-2xl"><div className="flex items-center gap-3 mb-5"><div className="bg-white/10 p-2.5 rounded-xl"><User size={22} className="text-white/60" /></div><h4 className="text-white/80 font-bold text-lg">Procesos Manuales</h4></div><ul className="space-y-4">{selectedProject.roiComparison.human.map((item, i) => (<li key={i} className="flex items-start gap-3 text-white/50 text-sm sm:text-base"><XCircle size={18} className="text-red-400 shrink-0 mt-0.5" /><span>{item}</span></li>))}</ul></div></div></div>
                )}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}