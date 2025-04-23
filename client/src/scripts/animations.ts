/**
 * ClipUp - Animations Script
 * Este script ativa as animações modernas da interface
 */

export function initAnimations() {
  setupFadeInAnimations();
  setupStaggeredAnimations();
  setupParallaxEffect();
  addFloatAnimation();
  initParticles();
}

// Animação de fade-in para elementos que entram na tela
function setupFadeInAnimations() {
  const fadeElements = document.querySelectorAll('.fade-in-element');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  
  fadeElements.forEach(element => {
    observer.observe(element);
  });
}

// Animação sequencial para grupos de elementos
function setupStaggeredAnimations() {
  const staggerContainers = document.querySelectorAll('.stagger-container');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  
  staggerContainers.forEach(container => {
    observer.observe(container);
  });
}

// Efeito de parallax em cards e elementos
function setupParallaxEffect() {
  const parallaxElements = document.querySelectorAll('.parallax-card');
  
  document.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    
    parallaxElements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      const elementCenterX = rect.left + rect.width / 2;
      const elementCenterY = rect.top + rect.height / 2;
      
      // Calcula a distância do mouse ao elemento
      const distanceX = clientX - elementCenterX;
      const distanceY = clientY - elementCenterY;
      
      // Aplica o efeito parallax suave
      const strength = 0.02;
      const transformX = distanceX * strength;
      const transformY = distanceY * strength;
      
      // Usa type assertion para acessar a propriedade style
      (element as HTMLElement).style.transform = `translate(${transformX}px, ${transformY}px)`;
    });
  });
}

// Inicializa as partículas em todos os containers
function initParticles() {
  // Adiciona partículas na seção hero
  addParticles('.hero-gradient', 20);
  
  // Adiciona partículas em outras seções que precisam
  document.querySelectorAll('.blink-section').forEach((section) => {
    addParticles(section as HTMLElement, 15);
  });
}

// Adiciona círculos animados sutis como partículas de fundo
export function addParticles(container: string | HTMLElement, count: number = 15) {
  const containerEl = typeof container === 'string' 
    ? document.querySelector(container) 
    : container;
    
  if (!containerEl) return;
  
  // Adiciona o container de partículas
  const particlesContainer = document.createElement('div');
  particlesContainer.className = 'particles-container';
  containerEl.appendChild(particlesContainer);
  
  // Gera partículas aleatórias
  for (let i = 0; i < count; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Posição aleatória
    const size = Math.random() * 8 + 2; // 2px a 10px
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    
    // Estilo da partícula
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${x}%`;
    particle.style.top = `${y}%`;
    particle.style.opacity = `${Math.random() * 0.3 + 0.1}`;
    
    // Animação aleatória
    const duration = Math.random() * 20 + 10; // 10s a 30s
    const delay = Math.random() * 5;
    
    particle.style.animation = `float ${duration}s ${delay}s infinite ease-in-out`;
    
    particlesContainer.appendChild(particle);
  }
}

// Definição da animação de flutuação de partículas
const floatAnimation = `
@keyframes float {
  0%, 100% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(20px, 20px);
  }
  50% {
    transform: translate(40px, 0);
  }
  75% {
    transform: translate(20px, -20px);
  }
}
`;

// Adiciona a animação ao head
function addFloatAnimation() {
  if (document.getElementById('float-animation-style')) return;
  
  const style = document.createElement('style');
  style.id = 'float-animation-style';
  style.textContent = floatAnimation;
  document.head.appendChild(style);
}

// Inicializa as animações quando o DOM carrega
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAnimations);
  } else {
    initAnimations();
  }
}