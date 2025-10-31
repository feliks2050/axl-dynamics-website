/**
 * Pricing Page Interactive Functionality
 * Handles billing toggle and price switching
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // ===== Billing Toggle (Monthly/Annual) =====
    const toggleSwitch = document.querySelector('.toggle-switch');
    const priceAmounts = document.querySelectorAll('.price-amount');
    const annualNotes = document.querySelectorAll('.plan-annual-note');
    
    if (toggleSwitch) {
        toggleSwitch.addEventListener('click', function() {
            const isAnnual = this.getAttribute('aria-checked') === 'true';
            
            // Toggle state
            this.setAttribute('aria-checked', !isAnnual);
            this.classList.toggle('active');
            
            // Update prices with smooth animation
            priceAmounts.forEach(priceElement => {
                const monthlyPrice = priceElement.getAttribute('data-monthly');
                const annualPrice = priceElement.getAttribute('data-annual');
                
                // Add fade out effect
                priceElement.style.opacity = '0';
                priceElement.style.transform = 'translateY(-10px)';
                
                setTimeout(() => {
                    // Update price
                    priceElement.textContent = isAnnual ? monthlyPrice : annualPrice;
                    
                    // Fade in
                    priceElement.style.opacity = '1';
                    priceElement.style.transform = 'translateY(0)';
                }, 200);
            });
            
            // Show/hide annual savings note
            annualNotes.forEach(note => {
                if (isAnnual) {
                    note.style.display = 'none';
                } else {
                    note.style.display = 'block';
                }
            });
        });
    }
    
    // ===== Smooth Scroll to Plans =====
    const pricingLinks = document.querySelectorAll('a[href*="pricing.html"]');
    pricingLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Only handle if we're already on pricing page
            if (window.location.pathname.includes('pricing.html')) {
                const hash = this.getAttribute('href').split('#')[1];
                if (hash) {
                    e.preventDefault();
                    const target = document.getElementById(hash);
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }
            }
        });
    });
    
    // ===== Plan Card Hover Effects =====
    const pricingPlans = document.querySelectorAll('.pricing-plan');
    pricingPlans.forEach(plan => {
        plan.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        plan.addEventListener('mouseleave', function() {
            if (!this.classList.contains('featured')) {
                this.style.transform = 'translateY(0) scale(1)';
            }
        });
    });
    
    // ===== Analytics Tracking (Optional) =====
    const planCTAs = document.querySelectorAll('.plan-cta');
    planCTAs.forEach(cta => {
        cta.addEventListener('click', function(e) {
            const planName = this.closest('.pricing-plan').querySelector('.plan-name').textContent;
            const isAnnual = toggleSwitch && toggleSwitch.getAttribute('aria-checked') === 'false';
            
            // Log for analytics (replace with your analytics service)
            console.log('Plan selected:', {
                plan: planName,
                billing: isAnnual ? 'annual' : 'monthly',
                timestamp: new Date().toISOString()
            });
            
            // You can add GTM, GA4, or other analytics tracking here
            // Example: dataLayer.push({ event: 'plan_selected', plan: planName, billing: billingType });
        });
    });
    
    // ===== Comparison Table Sticky Header (on scroll) =====
    const comparisonTable = document.querySelector('.comparison-table');
    if (comparisonTable) {
        const thead = comparisonTable.querySelector('thead');
        const comparisonSection = document.querySelector('.comparison-section');
        
        window.addEventListener('scroll', function() {
            if (comparisonSection) {
                const rect = comparisonSection.getBoundingClientRect();
                const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 70;
                
                if (rect.top <= navbarHeight && rect.bottom > navbarHeight + 100) {
                    thead.style.position = 'sticky';
                    thead.style.top = navbarHeight + 'px';
                    thead.style.zIndex = '10';
                    thead.style.backgroundColor = 'var(--color-white)';
                    thead.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
                } else {
                    thead.style.position = 'static';
                    thead.style.boxShadow = 'none';
                }
            }
        });
    }
    
    // ===== Highlight Plan on URL Parameter =====
    const urlParams = new URLSearchParams(window.location.search);
    const highlightPlan = urlParams.get('plan');
    
    if (highlightPlan) {
        pricingPlans.forEach(plan => {
            const planName = plan.querySelector('.plan-name').textContent.toLowerCase();
            if (planName === highlightPlan.toLowerCase()) {
                // Scroll to and highlight the plan
                setTimeout(() => {
                    plan.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    plan.style.transform = 'scale(1.05)';
                    plan.style.boxShadow = '0 8px 32px rgba(255, 107, 53, 0.3)';
                    
                    setTimeout(() => {
                        plan.style.transform = '';
                    }, 1000);
                }, 500);
            }
        });
    }
    
    console.log('💰 Pricing page interactive features loaded');
});
