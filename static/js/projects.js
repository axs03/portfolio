async function fetchGitHubProjects() {
    const username = 'axs03';
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    const repos = await response.json();

    const projectsList = document.getElementById('projectsList');
    projectsList.innerHTML = '';

    repos.forEach(repo => {
        const projectBox = document.createElement('div');
        projectBox.className = 'scroll-item';
        projectBox.onclick = () => showDetails(projectBox);

        const projectHeading = document.createElement('h2');
        projectHeading.className = 'project-heading';
        projectHeading.textContent = repo.name;

        const summary = document.createElement('div');
        summary.className = 'summary';
        const summaryText = document.createElement('p');
        summaryText.textContent = repo.description || 'No description available';
        summary.appendChild(summaryText);

        const details = document.createElement('div');
        details.className = 'details';
        const link = document.createElement('p');
        const linkAnchor = document.createElement('a');
        linkAnchor.href = repo.html_url;
        linkAnchor.target = '_blank';
        linkAnchor.textContent = 'Source Code';
        link.appendChild(linkAnchor);
        details.appendChild(link);

        projectBox.appendChild(projectHeading);
        projectBox.appendChild(summary);
        projectBox.appendChild(details);

        projectsList.appendChild(projectBox);
    });
}

function showDetails(element) {
    const detailsPanel = document.getElementById('detailsPanel');
    const allItems = document.querySelectorAll('.scroll-item');

    allItems.forEach(item => {
        item.classList.remove('expanded');
    });

    element.classList.add('expanded');

    const details = element.querySelector('.details')?.innerHTML || '';

    detailsPanel.innerHTML = details;
}

window.onload = fetchGitHubProjects;