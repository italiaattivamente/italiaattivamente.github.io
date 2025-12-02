// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Feather icons initialization
document.addEventListener('DOMContentLoaded', function() {
    feather.replace();
});

// Accessibility features
document.addEventListener('DOMContentLoaded', function() {
    // Increase font size function
    const increaseFontBtn = document.getElementById('increase-font');
    if (increaseFontBtn) {
        increaseFontBtn.addEventListener('click', function() {
            document.body.style.fontSize = '1.2em';
        });
    }
    
    // High contrast mode toggle
    const contrastToggle = document.getElementById('contrast-toggle');
    if (contrastToggle) {
        contrastToggle.addEventListener('click', function() {
            document.body.classList.toggle('high-contrast');
        });
    }
    
    // Keyboard navigation enhancement
    document.addEventListener('keydown', function(e) {
        // Skip to content with Tab key
        if (e.key === 'Tab') {
            const skipLink = document.querySelector('.skip-link');
            if (skipLink) {
                skipLink.focus();
            }
        }
    });
});

// Form validation
function validateForm() {
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple validation
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            
            if (!name || !email) {
                alert('Per favore compila tutti i campi obbligatori.');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Per favore inserisci un indirizzo email valido.');
                return;
            }
            
            // Success message
            alert('Grazie per averci contattato! Ti risponderemo al più presto.');
            form.reset();
        });
    }
}

// Initialize form validation
document.addEventListener('DOMContentLoaded', validateForm);

// Animation on scroll
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
});

// Add animation classes
const style = document.createElement('style');
style.innerHTML = `
    .animate-fade-in-up {
        animation: fadeInUp 0.6s ease-out forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);