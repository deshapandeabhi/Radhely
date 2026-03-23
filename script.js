document.addEventListener('DOMContentLoaded', () => {
    // Scroll Reveal Intersection Observer
    const revealElements = document.querySelectorAll('.scroll-reveal');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // Smooth Scrolling for Nav Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Offset for fixed nav
                    behavior: 'smooth'
                });
            }
        });
    });

    // Fade-in animation for initial elements
    const fadeElements = document.querySelectorAll('.fade-in, .fade-in-delay, .fade-in-delay-2');
    fadeElements.forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
    });

    // Dynamic Copyright Year
    const yearSpan = document.querySelector('.footer-links p');
    if (yearSpan) {
        const currentYear = new Date().getFullYear();
        yearSpan.innerHTML = `© ${currentYear} Radhely by Abhishek Deshapande. All rights reserved.`;
    }

    // Micro-interaction: Button pulse on hover
    const primaryBtn = document.querySelector('.btn-glow');
    if (primaryBtn) {
        primaryBtn.addEventListener('mouseover', () => {
            primaryBtn.style.transform = 'scale(1.05) translateY(-5px)';
        });
        primaryBtn.addEventListener('mouseout', () => {
            primaryBtn.style.transform = 'scale(1) translateY(0)';
        });
    }
});
