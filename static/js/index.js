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


window.onload = function() {
    Particles.init({
        selector: '#background',
        connectParticles: true,
        maxParticles: 70,
        color: particlecolor,
        sizeVariations: 2
    });
};