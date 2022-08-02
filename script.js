
// Navigation Toggle 

const navToggle = document.getElementById("nav-toggle");
const primaryNav = document.getElementById("primary-navigation");


navToggle.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute("data-visible");

    if (visibility === "false") {
        primaryNav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
       
    } else {
        primaryNav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
    }
})

    navToggle.onclick = function(){
        navToggle.classList.toggle('active')
    }