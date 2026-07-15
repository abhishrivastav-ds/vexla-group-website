const slides = document.querySelectorAll(".slide");

let index = 0;

setInterval(() => {

slides[index].classList.remove("active");

index++;

if(index >= slides.length){

index = 0;

}

slides[index].classList.add("active");

},3000);

// Scroll Reveal Animation
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const revealTop = element.getBoundingClientRect().top;
        const revealPoint = 100;

        if (revealTop < windowHeight - revealPoint) {
            element.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();