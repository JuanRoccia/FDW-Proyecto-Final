// Me aseguro de que se haya cargado todo el DOM. 
document.addEventListener("DOMContentLoaded", function() {
    // Activar la sección correspondiente del header
    // Obtengo la ruta de la página actual
    var path = window.location.pathname;
    // Extrae el nombre de la página de la ruta
    var page = path.split("/").pop();
    // Dependiendo de la página, agrega la clase 'active' al enlace correspondiente
    try {
        if (page == "index.html") {
            document.querySelector(".productos-link").classList.add("active");
        } else if (page == "sonidos.html") {
            document.querySelector(".sonidos-link").classList.add("active");
        } else if (page == "comunidad.html") {
            document.querySelector(".comunidad-link").classList.add("active");
        }
    }
    catch (error) {
        console.log(error);
    }

    // Función para agregar los listeners de hover a los productos adicionales
    function addHoverListeners() {
        // Obtengo todos los botones
        var buttons = document.querySelectorAll('.custom-button');
        
        // Itero sobre cada botón
        buttons.forEach(function(button) {
            // Obtengo el id del botón
            var buttonId = button.getAttribute('id');

            // Obtengo la imagen y el wrap correspondiente al botón
            var image = document.querySelector(`img[data-for=${buttonId}]`);
            var wrapImage = document.querySelector(`.wrap-image[data-for=${buttonId}]`);

            // Si no se encontró la imagen o el wrap, no se agrega el evento
            if (!image || !wrapImage) {
                return;
            }

            // Agrego el evento de hover al botón
            button.addEventListener('mouseover', function() {
                image.classList.add('hover');
                wrapImage.classList.add('hover');
            });

            // Agrego el evento de no-hover al botón
            button.addEventListener('mouseout', function() {
                image.classList.remove('hover');
                wrapImage.classList.remove('hover');
            });
        });
    }

    // Agrega la función al objeto window para que pueda ser llamada desde api.js
    window.addHoverListeners = addHoverListeners;

    // BOTON FIJO TO TOP 
    // Obtener el botón
    var mybutton = document.getElementById("myBtn");

    // Cuando el usuario se desplaza hacia abajo 20px desde la parte superior del documento, mostrar el botón
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }

    // Cuando el usuario hace clic en el botón, desplazarse hasta la parte superior del documento
    window.topFunction = function() {
        window.scrollTo({top: 0, behavior: 'smooth'});
    } 

    topFunction();
    
});
