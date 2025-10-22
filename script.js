document.addEventListener('DOMContentLoaded', () => {
    // KPI counters animation
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'), 10);
        let count = 0;
        const increment = Math.ceil(target / 100);
        const updateCount = () => {
            if (count < target) {
                count += increment;
                counter.textContent = Math.min(count, target);
                requestAnimationFrame(updateCount);
            } else {
                counter.textContent = target;
            }
        };
        updateCount();
    });

    // Dark mode toggle
    const modeToggle = document.getElementById('modeToggle');
    modeToggle.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
    });

    // Fetch projects from GitHub API
    const projectsContainer = document.getElementById('projects-container');
    fetch('https://api.github.com/users/najsefoster1/repos?sort=updated&per_page=6')
        .then(response => response.json())
        .then(repos => {
            repos.forEach(repo => {
                const card = document.createElement('div');
                card.className = 'project-card';
                const description = repo.description ? repo.description : 'No description provided.';
                card.innerHTML = `
                    <h3>${repo.name}</h3>
                    <p>${description}</p>
                    <p><strong>Stars:</strong> ${repo.stargazers_count}</p>
                    <a href="${repo.html_url}" target="_blank">View Code</a>
                `;
                projectsContainer.appendChild(card);
            });
        })
        .catch(() => {
            // Fallback: show static example projects if API fails
            const examples = [
                {
                    title: 'Factory InfraOps Dashboard',
                    description: 'A dashboard built with SharePoint, Power Automate and SQL to monitor factory infrastructure operations.',
                    url: 'https://github.com/najsefoster1'
                },
                {
                    title: 'Knowledge‑AI Strategy Project',
                    description: 'An AI strategy framework using Python and Machine Learning to prepare knowledge assets for AI readiness.',
                    url: 'https://github.com/najsefoster1'
                },
                {
                    title: 'NajsePulse',
                    description: 'A predictive model for insurance analytics using machine learning techniques.',
                    url: 'https://github.com/najsefoster1'
                }
            ];
            examples.forEach(project => {
                const card = document.createElement('div');
                card.className = 'project-card';
                card.innerHTML = `
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <a href="${project.url}" target="_blank">View Code</a>
                `;
                projectsContainer.appendChild(card);
            });
        });

    // Contact form submission via mailto
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        const subject = encodeURIComponent('Portfolio Contact from ' + name);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
        window.location.href = `mailto:hirenajsefoster@outlook.com?subject=${subject}&body=${body}`;
        // Optionally clear the form fields
        contactForm.reset();
    });

    // Resume download link
    const resumeLink = document.getElementById('resumeDownload');
    resumeLink.addEventListener('click', (e) => {
        e.preventDefault();
        const resumeData = document.querySelector('.resume-section embed').getAttribute('src');
        const link = document.createElement('a');
        link.href = resumeData;
        link.download = 'Najse_Foster_Resume.pdf';
        link.click();
    });
});