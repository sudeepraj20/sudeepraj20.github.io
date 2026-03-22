 document.addEventListener('DOMContentLoaded', () => {

  // --- Sticky Navbar ---
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.style.boxShadow = '0 4px 10px rgba(0,0,0,0.1)';
      header.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
      header.style.boxShadow = '0 4px 6px rgba(0,0,0,0.05)';
      header.style.background = 'rgba(255, 255, 255, 0.95)';
    }
  });

  // --- Mobile Menu Toggle ---
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // --- Hero Slider ---
  let slides = document.querySelectorAll('.slide');
  let dots = document.querySelectorAll('.dot');
  let currentSlideIndex = 0;
  let slideInterval;

  if (slides.length > 0) {

    const showSlide = (n) => {
      slides.forEach(slide => slide.classList.remove('active'));
      dots.forEach(dot => dot.classList.remove('active'));
      
      slides[n].classList.add('active');
      if(dots.length > 0) dots[n].classList.add('active');
    };

    const nextSlide = () => {
      currentSlideIndex = (currentSlideIndex + 1) % slides.length;
      showSlide(currentSlideIndex);
    };

    slideInterval = setInterval(nextSlide, 5000); // 5 sec per slide

    // Allows user to click dots
    window.currentSlide = function(n) {
      clearInterval(slideInterval);
      currentSlideIndex = n;
      showSlide(currentSlideIndex);
      slideInterval = setInterval(nextSlide, 5000);
    };

    // Initialize first slide properly
    showSlide(currentSlideIndex);
  }
});
