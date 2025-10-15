function getProjectCard(imgSrc, title, description, is_animated, badges, github_link, demo_link, idx, horizontal) {
    return `<div class="project-card" data-project-idx="${idx}">
                <div class="project-card-image ${is_animated ? 'animated' : ''} ${horizontal ? 'horizontal' : ''}">
                    <img src="${imgSrc}" alt="${title}">
                </div>
                <div class="project-card-info">
                    <h2 class="project-card-title">${title}</h2>
                    <p class="project-card-desc">${description}</p>
                    <div class="project-card-links">
                        <a href="${github_link}" target="_blank">
                            <i class="fa-brands fa-github"></i> View on GitHub
                        </a>
                        ${demo_link ? `
                        <a href="${demo_link}" target="_blank">
                            <i class="fa-solid fa-arrow-up-right-from-square"></i> Live Demo
                        </a>
                        ` : ''}
                    </div>
                    <div class="project-card-tech">
                        ${badges.map(badge => `<span class="tech-badge ${badge.toLowerCase().replace(/[\s.]/g, "-")}">${badge}</span>`).join('')}
                    </div>
                </div>
            </div>`;
}

const projects = [
    {
        imgSrc: "/images/projects/pi1.png",
        title: "GB Academia de Música",
        description: "A music school website built with HTML, CSS, and JavaScript. It features a modern design and showcases the school's courses, contact information, and interactive quizzes.",
        github_link: "https://github.com/riqalves/gb-academia",
        demo_link: "https://fatec-pi-woad.vercel.app/",
        is_animated: true,
        badges: ["HTML", "CSS", "JavaScript"],
        longDescription: "This project is a comprehensive website for GB Academia de Música, a music school. The site is built using HTML, CSS, and JavaScript, ensuring a responsive and user-friendly experience. It features a modern design with smooth animations and interactive elements. Key sections include an overview of the school's courses, detailed contact information, and engaging quizzes to test musical knowledge. The website is optimized for both desktop and mobile devices, providing easy access to information for prospective students and parents.",
        whatIdid: "I was responsible for the entire front-end development of the website, including designing the layout, implementing responsive design techniques, and adding interactive features using JavaScript. I collaborated closely with the client to ensure that the website met their needs and effectively represented their brand."
    },
    {
        imgSrc: "/images/projects/pi2.png",
        title: "Michele Cortinas",
        description: "It's a website for making custom orders with custom colors and dimensions.",
        github_link: "https://github.com/Gabriel-barbos/Michele-Cortinas",
        longDescription: "Michele Cortinas is a custom curtain ordering website that allows users to select personalized colors and dimensions for their curtains. The site is designed to provide an intuitive and seamless user experience, making it easy for customers to place orders. Built with HTML, CSS, and JavaScript, the website features a clean layout and responsive design, ensuring accessibility across various devices. Key functionalities include a color picker, dimension input fields, and a straightforward checkout process. This project showcases my ability to create functional and visually appealing web applications.",
        is_animated: false,
        badges: ["HTML", "CSS", "JavaScript"],
        whatIdid: "I developed the entire front-end of the website, focusing on creating a user-friendly interface that allows customers to easily customize their orders. I implemented responsive design principles to ensure the site looks great on all devices and integrated interactive elements using JavaScript to enhance the user experience."
    },
    {
        imgSrc: "/images/projects/pi3.png",
        title: "Devhub",
        description: "A social network for developers to connect, share projects, and collaborate.",
        github_link: "https://github.com/Gabriel-barbos/Devhub",
        is_animated: false,
        badges: ["Next.js", "CSS", "JavaScript"],
        longDescription: "Devhub is a social network platform designed specifically for developers. It allows users to create profiles, share their projects, post updates, and connect with other developers. The platform encourages collaboration and knowledge sharing through features like project showcases, discussion threads, and messaging. Built with HTML, CSS, and JavaScript, Devhub aims to foster a vibrant community where developers can grow their network, find collaborators, and stay updated with the latest in tech.",
        whatIdid: "I was responsible for the front-end development of the Devhub platform, focusing on creating a seamless user experience. I implemented responsive design principles to ensure the site is accessible on all devices and integrated various interactive features using JavaScript. Additionally, I collaborated with the back-end team to ensure smooth data flow and functionality."
    },
    {
        imgSrc: "/images/projects/pi4.png",
        title: "Fatecoleta",
        description: "A platform that helps users find and register collection points (pontos de coleta) using geolocation.",
        github_link: "https://github.com/gabrielmeiradev/fatecoleta",
        demo_link: "https://fatecoleta.vercel.app/",
        is_animated: true,
        badges: ["Next.js", "Leaflet", "JavaScript"],
        longDescription: "Fatecoleta is a web platform designed to facilitate the discovery and registration of collection points (pontos de coleta) for recyclable materials. Using geolocation, users can easily find nearby collection points on an interactive map powered by Leaflet. The platform allows organizations and individuals to register new points, providing details such as accepted materials, opening hours, and contact information. Built with Next.js and JavaScript, Fatecoleta aims to promote sustainability and community engagement by making recycling more accessible and organized.",
        whatIdid: "I developed the front-end of the Fatecoleta platform, focusing on creating an intuitive user interface that allows users to easily find and register collection points. I implemented geolocation features using the Leaflet library and ensured the site is responsive and accessible on all devices."
    },
    {
        imgSrc: "/images/projects/pi5.png",
        title: "CampusFace",
        description: "A solution that democratizes access to smart access control technology.",
        github_link: "https://github.com/gabrielmeiradev/CampusFace",
        is_animated: true,
        horizontal: true,
        badges: ["IoT", "React Native", "Node.js"],
        longDescription: "CampusFace is an innovative solution that aims to democratize access to smart access control technology for companies, condominiums, and residences. Using IoT devices and an intuitive web interface, the system allows you to manage entry and exit permissions securely, efficiently, and affordably. The project was developed with a focus on low cost, easy installation, and integration with different types of electronic locks, making smart access control technology available to everyone.",
        whatIdid: "I worked on the development of the CampusFace platform, focusing on both the front-end and back-end aspects. I implemented the user interface using React Native, ensuring a smooth and responsive experience on mobile devices. On the back-end, I developed the API using Node.js, allowing for secure communication between the app and the IoT devices."

    },

];

