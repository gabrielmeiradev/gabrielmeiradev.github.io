const reposElement = document.querySelector('#repositories');

async function getRepos(username) {
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=created&direction=desc`);
    return response.json();
}

function appendRepo(title, desc, link) {
    let container = document.createElement('div');
    container.classList.add('repository',  'interactable');
    container.dataset.type = 'link'
    if(desc){
        container.innerHTML = 
        `<div class="col" data-type="link">
            <a class="repository-title" href="${link}"><i class="fa-brands fa-github"></i><h2>${title}</h2></a>
            <p class="repository-desc">${desc}</p>
        </div>
        <div class="col repository-owner-container">
            <img src="https://avatars.githubusercontent.com/u/23419361?v=4" class="repository-owner">
        </div>
        `
    } else {
        container.innerHTML = 
        `<div class="col interactable" data-type="link">
            <a class="repository-title" href="${link}"><i class="fa-brands fa-github"></i><h2>${title}</h2></a>
        </div>
        <div class="col repository-owner-container">
            <img src="https://avatars.githubusercontent.com/u/23419361?v=4" class="repository-owner">
        </div>
        `
    }

    container.onclick = () => {
        document.location = link;
    }
    reposElement.appendChild(container)
}

function cleanRepos() {
    reposElement.innerHTML = '';
}

const projectsQuantityIndicator = document.querySelector('#projects-qnt-indicator');

let repos = [];

getRepos('gabrielmeiradev').then((repositories) => {
    repositories.forEach(repo => {
        repos.push(repo)
    })
    loadRepos();
});

function loadRepos(query){
    cleanRepos();

    reposFiltered = query ? repos.filter((repo) => 
        repo.
        name.
        toLowerCase().
        includes(query.toLowerCase())
        || 
        repo.description
        && 
        repo
        .description
        .toLowerCase()
        .includes(query.toLowerCase())) 
        : repos;
    projectsQuantityIndicator.innerText = reposFiltered.length;

    for(let repo of reposFiltered){
        if(repo.name == 'gabrielmeiradev.github.io') repo.name = 'Esse portfólio'
        appendRepo(repo.name, repo.description, repo.html_url)                
    }
}

const searchBar = document.querySelector('#github-search-bar');

searchBar.addEventListener('input', (e) => {
    loadRepos(e.target.value);
})

