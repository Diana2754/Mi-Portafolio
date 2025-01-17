


document.addEventListener('DOMContentLoaded', () => {
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    const imagesContainer = document.querySelector('.images-container');
    const figures = Array.from(imagesContainer.children); // Convierte los elementos en un array
    let currentIndex = 0;

    // Función para actualizar la posición del carrusel
    function updateCarousel() {
        const translateX = -currentIndex * 100; // Ajusta el desplazamiento
        imagesContainer.style.transform = `translateX(${translateX}%)`;
    }

    // Función para manejar el clic en la flecha izquierda
    leftArrow.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    // Función para manejar el clic en la flecha derecha
    rightArrow.addEventListener('click', () => {
        if (currentIndex < figures.length - 1) {
            currentIndex++;
            updateCarousel();
        }
    });
});
