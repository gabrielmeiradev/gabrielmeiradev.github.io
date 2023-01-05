const loader = document.querySelector("#loader");

document.body.onload = () => {
    loader.style.animation = '1s ease-out 0s 1 loaderFadeOut';
    setTimeout(() => {
        loader.style.display = 'none'
    }, 1000)
}