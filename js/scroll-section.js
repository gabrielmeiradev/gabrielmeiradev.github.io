function getMinDistanceElement(arr, margin) {
    let elements = arr.map(value => ((
        document.querySelector(value).getBoundingClientRect().top + 
        document.querySelector(value).getBoundingClientRect().bottom) / 2) - margin);
    let activeElements = elements.filter(value => value > 0);
    return elements.indexOf(Math.min(...activeElements));
}

const scrollHandlerCards = () => {
    let techCards = [
        '.tech-skill-card.html',
        '.tech-skill-card.css',
        '.tech-skill-card.js',
        '.tech-skill-card.nodejs',
        '.tech-skill-card.php',
        '.tech-skill-card.other'
    ];

    techCards.forEach(techCard => {
        document.querySelector(techCard).classList.remove('highlight');
    })

    document.querySelector(techCards[getMinDistanceElement(techCards, 150)]).classList.add('highlight');
}

let lastElement

const scrollHandlerMenu = () => {
    let menuOptions = [
        '.menu-sobre-mim',
        '.menu-tech-skills',
        '.menu-repositorios-do-github',
    ];

    let sections = [
        '#sobre-mim',
        '#tech-skills',
        '#github-repositories',
    ]

    menuOptions.forEach((menuOption, index) => {
        document.querySelector(menuOption).classList.remove('active');
    })

    if(lastElement && lastElement.classList.contains('menu-repositorios-do-github')){
        lastElement.classList.add('active');
    }
    
    let currentElement = document.querySelector(menuOptions[getMinDistanceElement(sections, 0)]);
    currentElement.classList.add('active')

    lastElement = currentElement;
}

window.addEventListener('scroll', scrollHandlerCards)
window.addEventListener('scroll', scrollHandlerMenu)