window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) { // You can adjust this value
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', function() {
    navLinks.classList.toggle('open-nav');
    if (navLinks.classList.contains('open-nav')) {
        hamburger.innerHTML = '&times;'; // "X"
    } else {
        hamburger.innerHTML = '&#9776;'; // Hamburger icon
    }
});

navLinks.addEventListener('click', function() {
    navLinks.classList.remove('open-nav');
    hamburger.innerHTML = '&#9776;'; // Hamburger icon
});


window.addEventListener("load", function() {
  const loading = document.getElementById("loading");
  const bodyScroll = document.getElementById("body");
  
  setTimeout(function() {
    bodyScroll.style.overflowY = "scroll";
    loading.style.display = "none";
  }, 1000);
});


document.querySelectorAll('a[href^="#"]').forEach (anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});