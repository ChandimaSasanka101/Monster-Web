// Particle Background Animation
function createParticles() {
    const container = document.getElementById('particles-container');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        const size = Math.random() * 4 + 1;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 3) + 's';

        container.appendChild(particle);
    }
}

// Cursor Trail Effect
let trail = [];
const trailLength = 5;

document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.cursor-trail');

    trail.push({ x: e.clientX, y: e.clientY });
    if (trail.length > trailLength) {
        trail.shift();
    }

    if (trail.length > 0) {
        const latest = trail[trail.length - 1];
        cursor.style.left = latest.x - 10 + 'px';
        cursor.style.top = latest.y - 10 + 'px';
        cursor.style.opacity = '1';
    }
});

// Initialize all enhanced features
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    animateSkills();
    initPortfolioFilter();
    initTestimonials();
    animateCounters();
    enhanceContactForm();
    addHoverEffects();
    initPageTransitions();
    initScrollAnimations();
    enhanceNavigation();
});










// Start loading-screen

document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const loadingScreen = document.querySelector(".loading-screen");

    // Disable scrolling while the loading animation is active
    body.style.overflow = "hidden";

    // Allow scrolling after the animation is done
    loadingScreen.addEventListener("animationend", (event) => {
        if (event.animationName === "fade-out") {
            body.style.overflow = "auto";
            loadingScreen.style.display = "none";
        }
    });
});

// End loading-screen










// Start Navbar section

// Add a black background to the navbar when scrolling down
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('black');
    } else {
        navbar.classList.remove('black');
    }
});

//time
setInterval(function () {
    const clock = document.querySelector(".display");
    let time = new Date();
    let sec = time.getSeconds();
    let min = time.getMinutes();
    let hr = time.getHours();
    let day = 'AM';
    if (hr > 12) {
        day = 'PM';
        hr = hr - 12;
    }
    if (hr == 0) {
        hr = 12;
    }
    if (sec < 10) {
        sec = '0' + sec;
    }
    if (min < 10) {
        min = '0' + min;
    }
    if (hr < 10) {
        hr = '0' + hr;
    }
    clock.textContent = hr + ':' + min + ':' + sec + " " + day;
});

// Mobile Menu Toggle Functionality
document.addEventListener("DOMContentLoaded", () => {
    const mobileToggle = document.getElementById('mobile-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileNavLinks = document.querySelectorAll('.mobile-menu .nav-links a');

    if (mobileToggle && mobileMenu) {
        mobileToggle.addEventListener('click', () => {
            mobileToggle.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : 'auto';
        });

        // Close mobile menu when clicking on a link
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileToggle.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
                mobileToggle.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    }
});

// Smooth scrolling for anchor links
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        });
    });
});

// Enhanced Navigation
function enhanceNavigation() {
    const navbar = document.getElementById('navbar');
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
}

// Enhanced Navigation Active State
document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById('navbar');
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    if (sections.length > 0 && navLinks.length > 0) {
        const observerOptions = {
            root: null,
            rootMargin: '-50% 0px -50% 0px',
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const currentSection = entry.target.getAttribute('id');

                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href').substring(1) === currentSection) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, observerOptions);

        sections.forEach(section => observer.observe(section));
    }
});

// Keyboard Navigation Support
document.addEventListener("DOMContentLoaded", () => {
    // Add keyboard support for cards
    const cards = document.querySelectorAll('.card[tabindex="0"]');
    cards.forEach(card => {
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                card.click();
            }
        });
    });

    // Add keyboard support for portfolio items
    const portfolioItems = document.querySelectorAll('.portfolio-item[tabindex="0"]');
    portfolioItems.forEach(item => {
        item.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const viewBtn = item.querySelector('.view-project-btn');
                if (viewBtn) viewBtn.click();
            }
        });
    });
});

// End Navbar section










// Start Hero Section

// freeze the hero video after 4 seconds
document.addEventListener("DOMContentLoaded", () => {
    const heroVideo = document.querySelector(".bg-video");

    if (heroVideo) {
        // Play the video for 4 seconds, then pause and freeze
        heroVideo.play();

        setTimeout(() => {
            heroVideo.pause(); // Pause the video
        }, 5000);

        // Freeze the video for 4 seconds (no further action required if the video is paused)
        setTimeout(() => {
            heroVideo.currentTime = heroVideo.currentTime; // Keeps the video at the current frame
        }, 70000);
    }
});


