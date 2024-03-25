
// Espera a que el documento esté completamente cargado antes de ejecutar el código JavaScript
document.addEventListener("DOMContentLoaded", function() {
    // Obtiene la referencia del avión
    const avion = document.getElementById('avion');

    // Configura la velocidad de movimiento del avión
    const velocidad = 2; // Ajusta la velocidad según sea necesario

    // Inicializa la posición del avión como la izquierda de la pantalla
    let posicion = 0;

    // Inicializa la dirección del movimiento del avión como hacia la derecha
    let direccion = 1;

    // Función para mover el avión de izquierda a derecha y viceversa
    function moverAvion() {
        // Calcula la nueva posición del avión
        posicion += velocidad * direccion;

        // Verifica si el avión ha llegado al límite derecho o izquierdo de la pantalla
        if (posicion >= window.innerWidth - avion.width) {
            // Reinicia la posición del avión al borde izquierdo de la pantalla
            posicion = 0;
        }

        // Establece la posición del avión
        avion.style.left = posicion + 'px';
    }

    // Inicia la animación del avión moviéndolo cada cierto intervalo de tiempo
    setInterval(moverAvion, 10); // Ajusta el intervalo según sea necesario (10 milisegundos en este caso)
});


