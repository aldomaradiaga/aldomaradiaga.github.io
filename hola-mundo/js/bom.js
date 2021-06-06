'use strict'

// BOM - Browser Object Model
function getBom() {
    console.log(window.innerWidth);
    console.log(window.innerHeight);
    console.log(window.location);
}

function redirect(url) {
    window.location.href = url;
}

function abrirVentana(url) {
    window.open(url, "", "width=400px, height=300px");
}


