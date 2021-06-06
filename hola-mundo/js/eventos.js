'use strict'

// Evento "LOAD"
window.addEventListener('load', () => {
    // Eventos del raton
    var boton = document.querySelector('#boton');

    function cambiarColor() {
        console.log('Me has dado click');

        var bg = boton.style.background;

        if (bg == 'green') {
            boton.style.background = 'red';
        } else {
            boton.style.background = 'green';
        }

        boton.style.padding = '10px';
        boton.style.border = '1px solid #ccc';

        return true;
    }

    // Evento "CLICK"
    boton.addEventListener('click', function () {
        cambiarColor();
    });

    // Evento "Mouse Over"
    boton.addEventListener('mouseover', function () {
        boton.style.background = "#ccc";
    });

    // Evento "Mouse Out"
    boton.addEventListener('mouseout', function () {
        boton.style.background = "yellow";
    });

    // Evento "FOCUS"
    var input = document.querySelector('#campo_nombre');
    input.addEventListener('focus', function () {
        console.log('[FOCUS] - Estas haciendo focus en el input');
    });

    // Evento "BLUR"
    input.addEventListener('blur', function () {
        console.log('[BLUR] - No estas haciendo focus en el input');
    });

    // Evento "KEYDOWN"
    input.addEventListener('keydown', function (event) {
        console.log('[KEYDOWN] - pulsando esta techa: ', String.fromCharCode(event.keyCode));
    });

    // Evento "KEYPRESS"
    input.addEventListener('keypress', function (event) {
        console.log('[KEYPRESS] - presionando esta techa: ', String.fromCharCode(event.keyCode));
    });

    // Evento "KEYUP"
    input.addEventListener('keyup', function (event) {
        console.log('[KEYUP] - techa presionada: ', String.fromCharCode(event.keyCode));
    });

    // TIMERS
    function intervalo() {
        var tiempo = setInterval(() => {
            console.log('setInterval ejecutado');

            var encabezado = document.querySelector('h1');
            if (encabezado.style.fontSize == '50px') {
                encabezado.style.fontSize = '20px';
            } else {
                encabezado.style.fontSize = '50px';
            }
        }, 1000);

        return tiempo;
    }

    var tiempo = intervalo();

    var stop = document.querySelector('#stop');
    stop.addEventListener('click', () => {
        alert('Has detenido el intervalo en bucle');
        clearInterval(tiempo);
    });

    var start = document.querySelector('#start');
    start.addEventListener('click', () => {
        alert('Has iniciado el intervalo en bucle');
        intervalo();
    });

}); // Final del evento "LOAD"