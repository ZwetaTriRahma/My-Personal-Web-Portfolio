// ===== effect typing =====
const typingText = document.getElementById('typingText');
const textToType = "Information System Student | Aspiring FullStack Developer";
let charIndex = 0;

function typeEffect() {
    if (charIndex < textToType.length) {
        typingText.textContent += textToType.charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100); 
    }
}

// start typing after page load
window.addEventListener('load', () => {
    setTimeout(typeEffect, 1000); 
});

// ===== CV =====
const cvModal = document.getElementById('cvModal');
const viewCvBtn = document.getElementById('viewCvBtn');
const cvClose = document.querySelector('.cv-close');

// open CV
viewCvBtn.addEventListener('click', (e) => {
    e.preventDefault();
    cvModal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scroll
});

// close CV 
cvClose.addEventListener('click', () => {
    cvModal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === cvModal) {
        cvModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// close modal with ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && cvModal.style.display === 'block') {
        cvModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// ===== mobile menu =====
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// ===== smooth scroll =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== active nav link =====
const sections = document.querySelectorAll('section');
const navLinksAll = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinksAll.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ===== navbar scroll =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// =====fade in animation=====
const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15,
    rootMargin: "0px 0px -100px 0px"
});

fadeElements.forEach(element => {
    observer.observe(element);
});

// ===== skills =====
const skillBars = document.querySelectorAll('.skill-progress');
const skillObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progress = entry.target.getAttribute('data-progress');
            entry.target.style.width = progress + '%';
            
            const percentageEl = entry.target.querySelector('.skill-percentage');
            if (percentageEl) {
                let currentProgress = 0;
                const targetProgress = parseInt(progress);
                const increment = targetProgress / 50;
                
                const timer = setInterval(() => {
                    currentProgress += increment;
                    if (currentProgress >= targetProgress) {
                        currentProgress = targetProgress;
                        clearInterval(timer);
                    }
                    percentageEl.textContent = Math.round(currentProgress) + '%';
                }, 20);
            }
            
            skillObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

skillBars.forEach(bar => {
    skillObserver.observe(bar);
});

// =====up scroll =====
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// =====submit =====
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Thank you, ${name}!\n\nYour message has been sent successfully.\nI'll get back to you at ${email} soon.`);
    
    contactForm.reset();
});

// =====card animation =====
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.zIndex = '10';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.zIndex = '1';
    });
});

console.log('Portfolio loaded successfully! 🎉');
console.log('Made with 💜 by Zweta Tri Rahma');