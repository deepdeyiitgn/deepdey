// =======================
// Mobile Navbar Toggle
// =======================
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.navbar ul');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// =======================
// Smooth Scroll for Navigation
// =======================
const links = document.querySelectorAll('.navbar ul li a');

links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    if(targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = targetId; // fallback for different pages
    }

    // Close mobile menu after click
    if(navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
    }
  });
});

// =======================
// Optional: Button Hover Animation
// =======================
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
  button.addEventListener('mouseenter', () => {
    button.style.transform = 'scale(1.05)';
  });
  button.addEventListener('mouseleave', () => {
    button.style.transform = 'scale(1)';
  });
});
