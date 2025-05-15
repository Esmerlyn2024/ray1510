
let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.carousel-images img');
    const totalSlides = slides.length;

    currentSlide += direction;

    // Asegurar que el índice esté dentro del rango
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }

    // Mover el carrusel
    const carouselWidth = 100; // Asume que cada slide ocupa el 100% del ancho
    document.querySelector('.carousel-images').style.transform = `translateX(-${currentSlide * carouselWidth}%)`;
}

// Mover automáticamente cada 4 segundos
setInterval(() => {
    moveSlide(1);
}, 4000);
