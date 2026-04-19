// ============================================
// Academic Personal Website - JavaScript
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all functions
    initNavigation();
    initScrollReveal();
    initSmoothScroll();
    initContactForm();
    initActiveNavigation();
});

// ============================================
// Navigation Toggle (Mobile)
// ============================================
function initNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navbar = document.getElementById('navbar');

    if (!navToggle || !navMenu) return;

    // Toggle mobile menu
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close menu when clicking on a link
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Add scrolled class to navbar
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// ============================================
// Scroll Reveal Animation
// ============================================
function initScrollReveal() {
    const reveals = document.querySelectorAll('.timeline-item, .research-card, .project-card, .publication-item, .skill-category, .cert-item');

    if (!reveals.length) return;

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100;

        reveals.forEach(reveal => {
            const elementTop = reveal.getBoundingClientRect().top;

            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger on load
}

// ============================================
// Smooth Scroll for Anchor Links
// ============================================
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');

            if (href === '#' || !href.startsWith('#')) return;

            const target = document.querySelector(href);

            if (!target) return;

            e.preventDefault();

            const navbarHeight = document.getElementById('navbar').offsetHeight;
            const targetPosition = target.offsetTop - navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });
}

// ============================================
// Active Navigation Link
// ============================================
function initActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!sections.length || !navLinks.length) return;

    const updateActiveLink = () => {
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    };

    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink(); // Trigger on load
}

// ============================================
// Contact Form Handler
// ============================================
function initContactForm() {
    const form = document.getElementById('contactForm');

    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const submitButton = form.querySelector('button[type="submit"]');
        const originalText = submitButton.innerHTML;

        // Show loading state
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitButton.disabled = true;

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                showNotification('Message sent successfully! I will get back to you soon.', 'success');
                form.reset();
            } else {
                showNotification('Something went wrong. Please try again or email me directly.', 'error');
            }
        } catch (error) {
            showNotification('Something went wrong. Please try again or email me directly.', 'error');
        } finally {
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
        }
    });
}

// ============================================
// Notification System
// ============================================
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;

    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 1rem 1.5rem;
        background: ${type === 'success' ? 'var(--success)' : type === 'error' ? 'var(--error)' : 'var(--primary-600)'};
        color: white;
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-lg);
        z-index: 9999;
        animation: slideIn 0.3s ease;
        max-width: 400px;
    `;

    document.body.appendChild(notification);

    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

// ============================================
// Dynamic Content Loader (For GitHub Editing)
// ============================================
async function loadContentFromJSON() {
    try {
        const response = await fetch('content.json');
        if (!response.ok) return; // File doesn't exist, use HTML defaults

        const content = await response.json();

        // Update profile information
        if (content.profile) {
            updateProfileContent(content.profile);
        }

        // Update education
        if (content.education) {
            updateEducationContent(content.education);
        }

        // Update research
        if (content.research) {
            updateResearchContent(content.research);
        }

        // Update publications
        if (content.publications) {
            updatePublicationsContent(content.publications);
        }

        // Update skills
        if (content.skills) {
            updateSkillsContent(content.skills);
        }

        // Update contact
        if (content.contact) {
            updateContactContent(content.contact);
        }
    } catch (error) {
        console.log('Using default HTML content');
    }
}

function updateProfileContent(profile) {
    if (profile.name) {
        document.querySelector('.hero-title')?.childNodes[0]?.textContent?.replace(/.*/, profile.name);
    }
    if (profile.title) {
        const subtitle = document.querySelector('.hero-subtitle');
        if (subtitle) subtitle.textContent = profile.title;
    }
    if (profile.email) {
        const emailLink = document.querySelector('.contact-item a[href^="mailto"]');
        if (emailLink) {
            emailLink.href = `mailto:${profile.email}`;
            emailLink.textContent = profile.email;
        }
    }
    if (profile.phone) {
        const phoneLink = document.querySelector('.contact-item a[href^="tel"]');
        if (phoneLink) {
            phoneLink.href = `tel:${profile.phone}`;
            phoneLink.textContent = profile.phone;
        }
    }
}

// Load content on page load
window.addEventListener('load', loadContentFromJSON);

// ============================================
// Image Error Handler
// ============================================
function handleImageError(img) {
    img.style.display = 'none';
    const placeholder = document.createElement('div');
    placeholder.className = 'project-placeholder';
    placeholder.innerHTML = '<i class="fas fa-image"></i>';
    img.parentElement.appendChild(placeholder);
}

// ============================================
// YouTube Embed Handler
// ============================================
function loadYouTubeVideo(videoId, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = `
        <div class="video-wrapper">
            <iframe 
                src="https://www.youtube.com/embed/${videoId}" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen
            ></iframe>
        </div>
    `;
}

// ============================================
// Print CV Function
// ============================================
function printCV() {
    window.print();
}

// Add keyboard shortcut for print (Ctrl+P / Cmd+P)
document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
        e.preventDefault();
        printCV();
    }
});

// ============================================
// Add CSS for animations
// ============================================
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }
    
    .notification-content i {
        font-size: 1.25rem;
    }
`;
document.head.appendChild(style);

// Export functions for global use
window.loadYouTubeVideo = loadYouTubeVideo;
window.printCV = printCV;
window.handleImageError = handleImageError;
