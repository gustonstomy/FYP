
// <!-- ============================Image Slider Section================================== -->
document.addEventListener('DOMContentLoaded', function () {
    
  let currentSlide = 0;
  const slides = document.querySelectorAll('.img-slider .slider');
  const totalSlides = slides.length;
  let transitioning = false;

  function nextSlide() {
    if (transitioning) return;
    transitioning = true;

    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % totalSlides;
    slides[currentSlide].classList.add('active');

    setTimeout(() => {
      transitioning = false;
    }, 500); // Match this to the CSS transition duration
  }

  setInterval(nextSlide, 3000);
});