// fade in elements in hero section
document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById("navbar");
    const heroElements = document.querySelectorAll(".hero-content, .hero-logo, .black-bar, .go-scroll-combined, .bbgg");

    // Initially hide elements
    navbar.style.opacity = "0";
    heroElements.forEach(element => {
        element.style.opacity = "0";
        element.style.transition = "opacity 1s ease";
    });

    // Make them visible after 4 seconds
    setTimeout(() => {
        navbar.style.transition = "opacity 1s ease";
        navbar.style.opacity = "1";
        heroElements.forEach(element => {
            element.style.opacity = "1";
        });
    }, 5000);
});



// End Hero Section










// Start Info Section

// Performance Optimization - Debounced Scroll
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounced scroll for performance
window.addEventListener('scroll', debounce(() => {
    // Parallax effect for logo overlay
    const logoOverlay = document.querySelector('.logo-overlay'); // Get the element with class 'logo-overlay'
    if (logoOverlay) { // If the element exists
        const scrolled = window.pageYOffset; // Get the number of pixels the document is currently scrolled vertically
        const parallax = scrolled * 0.5; // Calculate the parallax offset (half the scroll amount)
        // Move the logo overlay vertically by the parallax amount, keeping it centered horizontally and vertically
        logoOverlay.style.transform = `translate(-50%, -80%) translateY(${parallax}px)`;
    }
}, 10)); // Debounce the scroll event handler to run at most every 10 milliseconds

// End Info Section










// Start Skills Bars Section

// Skills Animation
function animateSkills() {
    const skillBars = document.querySelectorAll('.skill-progress');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBar = entry.target;
                const width = skillBar.getAttribute('data-width');
                skillBar.style.width = width;
                observer.unobserve(skillBar);
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => observer.observe(bar));
}

// End Skills Bars Section










// Start Team Section

// Team Section JavaScript
document.addEventListener('DOMContentLoaded', function () {
    // Intersection Observer for team member animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const teamObserver = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    // Observe all team members
    const teamMembers = document.querySelectorAll('.team-member');
    teamMembers.forEach((member, index) => {
        // Add staggered delay for animation
        member.style.animationDelay = `${index * 0.2}s`;
        teamObserver.observe(member);
    });

    

    // Contact button functionality
    const contactBtns = document.querySelectorAll('.contact-btn');
    contactBtns.forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();

            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);

            // Get the icon to determine action
            const icon = this.querySelector('i');
            const memberName = this.closest('.team-member').querySelector('.member-name').textContent;

            if (icon.classList.contains('fa-envelope')) {
                // Email functionality
                console.log(`Email ${memberName}`);
                // You can add actual email functionality here
                // window.location.href = 'mailto:email@example.com';
            } else if (icon.classList.contains('fa-phone')) {
                // Phone functionality
                console.log(`Call ${memberName}`);
                // You can add actual phone functionality here
                // window.location.href = 'tel:+1234567890';
            } else if (icon.classList.contains('fa-briefcase')) {
                // Portfolio functionality
                console.log(`View ${memberName}'s portfolio`);
                // You can add actual portfolio link here
                // window.open('portfolio-link', '_blank');
            }
        });
    });

    // Team member hover effects
    teamMembers.forEach(member => {
        member.addEventListener('mouseenter', function () {
            this.style.zIndex = '10';
        });

        member.addEventListener('mouseleave', function () {
            this.style.zIndex = '1';
        });

        // Keyboard accessibility
        member.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });

    // Skill tag hover effects
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', function () {
            // Add ripple effect
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            this.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Additional utility functions for the team section
function highlightSkill(skillName) {
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach(tag => {
        if (tag.textContent.toLowerCase().includes(skillName.toLowerCase())) {
            tag.style.background = 'linear-gradient(45deg, #ff6b6b, #ffd93d)';
            setTimeout(() => {
                tag.style.background = '';
            }, 2000);
        }
    });
}

