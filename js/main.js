// Main JavaScript for Volodin s.r.o. website

document.addEventListener('DOMContentLoaded', () => {
  // Initialize i18n
  const i18n = new I18n();

  // Language Switcher
  const langButtons = document.querySelectorAll('.lang-switcher__btn');
  langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      i18n.setLanguage(lang);
    });
  });

  // Mobile Menu Toggle
  const burger = document.querySelector('.header__burger');
  const nav = document.querySelector('.header__nav');

  if (burger && nav) {
    burger.addEventListener('click', () => {
      burger.classList.toggle('active');
      nav.classList.toggle('active');
    });

    // Close menu when clicking on a link
    const navLinks = nav.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        burger.classList.remove('active');
        nav.classList.remove('active');
      });
    });
  }

  // Header scroll effect
  const header = document.querySelector('.header');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }

    lastScroll = currentScroll;
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Contact Form Handling with Formspree
  const contactForm = document.getElementById('contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;

      // Show loading state
      submitBtn.disabled = true;
      submitBtn.textContent = i18n.currentLang === 'sk' ? 'Odosielam...' : 'Sending...';

      // Get form data
      const formData = new FormData(contactForm);

      try {
        const response = await fetch(contactForm.action, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        // Remove existing messages
        const existingMessage = contactForm.querySelector('.form-message');
        if (existingMessage) {
          existingMessage.remove();
        }

        // Create message element
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('form-message');

        if (response.ok) {
          messageDiv.classList.add('form-message--success');
          messageDiv.textContent = i18n.getTranslation('contact.success');
          contactForm.reset();
        } else {
          throw new Error('Form submission failed');
        }

        // Insert message at the beginning of the form
        contactForm.insertBefore(messageDiv, contactForm.firstChild);

        // Remove message after 5 seconds
        setTimeout(() => {
          messageDiv.remove();
        }, 5000);

      } catch (error) {
        console.error('Form submission error:', error);

        const messageDiv = document.createElement('div');
        messageDiv.classList.add('form-message', 'form-message--error');
        messageDiv.textContent = i18n.getTranslation('contact.error');

        const existingMessage = contactForm.querySelector('.form-message');
        if (existingMessage) {
          existingMessage.remove();
        }

        contactForm.insertBefore(messageDiv, contactForm.firstChild);
      } finally {
        // Restore button state
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      }
    });
  }

  // Intersection Observer for animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe service cards for animation
  document.querySelectorAll('.service-card').forEach(card => {
    observer.observe(card);
  });
});
