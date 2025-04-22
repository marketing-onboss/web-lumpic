/**
 * ClipUp - Animations for Elementor
 * Emulates the animations created with framer-motion in the React version
 */

document.addEventListener('DOMContentLoaded', function() {
    // Utility function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85 &&
            rect.bottom >= 0
        );
    }

    // Setup entrance animations - fade in & slide up
    function setupEntranceAnimations() {
        const animElements = document.querySelectorAll('.clipup-animate');
        
        function checkElements() {
            animElements.forEach(element => {
                if (isInViewport(element) && !element.classList.contains('active')) {
                    element.classList.add('active');
                }
            });
        }
        
        // Check elements on load and scroll
        checkElements();
        window.addEventListener('scroll', checkElements);
        window.addEventListener('resize', checkElements);
    }

    // Setup hover animations for cards
    function setupHoverAnimations() {
        const cards = document.querySelectorAll('.clipup-card, .clipup-service-card');
        
        cards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px)';
                this.style.boxShadow = 'var(--shadow-lg)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = 'var(--shadow-md)';
            });
        });
    }

    // Setup counters (for statistics)
    function setupCounters() {
        const counters = document.querySelectorAll('.clipup-counter');
        
        function animateCounter(element) {
            const target = parseInt(element.getAttribute('data-target'));
            const duration = parseInt(element.getAttribute('data-duration') || 2000);
            const prefix = element.getAttribute('data-prefix') || '';
            const suffix = element.getAttribute('data-suffix') || '';
            const decimal = parseInt(element.getAttribute('data-decimal') || 0);
            
            let startTime = null;
            let currentCount = 0;
            
            function updateCounter(currentTime) {
                if (!startTime) startTime = currentTime;
                
                const progress = Math.min((currentTime - startTime) / duration, 1);
                currentCount = Math.floor(progress * target);
                
                // Format with decimal places if needed
                let displayValue = currentCount;
                if (decimal > 0) {
                    displayValue = currentCount.toFixed(decimal);
                }
                
                element.textContent = prefix + displayValue + suffix;
                
                if (progress < 1) {
                    requestAnimationFrame(updateCounter);
                }
            }
            
            requestAnimationFrame(updateCounter);
        }
        
        function checkCounters() {
            counters.forEach(counter => {
                if (isInViewport(counter) && !counter.classList.contains('counted')) {
                    counter.classList.add('counted');
                    animateCounter(counter);
                }
            });
        }
        
        // Initialize counters
        checkCounters();
        window.addEventListener('scroll', checkCounters);
    }

    // Setup parallax effects
    function setupParallax() {
        const parallaxElements = document.querySelectorAll('.clipup-parallax');
        
        if (parallaxElements.length > 0) {
            function updateParallax() {
                const scrollY = window.pageYOffset;
                
                parallaxElements.forEach(element => {
                    const speed = element.getAttribute('data-speed') || 0.1;
                    const direction = element.getAttribute('data-direction') || 'up';
                    const offset = element.getBoundingClientRect().top + scrollY;
                    
                    let yPos;
                    if (direction === 'up') {
                        yPos = -(scrollY - offset) * speed;
                    } else {
                        yPos = (scrollY - offset) * speed;
                    }
                    
                    element.style.transform = `translate3d(0, ${yPos}px, 0)`;
                });
            }
            
            window.addEventListener('scroll', updateParallax);
            updateParallax();
        }
    }

    // Setup staggered animations for lists/grids
    function setupStaggeredAnimations() {
        const staggerContainers = document.querySelectorAll('.clipup-stagger-container');
        
        staggerContainers.forEach(container => {
            const items = container.querySelectorAll('.clipup-animate');
            
            items.forEach((item, index) => {
                item.style.setProperty('--item-index', index);
            });
            
            function checkStaggerContainer() {
                if (isInViewport(container) && !container.classList.contains('active')) {
                    container.classList.add('active');
                    
                    items.forEach((item, index) => {
                        setTimeout(() => {
                            item.classList.add('active');
                        }, index * 100);
                    });
                }
            }
            
            checkStaggerContainer();
            window.addEventListener('scroll', checkStaggerContainer);
        });
    }

    // Setup Accordion functionality
    function setupAccordion() {
        const accordionHeaders = document.querySelectorAll('.clipup-accordion-header');
        
        accordionHeaders.forEach(header => {
            header.addEventListener('click', function() {
                const item = this.parentElement;
                const isActive = item.classList.contains('active');
                
                // Close all accordion items
                document.querySelectorAll('.clipup-accordion-item').forEach(accItem => {
                    accItem.classList.remove('active');
                });
                
                // If it wasn't active before, open it now
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        });
    }

    // Setup mobile menu toggling
    function setupMobileMenu() {
        const menuToggle = document.querySelector('.clipup-menu-toggle');
        const mobileMenu = document.querySelector('.clipup-mobile-menu');
        
        if (menuToggle && mobileMenu) {
            menuToggle.addEventListener('click', function() {
                const isOpen = mobileMenu.classList.contains('active');
                
                if (isOpen) {
                    mobileMenu.classList.remove('active');
                    menuToggle.classList.remove('active');
                    document.body.style.overflow = '';
                } else {
                    mobileMenu.classList.add('active');
                    menuToggle.classList.add('active');
                    document.body.style.overflow = 'hidden';
                }
            });
        }
    }

    // Animate numbers in the ROI calculator
    function setupROICalculator() {
        const sliders = document.querySelectorAll('.clipup-roi-slider');
        const results = document.querySelectorAll('.clipup-roi-result');
        
        sliders.forEach(slider => {
            slider.addEventListener('input', updateCalculator);
        });
        
        function updateCalculator() {
            // Get values from sliders
            const videoCount = parseInt(document.querySelector('[data-slider="videos"]')?.value || 0);
            const viewsCount = parseInt(document.querySelector('[data-slider="views"]')?.value || 0);
            const convRate = parseFloat(document.querySelector('[data-slider="conversion"]')?.value || 0);
            
            // Calculate results
            const totalViews = videoCount * viewsCount;
            const conversions = Math.round(totalViews * (convRate / 100));
            const revenue = conversions * 150; // Assume average order value
            
            // Update result displays
            document.querySelector('[data-result="views"]').textContent = totalViews.toLocaleString();
            document.querySelector('[data-result="conversions"]').textContent = conversions.toLocaleString();
            document.querySelector('[data-result="revenue"]').textContent = "R$ " + revenue.toLocaleString();
        }
        
        // Initialize
        if (sliders.length > 0) {
            updateCalculator();
        }
    }

    // Initialize all animations
    setupEntranceAnimations();
    setupHoverAnimations();
    setupCounters();
    setupParallax();
    setupStaggeredAnimations();
    setupAccordion();
    setupMobileMenu();
    setupROICalculator();
});