// Smooth scroll to team section (if called from navigation)
function scrollToTeam() {
    const teamSection = document.getElementById('team');
    if (teamSection) {
        teamSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}



// End Team Section










// Start Counter Stats Section

// Stats Counter Animation
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-count'));
                let count = 0;
                const increment = target / 50;

                const timer = setInterval(() => {
                    count += increment;
                    if (count >= target) {
                        counter.textContent = target;
                        clearInterval(timer);
                    } else {
                        counter.textContent = Math.floor(count);
                    }
                }, 40);

                observer.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
}

// Enhanced Stats Counter with Intersection Observer
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll('.stat-number');

    if (counters.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                    const counter = entry.target;
                    const target = parseInt(counter.getAttribute('data-count'));
                    let count = 0;
                    const increment = target / 100;
                    const duration = 2000; // 2 seconds
                    const stepTime = duration / 100;

                    counter.classList.add('counted');

                    const timer = setInterval(() => {
                        count += increment;
                        if (count >= target) {
                            counter.textContent = target;
                            clearInterval(timer);
                        } else {
                            counter.textContent = Math.floor(count);
                        }
                    }, stepTime);

                    observer.unobserve(counter);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => observer.observe(counter));
    }
});

// End Counter Stats Section










// Start Portfolio Section

// Portfolio Filter
function initPortfolioFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            portfolioItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// Enhanced Portfolio Filter with Animation
document.addEventListener("DOMContentLoaded", () => {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    if (filterBtns.length > 0 && portfolioItems.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Update active state
                filterBtns.forEach(b => {
                    b.classList.remove('active');
                    b.setAttribute('aria-selected', 'false');
                });
                btn.classList.add('active');
                btn.setAttribute('aria-selected', 'true');

                const filter = btn.getAttribute('data-filter');

                portfolioItems.forEach((item, index) => {
                    if (filter === 'all' || item.getAttribute('data-category') === filter) {
                        setTimeout(() => {
                            item.style.display = 'block';
                            setTimeout(() => {
                                item.style.opacity = '1';
                                item.style.transform = 'scale(1) translateY(0)';
                            }, 10);
                        }, index * 50);
                    } else {
                        item.style.opacity = '0';
                        item.style.transform = 'scale(0.8) translateY(20px)';
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }
});


// Enhanced Portfolio Filter with Animation
document.addEventListener("DOMContentLoaded", () => {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    // ======== අලුතින් එකතු කරන ලද කොටස / Start of Added Section ========
    const viewMoreButtons = document.querySelectorAll('.view-more-btn');
    // ======== අලුතින් එකතු කරන ලද කොටස අවසන් / End of Added Section ========

    if (filterBtns.length > 0 && portfolioItems.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Update active state
                filterBtns.forEach(b => {
                    b.classList.remove('active');
                    b.setAttribute('aria-selected', 'false');
                });
                btn.classList.add('active');
                btn.setAttribute('aria-selected', 'true');

                const filter = btn.getAttribute('data-filter');

                // Portfolio අයිතම filter කිරීමේ ලොජික් එක
                portfolioItems.forEach((item, index) => {
                    if (filter === 'all' || item.getAttribute('data-category') === filter) {
                        setTimeout(() => {
                            item.style.display = 'block';
                            setTimeout(() => {
                                item.style.opacity = '1';
                                item.style.transform = 'scale(1) translateY(0)';
                            }, 10);
                        }, index * 50);
                    } else {
                        item.style.opacity = '0';
                        item.style.transform = 'scale(0.8) translateY(20px)';
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 300);
                    }
                });

                // ======== අලුතින් එකතු කරන ලද ලොජික් එක / Start of Added Logic ========
                // අමතර බොත්තම් පාලනය කිරීම
                viewMoreButtons.forEach(viewBtn => {
                    // අදාල ෆිල්ටර් එකට ගැලපෙන බොත්තම පෙන්වීම
                    if (viewBtn.getAttribute('data-category-button') === filter) {
                        viewBtn.style.display = 'inline-block';
                    }
                    // අනෙක් සියලුම බොත්තම් සැඟවීම
                    else {
                        viewBtn.style.display = 'none';
                    }
                });
            });
        });
    }
});

