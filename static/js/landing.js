function loadContent(page) {
    document.getElementById('contentFrame').src = page;
}

function scrollToContent() {
    const contentBox = document.getElementById('content-box');
    contentBox.scrollIntoView({ behavior: 'smooth' });
}
