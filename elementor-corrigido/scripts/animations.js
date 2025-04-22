/**
 * ClipUp - Animations for Elementor
 * Emulates the animations created with framer-motion in the React version
 */

(function($) {
    'use strict';

    // Helper function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }

    // Adding entrance animations
    function setupEntranceAnimations() {
        const animatedElements = document.querySelectorAll('.clipup-animate');
        
        function checkElements() {
            animatedElements.forEach(element => {
                if (isInViewport(element) && !element.classList.contains('animated')) {
                    // Get animation properties from data attributes
                    const delay = parseFloat(element.getAttribute('data-delay') || 0) * 1000;
                    const duration = parseFloat(element.getAttribute('data-duration') || 0.5) * 1000;
                    const animation = element.getAttribute('data-animation') || 'fadeIn';
                    
                    // Add animated class to prevent re-triggering
                    element.classList.add('animated');
                    
                    // Apply animation after delay
                    setTimeout(() => {
                        element.style.opacity = '1';
                        element.style.transform = 'translate(0, 0)';
                        element.style.transition = `opacity ${duration}ms ease, transform ${duration}ms ease`;
                        
                        if (animation === 'fadeIn') {
                            // Already handled by opacity
                        } else if (animation === 'fadeInUp') {
                            element.style.transform = 'translate(0, 0)';
                        } else if (animation === 'fadeInDown') {
                            element.style.transform = 'translate(0, 0)';
                        } else if (animation === 'fadeInLeft') {
                            element.style.transform = 'translate(0, 0)';
                        } else if (animation === 'fadeInRight') {
                            element.style.transform = 'translate(0, 0)';
                        } else if (animation === 'zoomIn') {
                            element.style.transform = 'scale(1)';
                        }
                    }, delay);
                }
            });
        }
        
        // Initial check
        checkElements();
        
        // Check on scroll
        window.addEventListener('scroll', checkElements);
    }

    // Handle hover animations
    function setupHoverAnimations() {
        const hoverElements = document.querySelectorAll('.clipup-hover');
        
        hoverElements.forEach(element => {
            const hoverEffect = element.getAttribute('data-hover-effect') || 'scale';
            const hoverValue = element.getAttribute('data-hover-value') || '1.05';
            
            element.addEventListener('mouseenter', () => {
                if (hoverEffect === 'scale') {
                    element.style.transform = `scale(${hoverValue})`;
                } else if (hoverEffect === 'translateY') {
                    element.style.transform = `translateY(${hoverValue}px)`;
                } else if (hoverEffect === 'shadow') {
                    element.style.boxShadow = '0 10px 25px -5px rgba(0, 0, 0, 0.1)';
                }
                element.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
            });
            
            element.addEventListener('mouseleave', () => {
                if (hoverEffect === 'scale' || hoverEffect === 'translateY') {
                    element.style.transform = 'none';
                } else if (hoverEffect === 'shadow') {
                    element.style.boxShadow = 'none';
                }
            });
        });
    }
    
    // Handle animated counters
    function setupCounters() {
        const counters = document.querySelectorAll('.clipup-counter');
        
        function animateCounter(element) {
            const target = parseInt(element.getAttribute('data-target'), 10);
            const duration = parseInt(element.getAttribute('data-duration') || 2000, 10);
            const start = parseInt(element.getAttribute('data-start') || 0, 10);
            const prefix = element.getAttribute('data-prefix') || '';
            const suffix = element.getAttribute('data-suffix') || '';
            let current = start;
            const increment = (target - start) / (duration / 16);
            
            const timer = setInterval(() => {
                current += increment;
                if ((increment > 0 && current >= target) || (increment < 0 && current <= target)) {
                    clearInterval(timer);
                    current = target;
                }
                element.textContent = prefix + Math.floor(current) + suffix;
            }, 16);
        }
        
        function checkCounters() {
            counters.forEach(counter => {
                if (isInViewport(counter) && !counter.classList.contains('counted')) {
                    counter.classList.add('counted');
                    animateCounter(counter);
                }
            });
        }
        
        // Initial check
        checkCounters();
        
        // Check on scroll
        window.addEventListener('scroll', checkCounters);
    }
    
    // Initialize parallax effects
    function setupParallax() {
        const parallaxElements = document.querySelectorAll('.clipup-parallax');
        
        function updateParallax() {
            parallaxElements.forEach(element => {
                if (isInViewport(element)) {
                    const scrolled = window.scrollY;
                    const speed = parseFloat(element.getAttribute('data-speed') || 0.2);
                    const direction = element.getAttribute('data-direction') || 'up';
                    
                    if (direction === 'up') {
                        element.style.transform = `translateY(${scrolled * -speed}px)`;
                    } else if (direction === 'down') {
                        element.style.transform = `translateY(${scrolled * speed}px)`;
                    } else if (direction === 'left') {
                        element.style.transform = `translateX(${scrolled * -speed}px)`;
                    } else if (direction === 'right') {
                        element.style.transform = `translateX(${scrolled * speed}px)`;
                    }
                }
            });
        }
        
        window.addEventListener('scroll', updateParallax);
    }
    
    // Setup staggered animations for groups of elements
    function setupStaggeredAnimations() {
        const staggerContainers = document.querySelectorAll('.clipup-stagger-container');
        
        staggerContainers.forEach(container => {
            const children = container.querySelectorAll('.clipup-stagger-item');
            const staggerDelay = parseFloat(container.getAttribute('data-stagger-delay') || 0.1);
            
            function checkStaggerContainer() {
                if (isInViewport(container) && !container.classList.contains('staggered')) {
                    container.classList.add('staggered');
                    
                    children.forEach((child, index) => {
                        const delay = staggerDelay * index;
                        const duration = parseFloat(child.getAttribute('data-duration') || 0.5);
                        
                        setTimeout(() => {
                            child.style.opacity = '1';
                            child.style.transform = 'translate(0, 0)';
                            child.style.transition = `opacity ${duration}s ease, transform ${duration}s ease`;
                        }, delay * 1000);
                    });
                }
            }
            
            // Initial check
            checkStaggerContainer();
            
            // Check on scroll
            window.addEventListener('scroll', checkStaggerContainer);
        });
    }
    
    // Initialize on document ready
    $(document).ready(function() {
        setupEntranceAnimations();
        setupHoverAnimations();
        setupCounters();
        setupParallax();
        setupStaggeredAnimations();
        
        // Re-initialize when Elementor frontend is initialized (for editor mode)
        if (typeof elementorFrontend !== 'undefined') {
            elementorFrontend.hooks.addAction('frontend/element_ready/global', function() {
                setupEntranceAnimations();
                setupHoverAnimations();
                setupCounters();
                setupParallax();
                setupStaggeredAnimations();
            });
        }
    });

})(jQuery);