// End Portfolio Section










// Start Testimonials Section

// Testimonials Slider
function initTestimonials() {
    const testimonials = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;

    function showSlide(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.classList.toggle('active', i === index);
        });

        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    // Auto-play testimonials
    setInterval(() => {
        currentSlide = (currentSlide + 1) % testimonials.length;
        showSlide(currentSlide);
    }, 5000);

    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });
}

// Enhanced Testimonials Slider
document.addEventListener("DOMContentLoaded", () => {
    const testimonials = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    let autoPlayInterval;

    if (testimonials.length > 0 && dots.length > 0) {
        function showSlide(index) {
            testimonials.forEach((testimonial, i) => {
                testimonial.classList.toggle('active', i === index);
            });

            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
                dot.setAttribute('aria-selected', i === index ? 'true' : 'false');
            });
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % testimonials.length;
            showSlide(currentSlide);
        }

        function startAutoPlay() {
            autoPlayInterval = setInterval(nextSlide, 5000);
        }

        function stopAutoPlay() {
            clearInterval(autoPlayInterval);
        }

        // Initialize
        showSlide(0);
        startAutoPlay();

        // Dot navigation
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentSlide = index;
                showSlide(currentSlide);
                stopAutoPlay();
                setTimeout(startAutoPlay, 3000); // Restart after 3 seconds
            });
        });

        // Pause on hover
        const testimonialContainer = document.querySelector('.testimonials-container');
        if (testimonialContainer) {
            testimonialContainer.addEventListener('mouseenter', stopAutoPlay);
            testimonialContainer.addEventListener('mouseleave', startAutoPlay);
        }
    }
});

// End Testimonials Section










// Start Contact Section


