

document.addEventListener('DOMContentLoaded', () => {
    // Evitar que el menú desaparezca al hacer clic
    const navbar = document.querySelector('.navbar');
    navbar.addEventListener('click', (event) => {
        event.stopPropagation();
    });

    // Agregar desplazamiento suave al hacer clic en los enlaces del menú
    document.querySelectorAll('.nav-list a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault(); // Prevenir el comportamiento por defecto
            const target = document.querySelector(this.getAttribute('href')); // Obtener el destino
            target.scrollIntoView({ behavior: 'smooth' }); // Desplazamiento suave
            alert('¡Navegando a ' + anchor.textContent + '!');
        });
    });

    // Contador de visitas
    let visitCount = localStorage.getItem('visitCount') ? parseInt(localStorage.getItem('visitCount')) : 0;
    visitCount++;
    localStorage.setItem('visitCount', visitCount);
    console.log(`Visitas: ${visitCount}`);

    // Cambio de tema
    const toggleTheme = () => {
        document.body.classList.toggle('dark-theme');
    };
    const themeButton = document.createElement('button');
    themeButton.innerText = 'Cambiar Tema';
    themeButton.onclick = toggleTheme;
    document.body.appendChild(themeButton);

    // Mostrar/Ocultar sección de testimonios
    const testimonialSection = document.querySelector('.testimonios');
    if (testimonialSection) {
        const toggleTestimonialButton = document.createElement('button');
        toggleTestimonialButton.innerText = 'Mostrar/Ocultar Testimonios';
        toggleTestimonialButton.onclick = () => {
            testimonialSection.style.display = testimonialSection.style.display === 'none' ? 'block' : 'none';
        };
        document.body.appendChild(toggleTestimonialButton);
    }

    // Desplazamiento automático a la parte superior
    const backToTopButton = document.getElementById('backToTop');
    if (backToTopButton) {
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Mostrar/Ocultar botón de volver arriba
    window.addEventListener('scroll', () => {
        if (backToTopButton) {
            backToTopButton.style.display = window.scrollY > 300 ? 'block' : 'none';
        }
    });

    // Cambiar el color de fondo al pasar el mouse sobre un botón
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.backgroundColor = '#555';
        });
        button.addEventListener('mouseout', () => {
            button.style.backgroundColor = '';
        });
    });

    // Efecto al pasar el mouse sobre un elemento
    const hoverElement = document.createElement('div');
    hoverElement.innerText = 'Pasa el mouse aquí';
    hoverElement.style.padding = '10px';
    hoverElement.style.border = '1px solid #333';
    hoverElement.style.margin = '10px';
    document.body.appendChild(hoverElement);

    hoverElement.addEventListener('mouseover', () => {
        hoverElement.style.backgroundColor = '#4CAF50';
        console.log('Mouse sobre el elemento');
    });
    hoverElement.addEventListener('mouseout', () => {
        hoverElement.style.backgroundColor = '';
    });

    // Cambiar el tamaño de la fuente al hacer clic en un botón
    const increaseFontButton = document.createElement('button');
    increaseFontButton.innerText = 'Aumentar Tamaño de Fuente';
    increaseFontButton.onclick = () => {
        document.body.style.fontSize = '1.2rem';
    };
    document.body.appendChild(increaseFontButton);

    // Restaura el tamaño de fuente original
    const resetFontButton = document.createElement('button');
    resetFontButton.innerText = 'Restablecer Tamaño de Fuente';
    resetFontButton.onclick = () => {
        document.body.style.fontSize = '';
    };
    document.body.appendChild(resetFontButton);

    // Mostrar un mensaje de bienvenida al cargar la página
    alert('¡Bienvenido al Instituto Franklin Delano Roosevelt!');

    console.log("Página cargada correctamente.");
});