// Efecto de scroll en el header
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
});

// Menú móvil
document.getElementById('menuToggle').addEventListener('click', function() {
    document.getElementById('menu').classList.toggle('active');
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function() {
        document.getElementById('menu').classList.remove('active');
    });
});

// Animación de elementos al hacer scroll
function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        }
    }
}

window.addEventListener('scroll', reveal);
reveal(); // Comprobar en la carga inicial

// Animación de hero content
window.addEventListener('load', function() {
    setTimeout(() => {
        document.querySelectorAll('.fade-in').forEach((element, index) => {
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, 300 * index);
        });
        
        // Nota: Esta línea necesita ajuste ya que no podemos acceder directamente a pseudo-elementos con JS
        // document.querySelector('.hero-content::before').style.transform = 'scaleX(1)';
        // Alternativa usando una clase:
        document.querySelector('.hero-content').classList.add('animated');
    }, 500);
});

// Slider de testimonios
const dots = document.querySelectorAll('.dot');
const testimonials = document.querySelectorAll('.testimonial-item');
let currentTestimonial = 0;

function showTestimonial(index) {
    testimonials.forEach(item => item.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    testimonials[index].classList.add('active');
    dots[index].classList.add('active');
    currentTestimonial = index;
}

dots.forEach(dot => {
    dot.addEventListener('click', function() {
        const index = parseInt(this.getAttribute('data-index'));
        showTestimonial(index);
    });
});

// Cambiar testimonial automáticamente
setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}, 5000);

// Smooth scroll para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Animación del formulario de
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name && email && message) {
        alert('Mensaje enviado correctamente');
    } else {
        alert('Por favor, completa todos los campos');
    }
});

// Añadir animación al botón de cotización
document.getElementById('quoteButton').addEventListener('click', function() {
    this.classList.add('animated');
});

// Animación de la galería
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelectorAll('.gallery-item').forEach(item => item.classList.remove('active'));
        this.classList.add('active');
    });
});

// Animación del footer
document.getElementById('footer').addEventListener('mouseover', function() {
    document.getElementById('footer').classList.add('animated');
});

document.getElementById('footer').addEventListener('mouseout', function() {
    document.getElementById('footer').classList.remove('animated');
});

// Botón para volver a la página
document.getElementById('backToPage').addEventListener('click', function() {
    document.getElementById('menu').classList.remove('active');
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
