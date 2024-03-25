

document.addEventListener("DOMContentLoaded", function() {
    
    const avion = document.getElementById('avion');

   
    const velocidad = 2; 

    
    let posicion = 0;

    
    let direccion = 1;

    
    function moverAvion() {
        
        posicion += velocidad * direccion;

        
        if (posicion >= window.innerWidth - avion.width) {
            
            posicion = 0;
        }

        
        avion.style.left = posicion + 'px';
    }

    
    setInterval(moverAvion, 10); 
});


