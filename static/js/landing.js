var currentPageUrl = ''; // glob

function loadContent(url) {
    var iframe = document.getElementById('contentFrame');
    var placeholder = document.getElementById('placeholder');
    iframe.src = url;
    currentPageUrl = url; // curr url
    iframe.onload = function() {
        placeholder.style.display = 'none';
        iframe.style.display = 'block';
    };
}

function scrollToContent() {
    document.getElementById('content-box').scrollIntoView({ behavior: 'smooth' });
}


window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var windowHeight   = window.innerHeight;
    var totalHeight    = document.body.scrollHeight - windowHeight;
    var scrollPercent  = scrollPosition / totalHeight;

    var backgroundColor, primaryParticleColor, secondaryParticleColor;

    // normal blue to black
    backgroundColor = `rgb(
        ${Math.floor(0 + 30 * scrollPercent)},
        ${Math.floor(0 + 30 * scrollPercent)},
        ${Math.floor(0 + 30 * scrollPercent)}
    )`;

    primaryParticleColor = '#5f82ed';

    if (currentPageUrl.includes('projects.html')) {
        secondaryParticleColor = '#ffffff'; // white

    } else if (currentPageUrl.includes('contact.html')) {
        secondaryParticleColor = '#ffffff'; // white

    } else if (currentPageUrl.includes('resume.html')) {
        secondaryParticleColor = '#ffffff'; // white

    } else {
        return; // nothing present
    }

    // particle color
    var particleColor = scrollPercent > 0.5 ? secondaryParticleColor : primaryParticleColor;

    document.querySelector('.background').style.backgroundColor = backgroundColor;
    particlesJS.particles.color.value = particleColor;
    particlesJS.fn.particlesRefresh();
});

window.onload = function() {
    Particles.init({
        selector: '.background',
        connectParticles: true,
        maxParticles: 80,
        color: '#0086da',
        sizeVariations: 5
    });
};
