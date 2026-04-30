// IMAGE SLIDER
let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide(i) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[i].classList.add("active");
}

function nextSlide() {
    index++;
    if (index >= slides.length) index = 0;
    showSlide(index);
}

function prevSlide() {
    index--;
    if (index < 0) index = slides.length - 1;
    showSlide(index);
}

// AUTO SLIDE (every 4 seconds)
setInterval(() => {
    if (slides.length > 0) {
        nextSlide();
    }
}, 4000);


// SMOOTH SCROLL
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function(e) {
        if (this.hash !== "") {
            const target = document.querySelector(this.hash);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        }
    });
});