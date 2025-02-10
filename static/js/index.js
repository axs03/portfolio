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

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
  }
}

function loadSectionContent(sectionId, url) {
  fetch(url)
    .then(response => response.text())
    .then(html => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const section = document.getElementById(sectionId);
      
      section.innerHTML = doc.body.innerHTML;
      
      const scripts = doc.querySelectorAll('script');
      scripts.forEach(script => {
        const newScript = document.createElement('script');
        if (script.src) {
          newScript.src = script.src;
        } else {
          newScript.textContent = script.textContent;
        }
        section.appendChild(newScript);
      });
    })
    .catch(err => console.error('Error loading content:', err));
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

    loadSectionContent('home', './templates/home.html');
    loadSectionContent('projects', './templates/projects.html');
    loadSectionContent('contact', './templates/contact.html');
};