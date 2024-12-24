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