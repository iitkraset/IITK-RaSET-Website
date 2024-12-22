const hamburger = document.querySelector(".hamburg");
const navMenu = document.querySelector(".navMenu");
hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active");
	navMenu.classList.toggle("active");
})

document.querySelectorAll(".navLink").forEach(n => n.addEventListener("click", () =>{
	hamburger.classList.remove("active");
	navMenu.classList.remove("active");
}))
   
ScrollReveal({
    reset:false,
    distance: '60px',
    duration:2500,
    delay:100
    });

    ScrollReveal().reveal('.wrapper',{delay:100,origin:'bottom'});
    