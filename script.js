document.addEventListener('DOMContentLoaded', function() {
    // Selecciona todos los elementos con la clase 'fade-in'
    const faders = document.querySelectorAll('.fade-in');
    const scrollLink = document.querySelector('.main__scroll');

    // Configuración para el efecto de aparición
    const appearOptions = {
        threshold: 0.5 // Se activa cuando el 50% del elemento es visible
    };

    // Observador para el efecto de aparición
    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return; // Si no está visible, no hacer nada
            entry.target.classList.add('visible'); // Añadir la clase 'visible'
            appearOnScroll.unobserve(entry.target); // Dejar de observar el elemento
        });
    }, appearOptions);

    // Aplica el efecto de aparición a cada elemento
    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    // Evento de clic para el enlace de la flecha de desplazamiento
    if (scrollLink) {
        scrollLink.addEventListener('click', function(e) {
            e.preventDefault(); // Evita el comportamiento por defecto del enlace
            const targetSection = document.querySelector('#servicios-codigo'); // Sección objetivo

            if (targetSection) {
targetSection.scrollIntoView({
    behavior: 'smooth' // Desplazamiento suave
});
            }
        });
    }
});