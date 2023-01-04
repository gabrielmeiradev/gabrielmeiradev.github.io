const reposElement = document.querySelector('#repositories');

async function getRepos(username) {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    return response.json();
}

function appendRepo(title, desc, link) {
    let container = document.createElement('div');
    container.classList.add('repository');
    container.dataset.type = 'link'
    if(desc){
        container.innerHTML = 
        `<div class="col">
            <a class="repository-title" href="${link}"><i class="fa-brands fa-github"></i><h2>${title}</h2></a>
            <p class="repository-desc">${desc}</p>
        </div>
        <div class="col repository-owner-container">
            <img src="https://avatars.githubusercontent.com/u/23419361?v=4" class="repository-owner">
        </div>
        `
    } else {
        container.innerHTML = 
        `<div class="col">
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

function loadRepos(){
    getRepos('gabrielmeiradev').then((repositories) => {
        for(let repo of repositories){
            appendRepo(repo.name, repo.description, repo.html_url)                
        }
    }).catch(err => console.log(err))
}

loadRepos();