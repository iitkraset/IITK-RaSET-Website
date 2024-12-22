ScrollReveal({
    reset:false,
    distance: '60px',
    duration:2500,
    delay:400
    });
    
    ScrollReveal().reveal('.advline',{delay:300,origin:'bottom'});
    ScrollReveal().reveal('.adv-container',{delay:300,origin:'bottom'});
    ScrollReveal().reveal('.headline',{delay:300,origin:'bottom'});
    ScrollReveal().reveal('.head-container',{delay:300,origin:'bottom'});
    ScrollReveal().reveal('.sline',{delay:300,origin:'bottom'});
    ScrollReveal().reveal('.stm-container',{delay:300,origin:'bottom'});
    ScrollReveal().reveal('.jline',{delay:300,origin:'bottom'});
    ScrollReveal().reveal('.jtm-container1',{delay:300,origin:'bottom'});
    ScrollReveal().reveal('.jtm-container2',{delay:300,origin:'bottom'});
    ScrollReveal().reveal('.jtm-container3',{delay:300,origin:'bottom'});
    ScrollReveal().reveal('.jtm-container4',{delay:300,origin:'bottom'});

    ScrollReveal().reveal('.media-icons i',{delay:300,origin:'bottom',interval:80});


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
   