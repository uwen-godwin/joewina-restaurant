document.addEventListener('DOMContentLoaded', function() {
  // Navigation Menu Toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  if (hamburger) {
      hamburger.addEventListener('click', function() {
          hamburger.classList.toggle('active');
          navLinks.classList.toggle('active');
      });
  }
  
  // Close menu when clicking a nav link on mobile
  const navItems = document.querySelectorAll('.nav-links a');
  navItems.forEach(item => {
      item.addEventListener('click', function() {
          if (window.innerWidth <= 768) {
              hamburger.classList.remove('active');
              navLinks.classList.remove('active');
          }
          
          // Update active nav link
          navItems.forEach(navItem => navItem.classList.remove('active'));
          this.classList.add('active');
      });
  });
  
  // Section Navigation
  const sections = document.querySelectorAll('.section');
  
  function navigateToSection(sectionId) {
      // Hide all sections
      sections.forEach(section => {
          section.classList.remove('active');
      });
      
      // Show selected section
      const targetSection = document.getElementById(sectionId);
      if (targetSection) {
          targetSection.classList.add('active');
          
          // Update URL hash without scrolling
          history.pushState(null, null, `#${sectionId}`);
      }
  }
  
  // Handle navigation clicks
  document.addEventListener('click', function(e) {
      // Check if clicked element is a nav link
      if (e.target.tagName === 'A' && e.target.getAttribute('href') && e.target.getAttribute('href').startsWith('#')) {
          e.preventDefault();
          const sectionId = e.target.getAttribute('href').substring(1);
          navigateToSection(sectionId);
          
          // Update active state in nav
          navItems.forEach(navItem => navItem.classList.remove('active'));
          e.target.classList.add('active');
      }
  });
  
  // Handle initial load based on URL hash
  window.addEventListener('load', function() {
      const initialSection = window.location.hash ? window.location.hash.substring(1) : 'home';
      navigateToSection(initialSection);
      
      // Update active state in nav for initial load
      const activeNavItem = document.querySelector(`.nav-links a[href="#${initialSection}"]`);
      if (activeNavItem) {
          navItems.forEach(navItem => navItem.classList.remove('active'));
          activeNavItem.classList.add('active');
      }
  });
  
  // Menu Category Switching
  const menuCategories = document.querySelectorAll('.menu-category');
  const menuCategoryItems = document.querySelectorAll('.menu-category-items');
  
  menuCategories.forEach(category => {
      category.addEventListener('click', function() {
          // Update active category button
          menuCategories.forEach(item => item.classList.remove('active'));
          this.classList.add('active');
          
          // Show corresponding category items
          const categoryId = this.getAttribute('data-category');
          menuCategoryItems.forEach(item => item.classList.remove('active'));
          document.getElementById(categoryId).classList.add('active');
      });
  });
  
  // Contact Form Submission
  const contactForm = document.getElementById('contact-form');
  const formMessage = document.getElementById('form-message');
  
  if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
          e.preventDefault();
          
          // Get form data
          const name = document.getElementById('name').value;
          const email = document.getElementById('email').value;
          const phone = document.getElementById('phone').value;
          const message = document.getElementById('message').value;
          
          // Basic validation
          if (!name || !email || !message) {
              showFormMessage('Please fill in all required fields.', 'error');
              return;
          }
          
          // Email validation
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(email)) {
              showFormMessage('Please enter a valid email address.', 'error');
              return;
          }
          
          // Simulate form submission (in a real website, this would be an AJAX request to a server)
          setTimeout(() => {
              showFormMessage('Thank you for your message! We will get back to you soon.', 'success');
              contactForm.reset();
          }, 1000);
      });
  }
  
  // Display form submission message
  function showFormMessage(text, type) {
      formMessage.textContent = text;
      formMessage.className = 'form-message';
      formMessage.classList.add(type);
      
      // Hide message after 5 seconds
      setTimeout(() => {
          formMessage.textContent = '';
          formMessage.className = 'form-message';
      }, 5000);
  }
  
  // Smooth scrolling effect for buttons linking to other sections
  const actionButtons = document.querySelectorAll('a.btn[href^="#"]');
  actionButtons.forEach(button => {
      button.addEventListener('click', function(e) {
          e.preventDefault();
          const sectionId = this.getAttribute('href').substring(1);
          navigateToSection(sectionId);
          
          // Update active nav item
          const correspondingNavItem = document.querySelector(`.nav-links a[href="#${sectionId}"]`);
          if (correspondingNavItem) {
              navItems.forEach(navItem => navItem.classList.remove('active'));
              correspondingNavItem.classList.add('active');
          }
      });
  });
  
  // Animation on scroll
  function animateOnScroll() {
      const elements = document.querySelectorAll('.feature, .menu-item, .contact-item');
      
      elements.forEach(element => {
          const elementPosition = element.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;
          
          // If element is in viewport
          if (elementPosition < windowHeight - 100) {
              element.style.animation = 'fadeIn 1s forwards';
          }
      });
  }
  
  // Initial animation check and on scroll
  animateOnScroll();
  window.addEventListener('scroll', animateOnScroll);
  
  // Responsive image handling
  function setPlaceholderImages() {
      const placeholders = document.querySelectorAll('.placeholder-image');
      placeholders.forEach(placeholder => {
          // In a real website, you would replace these with actual images
          placeholder.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
      });
  }
  
  setPlaceholderImages();
});
