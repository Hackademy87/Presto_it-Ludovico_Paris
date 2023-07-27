// gruppo cattura
let navbar = document.querySelector ("#navbar");
let links = document.querySelectorAll(".nav-link");
let logo =  document.querySelector("#logo");
console.dir(logo)
window.addEventListener('scroll', ()=>{
    let scrolled = window.scrollY;

    if(scrolled > 0){
        navbar.classList.add ("navbar-ciao");
        logo.src= `/image/flight2.svg`
        links.forEach(link => {
        link.classList.add ("link-ciao");
    })
    }else{
        navbar.classList.remove ("navbar-ciao");
        logo.src= `/image/flight3.svg`
        links.forEach(link => {
        link.classList.remove ("link-ciao");
    })
    }
})