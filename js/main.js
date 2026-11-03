// ===== WealthPath Finance Blog — JavaScript =====

// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', function () {
      mainNav.classList.toggle('open');
    });
  }

  // Newsletter form handling
  const newsletterForm = document.getElementById('newsletterForm');
  const formNote = document.getElementById('formNote');

  if (newsletterForm && formNote) {
    newsletterForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const email = newsletterForm.querySelector('input[type="email"]').value;
      if (email) {
        formNote.textContent = '✅ Thanks for subscribing! Check your inbox to confirm.';
        formNote.style.color = '#4ade80';
        newsletterForm.reset();
      }
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
        if (mainNav) mainNav.classList.remove('open');
      }
    });
  });
});
