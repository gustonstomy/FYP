// JavaScript for auto-slide functionality
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;
const totalSlides = slides.length;
const slideWidth = slides[0].clientWidth;

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

    // Reset index to 0 when it reaches the last slide
    if (currentIndex === totalSlides - 1) {
        setTimeout(() => {
            currentIndex = 0;
            slider.style.transition = 'none';
            slider.style.transform = `translateX(0)`;
            setTimeout(() => {
                slider.style.transition = '';
            });
        }, 500);
    }
}

// Set interval for auto slide
const interval = setInterval(nextSlide, 3000); // Change the interval duration as needed
