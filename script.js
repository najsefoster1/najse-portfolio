document.addEventListener('DOMContentLoaded', () => {
  // Dark mode toggle
  const themeSwitch = document.getElementById('theme-switch');
  if (themeSwitch) {
    themeSwitch.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
    });
  }

  // Education toggle
  const toggleBtn = document.getElementById('toggle-education');
  const educationContent = document.getElementById('education-content');
  if (toggleBtn && educationContent) {
    toggleBtn.addEventListener('click', () => {
      educationContent.classList.toggle('active');
      toggleBtn.textContent = educationContent.classList.contains('active')
        ? '✣ Hide Education'
        : '✣ View Education';
    });
  }

  // Fetch GitHub projects
  const projectsContainer = document.getElementById('projects-container');
  const repoNames = ['Machine-Learning-For-Business-Projects', 'Data-Visualization-Projects'];
  fetch('https://api.github.com/users/najsefoster1/repos?per_page=100')
    .then(response => response.json())
    .then(data => {
      const projects = data.filter(repo => repoNames.includes(repo.name))
        .map(repo => ({
          title: repo.name.replace(/-/g, ' '),
          description: repo.description || '',
          tags: repo.topics || [],
          languages: repo.language ? [repo.language] : [],
          link: repo.html_url
        }));
      if (projectsContainer) {
        projectsContainer.innerHTML = '';
        projects.forEach(project => {
          const card = document.createElement('div');
          card.className = 'project-card';
          card.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <p>${project.languages.join(', ')}</p>
            <div class="tags">${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}</div>
            <a href="${project.link}" target="_blank">View on GitHub</a>
          `;
          projectsContainer.appendChild(card);
        });
      }
    })
    .catch(() => {
      const fallbackProjects = [
        {
          title: 'Machine Learning For Business Projects',
          description: 'Practical machine learning projects with Python, Power BI, and GPT-4.',
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
      if (projectsContainer) {
        projectsContainer.innerHTML = '';
        fallbackProjects.forEach(project => {
          const card = document.createElement('div');
          card.className = 'project-card';
          card.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="tags">${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}</div>
            <a href="${project.link}" target="_blank">View on GitHub</a>
          `;
          projectsContainer.appendChild(card);
        });
      }
    });

  // Contact form submission
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      const mailtoLink = `mailto:najsefoster@gmail.com?subject=Contact%20Submission%20from%20${encodeURIComponent(name)}&body=${encodeURIComponent(message)}`;
      window.location.href = mailtoLink;
    });
  }
});
