// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Trailer modal functionality
const playButtons = document.querySelectorAll('.play-btn');
const trailerModal = document.querySelector('.trailer-modal');
const closeModal = trailerModal.querySelector('button');

playButtons.forEach(button => {
    button.addEventListener('click', () => {
        trailerModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

closeModal.addEventListener('click', () => {
    trailerModal.classList.remove('active');
    document.body.style.overflow = 'auto';
    
    // Stop video playback
    const iframe = trailerModal.querySelector('iframe');
    iframe.src = iframe.src;
});

// Close modal when clicking outside
trailerModal.addEventListener('click', (e) => {
    if (e.target === trailerModal) {
        trailerModal.classList.remove('active');
        document.body.style.overflow = 'auto';
        
        // Stop video playback
        const iframe = trailerModal.querySelector('iframe');
        iframe.src = iframe.src;
    }
});

// Fade in animations
document.addEventListener('DOMContentLoaded', function() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
            }
        });
    }, { threshold: 0.1 });
    
    fadeElements.forEach(element => {
        fadeInObserver.observe(element);
    });
    
    // Search functionality
    const searchInput = document.querySelector('nav input[type="text"]');
    searchInput.addEventListener('focus', () => {
        document.querySelector('nav .relative').classList.add('ring-2', 'ring-primary');
    });
    
    searchInput.addEventListener('blur', () => {
        document.querySelector('nav .relative').classList.remove('ring-2', 'ring-primary');
    });
});


