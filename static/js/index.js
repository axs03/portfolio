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
  if (window.innerWidth <= 768) {
      const header = document.querySelector('header');
      const menuButton = document.querySelector('.hamburger-menu');
      header.classList.toggle('expanded');
      if (header.classList.contains('expanded')) {
          // Set icon to arrow up when menu is open
          menuButton.innerHTML = '<i class="fas fa-chevron-up"></i>';
      } else {
          // Set icon to down arrow when menu is closed
          menuButton.innerHTML = '<i class="fas fa-chevron-down"></i>';
      }
  } else {
      const navbarLinks = document.querySelector('.navbar-links');
      navbarLinks.classList.toggle('active');
  }
}

window.onload = function() {
    Particles.init({
        selector: '#background',
        connectParticles: true,
        maxParticles: 50,
        color: particlecolor,
        sizeVariations: 2
    });

    loadSectionContent('home', './templates/home.html');
    loadSectionContent('projects', './templates/projects.html');
    loadSectionContent('experience', './templates/experience.html');
    loadSectionContent('contact', './templates/contact.html');
};