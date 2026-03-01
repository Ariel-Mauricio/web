// Obtener elementos del DOM
const myButton = document.getElementById('myButton');
const messageElement = document.getElementById('message');

// Array de mensajes sobre IA
const messages = [
    '¡La IA es el presente y el futuro!',
    'Las máquinas aprenden cada vez más rápido',
    'El aprendizaje automático es fundamental',
    '¿Sabías? La IA ya está en tu teléfono',
    'La inteligencia artificial nos rodea',
    '¡Bienvenido al mundo de la IA!'
];

// Contador de clics
let clickCount = 0;

// Escuchar evento de clic
myButton.addEventListener('click', function() {
    clickCount++;
    
    // Seleccionar un mensaje aleatorio
    const randomIndex = Math.floor(Math.random() * messages.length);
    const randomMessage = messages[randomIndex];
    
    // Mostrar mensaje
    messageElement.textContent = randomMessage + ` (Clics: ${clickCount})`;
    
    // Agregar clase de animación
    messageElement.style.animation = 'none';
    setTimeout(() => {
        messageElement.style.animation = 'fadeIn 0.5s ease-in-out';
    }, 10);
});

// Mensaje de bienvenida en la consola
console.log('¡Bienvenido a la página sobre Inteligencia Artificial!');
console.log('Esta es una página simple creada con HTML, CSS y JavaScript puro');

// Agregar estilos de animación dinámicamente
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
