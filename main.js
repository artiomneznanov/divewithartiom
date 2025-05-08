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

// Toggle dark mode
function toggleDarkMode() {
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled');
    } else {
        body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
    }
}

// Listen for toggle click
themeSwitch.addEventListener('click', toggleDarkMode);

// Load theme on initial page load
loadThemePreference();

// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    this.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
    });
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

// Run once on page load
handleScrollAnimations();

// Run on scroll
window.addEventListener('scroll', handleScrollAnimations);

// Contact Form Submission
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const formObject = Object.fromEntries(formData);
        
        // Simulate form submission
        // In a real scenario, you'd submit this to your backend or email service
        console.log('Form data:', formObject);
        
        // Show success message
        alert('Thank you for your message! I will contact you soon.');
        
        // Reset form
        this.reset();
    });
}

// Update copyright year
document.getElementById('current-year').textContent = new Date().getFullYear(); 