const modalHtml = `
<div id="project-modal" class="project-modal" style="display:none;">
  <div class="project-modal-backdrop">
  <article class="project-modal-content">
    <button class="project-modal-close" aria-label="Close">&times;</button>
    <div class="project-modal-body"></div>
  </article>
  </div>
</div>`;
document.body.insertAdjacentHTML('beforeend', modalHtml);

const projectsContainer = document.querySelector('.projects-cards');
projectsContainer.innerHTML = projects.map((project, idx) => getProjectCard(
    project.imgSrc,
    project.title,
    project.description,
    project.is_animated,
    project.badges,
    project.github_link,
    project.demo_link,
    idx,
    project.horizontal
)).join('');

// Modal logic
const modal = document.getElementById('project-modal');
const modalBody = modal.querySelector('.project-modal-body');
const closeModalBtn = modal.querySelector('.project-modal-close');
const backdrop = modal.querySelector('.project-modal-backdrop');

function getProjectModalContent(project) {
    return `
        <img src="${project.imgSrc}" alt="${project.title}" style="width:100%;border-radius:12px;margin-bottom:1.5rem;max-height:260px;object-fit:cover;">
        <h2 style="color:#ff4f9a;margin-bottom:0.7rem;">${project.title}</h2>
        <p style="color:#e5e5e5;font-size:1.1rem;line-height:1.7;margin-bottom:1.5rem;">${project.description}</p>
            <article class="project-modal-article">
                <div class="project-modal-article-header" style="display:flex;gap:2.5rem;align-items:flex-start;flex-wrap:wrap;">
                    <img src="${project.imgSrc}" alt="${project.title}" style="width:340px;max-width:100%;border-radius:16px;box-shadow:0 4px 24px rgba(0,0,0,0.13);object-fit:cover;max-height:340px;">
                    <div style="flex:1;min-width:220px;">
                        <h2 style="color:#ff4f9a;font-size:2rem;margin-bottom:0.7rem;">${project.title}</h2>
                        <div style="display:flex;gap:0.5rem;flex-wrap:wrap;margin-bottom:1.2rem;">
                            ${project.badges.map(badge => `<span class='tech-badge ${badge.toLowerCase()}'>${badge}</span>`).join('')}
                        </div>
                        <div style="margin-bottom:1.2rem;">
                            <a href="${project.github_link}" target="_blank" style="color:#ff4f9a;font-weight:500;margin-right:1.2rem;text-decoration:none;border-bottom:1.5px solid #ff4f9a;"> <i class='fa-brands fa-github'></i> View on GitHub</a>
                            ${project.demo_link ? `<a href="${project.demo_link}" target="_blank" style="color:#ff4f9a;font-weight:500;text-decoration:none;border-bottom:1.5px solid #ff4f9a;"><i class='fa-solid fa-arrow-up-right-from-square'></i> Live Demo</a>` : ''}
                        </div>
                    </div>
                </div>
                <div class="project-modal-article-body" style="margin-top:2.2rem;">
                    <p style="color:#e5e5e5;font-size:1.15rem;line-height:1.8;">${project.longDescription}</p>
                </div>
                <div class="project-modal-article-footer" style="margin-top:2.2rem;">
                    <h3 style="color:#ff4f9a;font-size:1.5rem;margin-bottom:0.7rem;">What I did</h3>
                    <p style="color:#e5e5e5;font-size:1.1rem;line-height:1.7;">${project.whatIdid}</p>
                </div>
            </article>
    `;
}

projectsContainer.addEventListener('click', function (e) {
    let card = e.target.closest('.project-card');
    if (!card) return;
    const idx = card.getAttribute('data-project-idx');
    const project = projects[idx];
    modalBody.innerHTML = getProjectModalContent(project);
    modal.style.display = 'block';
    setTimeout(() => { modal.classList.add('open'); }, 10);
});

function closeModal() {
    modal.classList.remove('open');
    setTimeout(() => { modal.style.display = 'none'; }, 180);
}

closeModalBtn.addEventListener('click', closeModal);
backdrop.addEventListener('click', closeModal);
document.addEventListener('keydown', function (e) {
    if (modal.style.display === 'block' && (e.key === 'Escape' || e.key === 'Esc')) closeModal();
});