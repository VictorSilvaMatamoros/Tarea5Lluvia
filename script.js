// con esto obtenemos las referencias de los elementos que usaremos en el js
let boton = document.getElementById("boton"); 
let gatosContainer = document.getElementById("gatos"); 
let h1 = document.getElementById("texto"); 

// este evento se activa cuando damos click en el boton 
boton.addEventListener('click', function() {
    
   //creamos el intervalo para la lluvia de elementos
   setInterval(function() {
        //ocultamos los botones añadiendole la class oculta
        boton.classList.add("oculta");
        h1.classList.add("oculta");
    

        // Creaamos la imagen con create Element y le damos la direccion y laclase con su estilo
        let imagen = document.createElement('img');
        imagen.src = 'img/misa.jpg'; 
        imagen.classList.add('imagen-estilo'); 

        let correccion = 45; // con esto intento que la lluvia de elementos no se salga demasiado del div donde va

        // con el random y el clientWidth que es el ancho interior del div menos la correccion calculamos las posiciones a cada eleemtno que llueve
        let x = (Math.random() * gatosContainer.clientWidth) - correccion;

        // aqui le damos la posicion pasandola a px y que empiece 50px por encima del div
        imagen.style.position = 'absolute';
        imagen.style.left = x + 'px';
        imagen.style.top = '-50px'; // Posición inicial arriba del contenedor

        // con appendchild metemos la imagen en el DOM
        gatosContainer.appendChild(imagen);
        
        // aqui creamos la animacion que empieza 50px por encima con 0 de opacidad
        //a la mitad se vera al 100% de la opacidad
        //al final vuelva a no tener opacidad asi parece que no se sale del div
        let animation = imagen.animate([
            { top: '-50px', opacity: 0 }, 
            { top: gatosContainer.clientHeight / 2 + 'px', opacity: 1 }, 
            { top: gatosContainer.clientHeight + 'px', opacity: 0 } 
        ], {
            duration: 6000, // Duración de la animación de caida 6 segundos
        });
        
        // Eliminaamos la imagen del DOM después de la animación asi  no se quedan de manera infinta
        animation.onfinish = function() {
            gatosContainer.removeChild(imagen);
        };
    }, 400); // Cada 400 milisegundos crea una nueva imagen
});
