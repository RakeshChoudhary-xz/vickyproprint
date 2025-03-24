// Mobile Menu Toggle
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            if (window.innerWidth <= 768) {
                navLinks.style.display = 'none';
            }
        }
    });
});

// Navbar Background Change on Scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.backgroundColor = 'var(--white)';
        navbar.style.boxShadow = 'none';
    }
});

// Form Submission
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Here you would typically send the data to a server
    console.log('Form submitted:', data);
    
    // Show success message
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
});

// Image Preview for File Upload
const fileInput = document.querySelector('.file-input');
const fileUploadLabel = document.querySelector('.file-upload label');

fileInput.addEventListener('change', (e) => {
    if (e.target.files.length > 0) {
        const fileName = e.target.files[0].name;
        fileUploadLabel.innerHTML = `<i class="fas fa-check"></i> ${fileName}`;
        fileUploadLabel.style.borderColor = 'var(--secondary-color)';
        fileUploadLabel.style.backgroundColor = 'rgba(52, 152, 219, 0.1)';
    } else {
        fileUploadLabel.innerHTML = '<i class="fas fa-upload"></i> Upload Cloth Photo';
        fileUploadLabel.style.borderColor = 'var(--secondary-color)';
        fileUploadLabel.style.backgroundColor = 'var(--white)';
    }
});

// Intersection Observer for Fade-in Animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Add fade-in animation to sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.6s ease-out';
    observer.observe(section);
});

// Add hover effect to gallery items
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.querySelector('.gallery-overlay').style.transform = 'translateY(0)';
        item.querySelector('img').style.transform = 'scale(1.1)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.querySelector('.gallery-overlay').style.transform = 'translateY(100%)';
        item.querySelector('img').style.transform = 'scale(1)';
    });
});

// Gallery Scroll Buttons
const galleryGrid = document.querySelector('.gallery-grid');
const scrollLeftBtn = document.querySelector('.scroll-left');
const scrollRightBtn = document.querySelector('.scroll-right');

scrollLeftBtn.addEventListener('click', () => {
    galleryGrid.scrollBy({
        left: -300,
        behavior: 'smooth'
    });
});

scrollRightBtn.addEventListener('click', () => {
    galleryGrid.scrollBy({
        left: 300,
        behavior: 'smooth'
    });
});

// Show/hide scroll buttons based on scroll position
galleryGrid.addEventListener('scroll', () => {
    if (galleryGrid.scrollLeft > 0) {
        scrollLeftBtn.style.display = 'flex';
    } else {
        scrollLeftBtn.style.display = 'none';
    }
    
    if (galleryGrid.scrollLeft < (galleryGrid.scrollWidth - galleryGrid.clientWidth)) {
        scrollRightBtn.style.display = 'flex';
    } else {
        scrollRightBtn.style.display = 'none';
    }
}); 