document.addEventListener("DOMContentLoaded", () => {
  // Animate hero title letters
  const hero = document.querySelector('.hero-title');
  const text = hero.textContent.trim().split('');
  hero.innerHTML = '';
  
  text.forEach((char, i) => {
    const span = document.createElement('span');
    span.textContent = char === ' ' ? '\u00A0' : char;
    span.classList.add('letter');
    span.style.animationDelay = `${i * 0.1}s`;
    hero.appendChild(span);
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

  // Form submission
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      // Here you would typically send the form data to a server
      alert('Thank you for your message! We will contact you soon.');
      this.reset();
    });
  }

  // Lazy loading for images
  if ('loading' in HTMLImageElement.prototype) {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    lazyImages.forEach(img => {
      img.src = img.dataset.src;
    });
  }

  // Scroll reveal animation
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.cake-item, .service-item, .feature-item');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;
      
      if (elementPosition < screenPosition) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  };

  // Set initial state for animation
  const animatedElements = document.querySelectorAll('.cake-item, .service-item, .feature-item');
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease-out';
  });

  // Run once on load
  animateOnScroll();
  
  // Then on scroll
  window.addEventListener('scroll', animateOnScroll);
});