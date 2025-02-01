var currentPageUrl = ''; // glob
const particlecolor = '#ffffff'; // yellowish

function loadContent(url) {
    var iframe = document.getElementById('contentFrame');
    iframe.style.opacity = 0; // Start fade-out
    setTimeout(function() {
        iframe.src = url;
        currentPageUrl = url; // curr url
        iframe.onload = function() {
            iframe.style.display = 'block';
            iframe.style.opacity = 1;
        };
    }, 200);
}

// for hamburger menu
function toggleMenu() {
    // For mobile screens, toggle the 'expanded' class on the header
    if (window.innerWidth <= 768) {
      document.querySelector('header').classList.toggle('expanded');
    } else {

      const navbarLinks = document.querySelector('.navbar-links');
      navbarLinks.classList.toggle('active');
    }
  }

window.onload = function() {
    Particles.init({
        selector: '#background',
        connectParticles: true,
        maxParticles: 70,
        color: particlecolor,
        sizeVariations: 2
    });
};