document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.querySelector(".contact-form");
    if (!contactForm) return;

    // --- Input Fields ---
    const allInputs = contactForm.querySelectorAll('input, textarea');
    const nameInput = contactForm.querySelector('#name');
    const emailInput = contactForm.querySelector('#email');
    const phoneInput = contactForm.querySelector('#phone');
    const messageInput = contactForm.querySelector('#message');

    // --- Buttons & Status ---
    const submitBtn = contactForm.querySelector('.btn[type="submit"]');
    const btnLoader = submitBtn.querySelector('.btn-loader');
    const btnText = submitBtn.querySelector('span');
    const formStatus = document.getElementById('form-status');

    // --- 📧 VALIDATION FUNCTIONS  ---
    const validateEmail = (email) => {
        // Very strict email validation
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        // const emailRegex = /^[a-zA-Z0-9_+&*-]+(?:\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,15}$/;
        return emailRegex.test(email);
    };

    const validatePhone = (phone) => {
        // Allows optional '+' and requires 10 digits. Handles spaces and hyphens by removing them.
        const phoneRegex = /^[0-9]{10}$/;
        return phoneRegex.test(phone.replace(/[\s-]/g, ''));
    };

    // --- Helper Functions for UI ---
    const showError = (input, message) => {
        const errorElement = document.getElementById(`${input.id}-error`);
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.classList.add('show');
        }
        input.classList.add('error-border');
    };

    const clearError = (input) => {
        const errorElement = document.getElementById(`${input.id}-error`);
        if (errorElement) {
            errorElement.classList.remove('show');
        }
        input.classList.remove('error-border');
    };

    const showFormStatus = (message, type) => {
        if (formStatus) {
            formStatus.textContent = message;
            formStatus.className = `form-status ${type} show`;
            setTimeout(() => {
                formStatus.className = 'form-status';
            }, 5000);
        }
    };

    // --- FIELD VALIDATION LOGIC ---
    const validateField = (input) => {
        const value = input.value.trim();
        let isValid = true;
        clearError(input);

        // Required field check
        if (!value) {
            showError(input, 'This field is required.');
            isValid = false;
        }
        // Specific format validations only if there is a value
        else if (value) {
            if (input.type === 'email' && !validateEmail(value)) {
                showError(input, 'Please enter a valid email address.');
                isValid = false;
            }
            if (input.type === 'tel' && !validatePhone(value)) {
                showError(input, 'Please enter a valid phone number.');
                isValid = false;
            }
        }
        return isValid;
    };

    // --- 📨 FORM SUBMISSION EVENT ---
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Validate all fields before submitting - ALL ARE NOW REQUIRED
        const isNameValid = validateField(nameInput);
        const isEmailValid = validateField(emailInput);
        const isPhoneValid = validateField(phoneInput);
        const isMessageValid = validateField(messageInput);

        if (!isNameValid || !isEmailValid || !isPhoneValid || !isMessageValid) {
            showFormStatus('Please fix the errors above. All fields are required.', 'error');
            return;
        }

        // --- Form is valid, proceed with submission ---
        submitBtn.disabled = true;
        submitBtn.classList.add('loading');
        if (btnLoader) btnLoader.style.display = 'inline-block';
        if (btnText) btnText.textContent = 'SENDING...';

        const formData = {
            name: nameInput.value.trim(),
            email: emailInput.value.trim(),
            phone: phoneInput.value.trim(),
            subject: contactForm.querySelector('#subject').value.trim() || 'Contact Form Submission',
            message: messageInput.value.trim()
        };

        setTimeout(() => {
            const mailtoLink = `mailto:chamiforpersonal@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
                `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
            )}`;
            window.location.href = mailtoLink;

            showFormStatus('Your message has been prepared to send!', 'success');
            contactForm.reset();

            submitBtn.disabled = false;
            submitBtn.classList.remove('loading');
            if (btnLoader) btnLoader.style.display = 'none';
            if (btnText) btnText.textContent = 'SEND MESSAGE';
            allInputs.forEach(clearError);

        }, 1500);
    });

    // --- ✨ REAL-TIME VALIDATION on blur (when user clicks away) ---
    allInputs.forEach(input => {
        input.addEventListener('blur', () => {
            validateField(input);
        });
        // Clear error as user types
        input.addEventListener('input', () => {
            if (input.classList.contains('error-border')) {
                clearError(input);
            }
        });
    });
});



// End Contact Section











// Start Footer Section

// popup box for call and sms
document.addEventListener("DOMContentLoaded", () => {
    const popupBg = document.getElementById("popup-bg");
    const callBtn = document.getElementById("call-btn");
    const smsBtn = document.getElementById("sms-btn");
    const callLink = document.querySelector(".footer-contact a[href='tel:+94764862828']");

    callLink.addEventListener("click", (event) => {
        event.preventDefault();
        popupBg.style.display = popupBg.style.display === "flex" ? "none" : "flex";
    });

    popupBg.addEventListener("click", (event) => {
        if (event.target === popupBg) {
            popupBg.style.display = "none";
        }
    });

    callBtn.addEventListener("click", () => {
        window.location.href = callLink.href;
    });

    smsBtn.addEventListener("click", () => {
        window.location.href = "sms:" + callLink.href.replace("tel:", "");
    });
});


// Enhanced Popup functionality
document.addEventListener("DOMContentLoaded", () => {
    const popupBg = document.getElementById("popup-bg");
    const callBtn = document.getElementById("call-btn");
    const smsBtn = document.getElementById("sms-btn");
    const closePopupBtn = document.querySelector(".close-popup");
    const callLink = document.querySelector(".footer-contact a[href='tel:+94764862828']");

    if (callLink && popupBg) {
        callLink.addEventListener("click", (event) => {
            event.preventDefault();
            popupBg.style.display = "flex";
            popupBg.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
        });

        function closePopup() {
            popupBg.style.display = "none";
            popupBg.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = 'auto';
        }

        popupBg.addEventListener("click", (event) => {
            if (event.target === popupBg) {
                closePopup();
            }
        });

        if (closePopupBtn) {
            closePopupBtn.addEventListener("click", closePopup);
        }

        if (callBtn) {
            callBtn.addEventListener("click", () => {
                window.location.href = callLink.href;
                closePopup();
            });
        }

        if (smsBtn) {
            smsBtn.addEventListener("click", () => {
                window.location.href = "sms:" + callLink.href.replace("tel:", "");
                closePopup();
            });
        }
    }
});


// --- Code for Services Popup ---
document.addEventListener("DOMContentLoaded", () => {

    // 1. Define the sub-categories for each service
    const serviceData = {
        "3d-works": {
            title: "3D Works",
            items: [
                { text: "3D Modelling", url: "https://drive.google.com/drive/folders/12L15I-LZxqn9_G_V2AuyPnqfPezn5q8L?usp=sharing" },
                { text: "3D Visualization & Rendering", url: "https://drive.google.com/drive/folders/14wYatpAR1kmYcQwWMKrD20-a3SR2p7VO?usp=sharing" },
                { text: "3D Animation", url: "https://drive.google.com/drive/folders/1FXuGbSPlOsTFf6pPuGAVZ3SFx4mLuWHO?usp=sharing" },
                // { text: "3D Animation", url: "https://drive.google.com/link-to-your-folder4" }
            ]
        },
        "video-editing": {
            title: "Video Editing",
            items: [
                { text: "Social Media Content Creation", url: "https://drive.google.com/drive/folders/1_PEIPl4ybMDHl5Wxp7AcnhujJN7t5QnW?usp=sharing" },
                { text: "Corporate & Commercial Videos", url: "https://drive.google.com/drive/folders/1TUdVCQAxy1aQ2tUH6jE9eHDN7vpJlBRp?usp=sharing" },
                { text: "Event & Personal Videos", url: "https://drive.google.com/drive/folders/1R5-yBji1Kl6CgZGlb-nZv09-1RV6LfVG?usp=sharing" },
                // { text: "Motion Graphics", url: "https://drive.google.com/link-to-your-folder8" }
            ]
        },
        "designing": {
            title: "Designing",
            items: [
                { text: "Branding & Logo Design", url: "https://drive.google.com/drive/folders/1jRfDpGgvMHymA1cwWlfyiWRwyr1Mofqh?usp=sharing" },
                { text: "Marketing & Advertising Materials", url: "https://drive.google.com/drive/folders/1EN1qGWpw73JYHi2My6oA2F_OYmpLb4SD?usp=sharing" },
                { text: "Custom Illustrations & Art", url: "https://drive.google.com/drive/folders/1lAQ_oub90sxK1e_LUaConU8HN9YDYdNL?usp=sharing" },
                // { text: "UI/UX Design", url: "https://drive.google.com/link-to-your-folder12" }
            ]
        },
        "web-applications": {
            title: "Web Applications",
            items: [
                { text: "E-commerce Solutions", url: "https://drive.google.com/drive/folders/13jnrZYjLzhtGkwCt2FxqIwWtbyOXRB9Z?usp=sharing" },
                { text: "Business & Portfolio Websites", url: "https://drive.google.com/drive/folders/1iL3Ulj392DTB15BOnI9b7BTFnP5mx7KY?usp=sharing" },
                { text: "Website Maintenance & Support", url: "https://drive.google.com/drive/folders/1qxMQPgiHZCNS73ngskF0zZdXG4bhOXG4?usp=sharing" },
                // { text: "Full-stack Applications", url: "https://drive.google.com/link-to-your-folder16" }
            ]
        }
    };

    // 2. Get references to the HTML elements
    const serviceLinks = document.querySelectorAll(".services-list a");
    const servicePopupBg = document.getElementById("service-popup-bg");
    const servicePopupTitle = document.getElementById("service-popup-title");
    const servicePopupList = document.getElementById("service-popup-list");
    const closeServicePopupBtn = servicePopupBg.querySelector(".close-popup");

    // 3. Function to open the popup
    function openServicePopup(serviceKey) {
        const data = serviceData[serviceKey];
        if (!data) return; // Exit if no data found for the key

        // Update popup content
        servicePopupTitle.textContent = data.title;

        // Clear previous list items
        servicePopupList.innerHTML = "";

        // Add new list items with links
        data.items.forEach(item => {
            const li = document.createElement("li");
            const a = document.createElement("a");
            a.textContent = item.text;
            a.href = item.url;
            a.target = "_blank"; // Opens the link in a new tab
            a.rel = "noopener noreferrer"; // Security best practice for new tabs

            li.appendChild(a);
            servicePopupList.appendChild(li);
        });

        // Display the popup
        servicePopupBg.style.display = "flex";
        servicePopupBg.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    // 4. Function to close the popup
    function closeServicePopup() {
        servicePopupBg.style.display = "none";
        servicePopupBg.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = 'auto'; // Restore scrolling
    }

    // 5. Add click event listeners to each service link
    serviceLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault(); // Prevent the link from navigating
            const serviceKey = link.getAttribute("data-service");
            openServicePopup(serviceKey);
        });
    });

    // 6. Add event listeners to close the popup
    if (closeServicePopupBtn) {
        closeServicePopupBtn.addEventListener("click", closeServicePopup);
    }

    servicePopupBg.addEventListener("click", (event) => {
        // Close if the click is on the background itself, not on the box
        if (event.target === servicePopupBg) {
            closeServicePopup();
        }
    });

    // --- END: New code for Services Popup ---
});


// End Footer Section










// Start Back to Top Button Section

// Back to Top Button Functionality
document.addEventListener("DOMContentLoaded", () => {
    const backToTopBtn = document.getElementById('backToTop');

    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('show');
                backToTopBtn.setAttribute('aria-hidden', 'false');
            } else {
                backToTopBtn.classList.remove('show');
                backToTopBtn.setAttribute('aria-hidden', 'true');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
// End Back to Top Button Section










// Start Animation for Section 

// Add scroll animations to sections
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");

    // Function to handle animations
    const animateSection = (section) => {
        const sectionId = section.id;

        // Default animation styles
        section.style.opacity = "1";
        section.style.transition = "opacity 0.8s ease, transform 0.8s ease";

        if (section.classList.contains("info-section")) {
            section.style.transform = "translateX(0)";
        } else if (section.classList.contains("contact-section") ||
            section.classList.contains("foot") ||
            section.classList.contains("weare") ||
            section.classList.contains("new-card-design")) {
            section.style.transform = "scale(1)";
        } else {
            section.style.transform = "translateY(0)";
        }
    };

    const observerOptions = {
        root: null,
        threshold: 0.1,
    };

    const observerCallback = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                animateSection(entry.target); // Apply animation
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((section) => {
        // Set initial hidden styles
        section.style.opacity = "0";
        if (section.id === "hero") {
            section.style.transform = "translateY(-50px)";
        } else if (section.classList.contains("info-section")) {
            section.style.transform = "translateX(-100px)";
        } else if (section.classList.contains("contact-section") ||
            section.classList.contains("foot") ||
            section.classList.contains("weare") ||
            section.classList.contains("new-card-design")) {
            section.style.transform = "scale(0.5)";
        } else {
            section.style.transform = "translateY(50px)";
        }

        // Observe the section for visibility
        observer.observe(section);
    });
});

// Enhanced Page Transitions
function initPageTransitions() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Add smooth scroll with offset for navbar
                const offsetTop = targetElement.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });

                // Add visual feedback
                targetElement.style.transform = 'scale(1.02)';
                setTimeout(() => {
                    targetElement.style.transform = 'scale(1)';
                }, 200);
            }
        });
    });
}

// Scroll-triggered Animations
function initScrollAnimations() {
    // Select all elements that should have scroll animations
    const animatedElements = document.querySelectorAll('.skill-item, .portfolio-item, .stat-item');

    // Create an Intersection Observer to detect when elements come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            // Check if the element is visible in the viewport
            if (entry.isIntersecting) {
                // Add a staggered delay based on the element's index for a cascading effect
                setTimeout(() => {
                    // Make the element fully visible
                    entry.target.style.opacity = '1';
                    // Reset the transform to its original position (animate from translateY(50px) to 0)
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100); // Each element animates 100ms after the previous one

                // Stop observing this element once it has been animated
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 }); // Trigger when 10% of the element is visible

    // Initialize each element with starting animation styles
    animatedElements.forEach(element => {
        // Start with the element hidden
        element.style.opacity = '0';
        // Position the element 50px below its final position
        element.style.transform = 'translateY(50px)';
        // Set smooth transition for the animation
        element.style.transition = 'all 0.6s ease';
        // Start observing the element for viewport intersection
        observer.observe(element);
    });
}

// Performance optimization - Throttled scroll events
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(() => {
    // Existing scroll functionality
}, 16)); // ~60fps


// Ripple Effect for Buttons
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll('.btn, .filter-btn');

    buttons.forEach(button => {
        button.addEventListener('click', function (e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple-effect');

            this.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Update the ripple effect for the combined element
document.addEventListener("DOMContentLoaded", () => {
    const combinedButton = document.querySelector('.go-scroll-combined');

    if (combinedButton) {
        combinedButton.addEventListener('click', function (e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple-effect');

            this.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);

            // Scroll to next section (you can customize this behavior)
            const nextSection = document.getElementById('Products');
            if (nextSection) {
                nextSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
});


// End Animation for Section










// Enhanced Error Handling
window.addEventListener('error', (e) => {
    console.error('JavaScript Error:', e.error);
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled Promise Rejection:', e.reason);
});

// Initialize all enhancements when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
    console.log('Creative Axis website loaded successfully!');
    createParticles();
    animateSkills();
    initPortfolioFilter();
    initTestimonials();

    animateCounters();
    enhanceContactForm();
});

// Service Worker for Creative Axis Website
// Cache name and version
const CACHE_NAME = 'creative-axis-v1';
const urlsToCache = [
    '/',
    '/styles.css',
    '/mr.css',
    '/script.js',
    '/img/LogoW.png',
    '/img/LogoWW.png',
    '/img/LogoB.png',
    '/img/LogoA.png',
    '/img/3d W.png',
    '/img/v W.png',
    '/img/d W.png',
    '/img/web W.png',
    '/media/New logo animation.mp4',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
];

// Install event - cache resources
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
            .catch((error) => {
                console.log('Cache installation failed:', error);
            })
    );
});

// Fetch event - serve cached content when offline
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                // Return cached version or fetch from network
                if (response) {
                    return response;
                }

                return fetch(event.request).then((response) => {
                    // Check if valid response
                    if (!response || response.status !== 200 || response.type !== 'basic') {
                        return response;
                    }

                    // Clone the response
                    const responseToCache = response.clone();

                    caches.open(CACHE_NAME)
                        .then((cache) => {
                            cache.put(event.request, responseToCache);
                        });

                    return response;
                });
            })
            .catch(() => {
                // Return offline page or fallback
                if (event.request.destination === 'document') {
                    return caches.match('/offline.html');
                }
            })
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// Background sync for form submissions
self.addEventListener('sync', (event) => {
    if (event.tag === 'contact-form') {
        event.waitUntil(syncContactForm());
    }
});

// Function to handle offline form submissions
function syncContactForm() {
    // Get stored form data from IndexedDB
    return getStoredFormData().then((formData) => {
        if (formData.length > 0) {
            return Promise.all(
                formData.map((data) => {
                    return fetch('/api/contact', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(data)
                    }).then(() => {
                        // Remove from storage after successful submission
                        removeStoredFormData(data.id);
                    });
                })
            );
        }
    });
}

// Helper function to get stored form data
function getStoredFormData() {
    return new Promise((resolve) => {
        // In a real implementation, you'd use IndexedDB
        resolve([]);
    });
}

// Helper function to remove stored form data
function removeStoredFormData(id) {
    // In a real implementation, you'd remove from IndexedDB
    console.log('Removed form data:', id);
}

// Push notification handling
self.addEventListener('push', (event) => {
    const options = {
        body: event.data ? event.data.text() : 'New update from Creative Axis!',
        icon: '/img/LogoW.png',
        badge: '/img/LogoW.png',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
        },
        actions: [
            {
                action: 'explore',
                title: 'Explore',
                icon: '/img/LogoW.png'
            },
            {
                action: 'close',
                title: 'Close',
                icon: '/img/LogoW.png'
            }
        ]
    };

    event.waitUntil(
        self.registration.showNotification('Creative Axis', options)
    );
});

// Notification click handling
self.addEventListener('notificationclick', (event) => {
    console.log('Notification click received.');

    event.notification.close();

    if (event.action === 'explore') {
        event.waitUntil(
            clients.openWindow('/')
        );
    }
});



