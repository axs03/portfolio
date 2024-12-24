function loadContent(url) {
    var iframe = document.getElementById('contentFrame');
    var placeholder = document.getElementById('placeholder');
    iframe.src = url;
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
    var windowHeight = window.innerHeight;
    var totalHeight = document.body.scrollHeight - windowHeight;
    var scrollPercentage = scrollPosition / totalHeight;

    var backgroundColor = `rgb(${Math.floor(17 + 238 * scrollPercentage)}, ${Math.floor(19 + 237 * scrollPercentage)}, ${Math.floor(22 + 234 * scrollPercentage)})`;
    var particleColor = scrollPercentage > 0.5 ? '#ffffff' : '#5f82ed';

    document.querySelector('.background').style.backgroundColor = backgroundColor;
    particlesJS.particles.color.value = particleColor;
    particlesJS.fn.particlesRefresh();
});

window.onload = function() {
    Particles.init({
        selector: '.background',
        connectParticles: true,
        maxParticles: 200,
        color: '#5f82ed',
        sizeVariations: 5
    });
};