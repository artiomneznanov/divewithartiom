// Dark Mode Toggle
const themeSwitch = document.getElementById('theme-switch');
const body = document.body;

// Check for saved theme preference
function loadThemePreference() {
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'enabled') {
        body.classList.add('dark-mode');
    }
}
function toggleDarkMode() {
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled');
    } else {
        body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
    }
}
themeSwitch.addEventListener('click', toggleDarkMode);
loadThemePreference();

// Sticky Header Shrink
const header = document.getElementById('main-header');
const logo = document.getElementById('logo');
window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
        header.classList.add('shrink');
        logo.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
        logo.classList.remove('shrink');
    }
});

// Scroll to Top Button
const scrollTopBtn = document.getElementById('scroll-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Mobile Menu Toggle (Burger + overlay + close on outside)
const mobileMenuBtn = document.getElementById('burger-btn');
const navLinks = document.querySelector('.nav-links');
const navOverlay = document.getElementById('nav-overlay');
mobileMenuBtn.addEventListener('click', function () {
    navLinks.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
    navOverlay.classList.toggle('active');
    this.setAttribute('aria-expanded', navLinks.classList.contains('active'));
});
navOverlay.addEventListener('click', function () {
    navLinks.classList.remove('active');
    mobileMenuBtn.classList.remove('active');
    navOverlay.classList.remove('active');
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
});
// Close on link click
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
        navOverlay.classList.remove('active');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
    });
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Accounting for fixed header
                behavior: 'smooth'
            });
        }
    });
});

// Fade-in Animation on Scroll
function handleScrollAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const triggerPosition = window.innerHeight * 0.8;
        if (elementTop < triggerPosition) {
            element.classList.add('visible');
        }
    });
}
handleScrollAnimations();
window.addEventListener('scroll', handleScrollAnimations);

// Micro-interactions & Animations
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function () {
        card.classList.add('card-bounce');
    });
    card.addEventListener('animationend', function () {
        card.classList.remove('card-bounce');
    });
});
document.querySelectorAll('.cta-button, .service-cta, .submit-btn').forEach(btn => {
    btn.addEventListener('mousedown', function () {
        btn.classList.add('wave-animate');
    });
    btn.addEventListener('mouseup', function () {
        btn.classList.remove('wave-animate');
    });
    btn.addEventListener('mouseleave', function () {
        btn.classList.remove('wave-animate');
    });
});

// Form Handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        const submitButton = this.querySelector('.submit-btn');
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
    });
}

// Update copyright year
document.getElementById('current-year').textContent = new Date().getFullYear();
