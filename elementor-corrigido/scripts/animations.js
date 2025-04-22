/**
 * ClipUp - Animations for Elementor
 * Emulates the animations created with framer-motion in the React version
 */
(function() {
    'use strict';
    
    // Execute when DOM is fully loaded
    document.addEventListener('DOMContentLoaded', function() {
        // Initialize all animations
        setupEntranceAnimations();
        setupHoverAnimations();
        setupCounters();
        setupParallax();
        setupStaggeredAnimations();
    });
    
    // Helper function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85 &&
            rect.bottom >= 0 &&
            rect.left <= (window.innerWidth || document.documentElement.clientWidth) &&
            rect.right >= 0
        );
    }
    
    // Set up entrance animations with IntersectionObserver when available
    function setupEntranceAnimations() {
        const animatedElements = document.querySelectorAll('.clipup-animate');
        
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.15 });
            
            animatedElements.forEach(element => {
                observer.observe(element);
            });
        } else {
            // Fallback for browsers without IntersectionObserver
            function checkElements() {
                animatedElements.forEach(element => {
                    if (isInViewport(element)) {
                        element.classList.add('active');
                    }
                });
            }
            
            // Check on load and scroll
            checkElements();
            window.addEventListener('scroll', checkElements);
        }
    }
    
    // Set up hover animations
    function setupHoverAnimations() {
        const hoverElements = document.querySelectorAll('.clipup-hover');
        
        hoverElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                element.style.transform = 'translateY(-2px)';
                
                const icon = element.querySelector('i');
                if (icon) {
                    icon.style.transform = 'translateX(3px)';
                }
            });
            
            element.addEventListener('mouseleave', () => {
                element.style.transform = '';
                
                const icon = element.querySelector('i');
                if (icon) {
                    icon.style.transform = '';
                }
            });
        });
        
        // Service card hover effects
        const serviceCards = document.querySelectorAll('.clipup-services-showcase .clipup-card');
        
        serviceCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                const img = card.querySelector('img');
                const overlay = card.querySelector('.clipup-overlay');
                
                if (img) {
                    img.style.transform = 'scale(1.1)';
                }
                
                if (overlay) {
                    overlay.style.opacity = '1';
                }
            });
            
            card.addEventListener('mouseleave', () => {
                const img = card.querySelector('img');
                const overlay = card.querySelector('.clipup-overlay');
                
                if (img) {
                    img.style.transform = '';
                }
                
                if (overlay) {
                    overlay.style.opacity = '0';
                }
            });
        });
    }
    
    // Set up counters (for stats and numbers)
    function setupCounters() {
        const counterElements = document.querySelectorAll('[data-counter]');
        const countersStarted = new Set();
        
        function animateCounter(element) {
            const target = parseInt(element.dataset.counter, 10);
            const duration = parseInt(element.dataset.duration || 1500, 10);
            const startTime = performance.now();
            const prefix = element.dataset.prefix || '';
            const suffix = element.dataset.suffix || '';
            
            function updateCounter(currentTime) {
                const elapsedTime = currentTime - startTime;
                const progress = Math.min(elapsedTime / duration, 1);
                const easeProgress = 1 - Math.pow(1 - progress, 3); // Cubic ease out
                
                const currentValue = Math.floor(easeProgress * target);
                element.textContent = `${prefix}${currentValue}${suffix}`;
                
                if (progress < 1) {
                    requestAnimationFrame(updateCounter);
                } else {
                    element.textContent = `${prefix}${target}${suffix}`;
                }
            }
            
            requestAnimationFrame(updateCounter);
        }
        
        function checkCounters() {
            counterElements.forEach(element => {
                if (!countersStarted.has(element) && isInViewport(element)) {
                    animateCounter(element);
                    countersStarted.add(element);
                }
            });
        }
        
        // Check on load and scroll
        checkCounters();
        window.addEventListener('scroll', checkCounters);
    }
    
    // Set up parallax effect for background elements
    function setupParallax() {
        const parallaxElements = document.querySelectorAll('[data-parallax]');
        
        if (parallaxElements.length > 0) {
            function updateParallax() {
                const scrollTop = window.pageYOffset;
                
                parallaxElements.forEach(element => {
                    const speed = parseFloat(element.dataset.parallax) || 0.15;
                    const yPos = -(scrollTop * speed);
                    element.style.transform = `translate3d(0, ${yPos}px, 0)`;
                });
            }
            
            window.addEventListener('scroll', updateParallax);
            updateParallax();
        }
    }
    
    // Set up staggered animations
    function setupStaggeredAnimations() {
        const staggerContainers = document.querySelectorAll('.clipup-stagger-container');
        
        staggerContainers.forEach(container => {
            const items = container.querySelectorAll('.clipup-card, .clipup-animate');
            
            // Set item index for staggered delay
            items.forEach((item, index) => {
                item.style.setProperty('--item-index', index);
            });
            
            if ('IntersectionObserver' in window) {
                const observer = new IntersectionObserver((entries) => {
                    if (entries[0].isIntersecting) {
                        items.forEach((item, index) => {
                            setTimeout(() => {
                                item.classList.add('active');
                            }, index * 100);
                        });
                        observer.unobserve(container);
                    }
                }, { threshold: 0.15 });
                
                observer.observe(container);
            } else {
                // Fallback for browsers without IntersectionObserver
                function checkStaggerContainer() {
                    if (isInViewport(container)) {
                        items.forEach((item, index) => {
                            setTimeout(() => {
                                item.classList.add('active');
                            }, index * 100);
                        });
                        
                        // Remove scroll listener after animation starts
                        window.removeEventListener('scroll', checkStaggerContainer);
                    }
                }
                
                // Check on load and scroll
                checkStaggerContainer();
                window.addEventListener('scroll', checkStaggerContainer);
            }
        });
    }
})();