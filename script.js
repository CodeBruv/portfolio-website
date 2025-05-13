// script.js
// Hamburger Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    const navbarHeight = document.getElementById('navbar').offsetHeight;
    const targetPosition = targetElement.offsetTop - navbarHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });

    // Close mobile menu after clicking a link
    if (!mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.add('hidden');
    }
  });
});

// Slideshow Functionality
const slideshows = document.querySelectorAll('.slideshow');

slideshows.forEach(slideshow => {
  const images = slideshow.querySelectorAll('img');
  const dotsContainer = slideshow.nextElementSibling;
  const dots = dotsContainer.querySelectorAll('.dot');
  let currentIndex = 0;
  let autoPlayInterval;

  function showImage(index) {
    images.forEach(img => img.classList.add('hidden'));
    images[index].classList.remove('hidden');
    dots.forEach(dot => dot.classList.remove('bg-gold-400'));
    dots[index].classList.add('bg-gold-400');
    currentIndex = index;
  }

  function startAutoPlay() {
    autoPlayInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    }, 3000);
  }

  slideshow.addEventListener('mouseenter', () => {
    clearInterval(autoPlayInterval);
  });

  slideshow.addEventListener('mouseleave', () => {
    startAutoPlay();
  });

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      showImage(index);
    });
  });

  showImage(0);
  startAutoPlay();
});

// Back to Top Button
const backToTopButton = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.classList.remove('hidden');
  } else {
    backToTopButton.classList.add('hidden');
  }
});
backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Automatically Update Copyright Year
const copyrightYear = document.getElementById('copyright-year');
const currentYear = new Date().getFullYear();
copyrightYear.textContent = currentYear;