// JavaScript for auto-slide functionality
const slides = document.querySelectorAll('.slider img');
let currentIndex = 0;
const totalSlides = slides.length;

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(-${currentIndex * 100}%)`;
    });
}

// Set interval for auto slide
const interval = setInterval(nextSlide, 3000); // Change the interval duration as needed
