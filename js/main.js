/**
 * AXL Dynamics Website - Main JavaScript
 * Interactive functionality with micro-interactions
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ===== Mobile Menu Toggle =====
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
            navMenu.classList.toggle('active');
            document.body.classList.toggle('menu-open');
            
            // Animate hamburger
            const spans = this.querySelectorAll('span');
            spans.forEach(span => span.classList.toggle('active'));
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navMenu.contains(event.target);
            const isClickOnToggle = mobileMenuToggle.contains(event.target);
            
            if (!isClickInsideNav && !isClickOnToggle && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
                document.body.classList.remove('menu-open');
            }
        });
        
        // Close menu when window is resized to desktop
        window.addEventListener('resize', function() {
            if (window.innerWidth >= 1024) {
                navMenu.classList.remove('active');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
                document.body.classList.remove('menu-open');
            }
        });
    }
    
    // ===== Smooth Scrolling for Anchor Links =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Don't prevent default for empty hrefs
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                
                const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (navMenu && navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    mobileMenuToggle.setAttribute('aria-expanded', 'false');
                    document.body.classList.remove('menu-open');
                }
            }
        });
    });
    
    // ===== Navbar Scroll Effect =====
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add shadow when scrolled
        if (scrollTop > 10) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScrollTop = scrollTop;
    });
    
    // ===== Intersection Observer for Fade-in Animations =====
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.product-card, .feature-card, .testimonial-card, .showcase-item');
    animateElements.forEach(el => {
        el.classList.add('fade-in-element');
        observer.observe(el);
    });
    
    // ===== Platform Logo Hover Effect =====
    const platformLogos = document.querySelectorAll('.platform-logo');
    platformLogos.forEach(logo => {
        logo.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        
        logo.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // ===== Stats Counter Animation =====
    const stats = document.querySelectorAll('.stat-number');
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    stats.forEach(stat => statsObserver.observe(stat));
    
    function animateCounter(element) {
        const text = element.textContent;
        const hasPlus = text.includes('+');
        const number = parseInt(text.replace(/\D/g, ''));
        
        if (isNaN(number)) return;
        
        const duration = 2000;
        const step = number / (duration / 16);
        let current = 0;
        
        const timer = setInterval(() => {
            current += step;
            if (current >= number) {
                current = number;
                clearInterval(timer);
            }
            
            let displayValue = Math.floor(current);
            
            // Format large numbers
            if (displayValue >= 1000000) {
                displayValue = (displayValue / 1000000).toFixed(1) + 'M';
            } else if (displayValue >= 1000) {
                displayValue = Math.floor(displayValue / 1000) + 'K';
            }
            
            element.textContent = displayValue + (hasPlus ? '+' : '');
        }, 16);
    }
    
    // ===== Button Click Effects =====
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-outline, .btn-outline-light');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
    
    // ===== Form Validation (if forms exist) =====
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            const inputs = this.querySelectorAll('input[required], textarea[required]');
            let isValid = true;
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.classList.add('error');
                } else {
                    input.classList.remove('error');
                }
            });
            
            if (!isValid) {
                e.preventDefault();
            }
        });
    });
    
    // ===== Lazy Loading for Images =====
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        observer.unobserve(img);
                    }
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
    }
    
    // ===== Back to Top Button (optional) =====
    const backToTopButton = document.querySelector('.back-to-top');
    if (backToTopButton) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });
        
        backToTopButton.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // ===== FAQ Accordion =====
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            const answer = this.nextElementSibling;
            
            // Close all other FAQ items
            faqQuestions.forEach(q => {
                if (q !== this) {
                    q.setAttribute('aria-expanded', 'false');
                    q.nextElementSibling.classList.remove('active');
                }
            });
            
            // Toggle current item
            this.setAttribute('aria-expanded', !isExpanded);
            answer.classList.toggle('active');
        });
    });
    
    // ===== Console Message =====
    console.log('%c🚀 AXL Dynamics Website', 'font-size: 20px; font-weight: bold; color: #FF6B35;');
    console.log('%cBuilt with modern web technologies', 'font-size: 12px; color: #004E89;');
    
});

// Add CSS for fade-in animations
const style = document.createElement('style');
style.textContent = `
    .fade-in-element {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .fade-in-visible {
        opacity: 1;
        transform: translateY(0);
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .btn-primary,
    .btn-secondary,
    .btn-outline,
    .btn-outline-light {
        position: relative;
        overflow: hidden;
    }
    
    /* Mobile menu styles */
    @media (max-width: 1023px) {
        .nav-menu {
            position: fixed;
            top: 0;
            right: -100%;
            width: 80%;
            max-width: 300px;
            height: 100vh;
            background: white;
            flex-direction: column;
            padding: 6rem 2rem 2rem;
            box-shadow: -4px 0 16px rgba(0, 0, 0, 0.1);
            transition: right 0.3s ease;
            z-index: 999;
            align-items: flex-start;
        }
        
        .nav-menu.active {
            right: 0;
            display: flex;
        }
        
        .nav-menu li {
            width: 100%;
            margin-bottom: 1rem;
        }
        
        .nav-menu li a {
            display: block;
            padding: 0.75rem 0;
            font-size: 1.125rem;
        }
        
        body.menu-open {
            overflow: hidden;
        }
        
        body.menu-open::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.5);
            z-index: 998;
        }
        
        .mobile-menu-toggle span:nth-child(1).active {
            transform: rotate(45deg) translate(5px, 5px);
        }
        
        .mobile-menu-toggle span:nth-child(2).active {
            opacity: 0;
        }
        
        .mobile-menu-toggle span:nth-child(3).active {
            transform: rotate(-45deg) translate(7px, -7px);
        }
    }
    
    /* Back to top button */
    .back-to-top {
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--color-primary, #FF6B35);
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        cursor: pointer;
        z-index: 100;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }
    
    .back-to-top.visible {
        opacity: 1;
        visibility: visible;
    }
    
    .back-to-top:hover {
        transform: translateY(-3px);
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
    }
`;
document.head.appendChild(style);
