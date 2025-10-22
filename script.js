/*
  Portfolio script
  ----------------
  Handles dynamic population of GitHub projects and basic form
  submission. The GitHub section fetches repositories from the
  public API, sorts them by stars to highlight popular work and
  injects the resulting cards into the DOM. The contact form
  constructs a mailto: link so visitors can easily reach out.
*/

document.addEventListener('DOMContentLoaded', () => {
  // Populate projects dynamically from GitHub
  const projectContainer = document.getElementById('projects-container');
  if (projectContainer) {
    fetch('https://api.github.com/users/najsefoster1/repos?per_page=100')
      .then(response => response.json())
      .then(repos => {
        // Sort by stargazers_count descending and take top 6 projects
        const selected = repos
          .sort((a, b) => (b.stargazers_count || 0) - (a.stargazers_count || 0))
          .slice(0, 6)
          .map(repo => ({
            title: repo.name.replace(/-/g, ' '),
            description: repo.description || '',
            tags: repo.topics || [],
            link: repo.html_url
          }));
        projectContainer.innerHTML = '';
        selected.forEach(project => {
          const card = document.createElement('div');
          card.className = 'project-card';
          card.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="tags">${project.tags.map(tag => `<span class="tag">${tag}</span>`).join(' ')}</div>
            <a href="${project.link}" target="_blank">View on GitHub</a>
          `;
          projectContainer.appendChild(card);
        });
      })
      .catch(() => {
        // Fallback content if API fails (e.g. rate limiting)
        const fallback = [
          {
            title: 'Machine Learning For Business Projects',
            description: 'Practical machine learning projects with Python, Power BI, and GPT‑4.',
            tags: ['python', 'power bi', 'ml'],
            link: 'https://github.com/najsefoster1/Machine-Learning-For-Business-Projects'
          },
          {
            title: 'Data Visualization Projects',
            description: 'Interactive data visualizations with Tableau and Python.',
            tags: ['tableau', 'python', 'visualization'],
            link: 'https://github.com/najsefoster1/Data-Visualization-Projects'
          }
        ];
        projectContainer.innerHTML = '';
        fallback.forEach(project => {
          const card = document.createElement('div');
          card.className = 'project-card';
          card.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="tags">${project.tags.map(tag => `<span class="tag">${tag}</span>`).join(' ')}</div>
            <a href="${project.link}" target="_blank">View on GitHub</a>
          `;
          projectContainer.appendChild(card);
        });
      });
  }

  // Contact form submission via mailto link
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', event => {
      event.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      const mailTo = `mailto:najseofoster@gmail.com?subject=Portfolio%20Contact%20from%20${encodeURIComponent(name)}&body=${encodeURIComponent(message + '\n\nFrom: ' + name + ' (' + email + ')')}`;
      window.location.href = mailTo;
    });
  }
});
