document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.carousel');

    carousels.forEach(carousel => {
        let currentSlide = 0;
        const slides = carousel.querySelectorAll('.carousel-images img');
        const prevButton = carousel.querySelector('.prev');
        const nextButton = carousel.querySelector('.next');

        function showSlide(index) {
            console.log(`Showing slide index: ${index}`);
            if (index >= slides.length) {
                currentSlide = 0;
            } else if (index < 0) {
                currentSlide = slides.length - 1;
            } else {
                currentSlide = index;
            }
            slides.forEach((slide, i) => {
                slide.style.display = (i === currentSlide) ? 'block' : 'none';
            });
            console.log(`Current slide: ${currentSlide}`);
        }

        function nextSlide() {
            showSlide(currentSlide + 1);
        }

        function prevSlide() {
            showSlide(currentSlide - 1);
        }

        prevButton.addEventListener('click', prevSlide);
        nextButton.addEventListener('click', nextSlide);

        showSlide(currentSlide);
    });
});