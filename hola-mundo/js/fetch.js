'use strict';

// Fetch y peticiones a servicios / apis rest
var divUsuarios = document.querySelector('#usuarios');
var divProfesor = document.querySelector('#profesor');
var divJanet = document.querySelector('#janet');

getUsuarios()
    .then(data => data.json())
    .then(users => {
        listadoUsuarios(users.data);
        return getInfo();
    })
    .then(data => {
        divProfesor.innerHTML = data;
        return getJanet();
    })
    .then(data => data.json())
    .then(janet => {
        mostrarJanet(janet.data);
    })
    .catch(() => {
        alert('Error en las peticiones');
    });

function getUsuarios() {
    return fetch('https://reqres.in/api/users');
}

function getJanet() {
    return fetch('https://reqres.in/api/users/2');
}

function getInfo() {
    var profesor = {
        nombre: 'Aldo',
        apellido: 'Maradiaga',
        web: 'https://aldomaradiaga.com'
    };

    return new Promise((resolve, reject) => {
        var profesor_string = '';

        setTimeout(() => {
            profesor_string = JSON.stringify(profesor);

            if (typeof profesor_string != 'string' || profesor_string == '') return reject('Error');
            return resolve(profesor_string);
        }, 3000);
    });
}

function listadoUsuarios(usuarios) {
    usuarios.map((user, i) => {
        let nombre = document.createElement('h3');
        nombre.innerHTML = i + '. ' + user.first_name + ' ' + user.last_name;

        divUsuarios.appendChild(nombre);
        document.querySelector('.loading').style.display = 'none';
    });
}

function mostrarJanet(user) {
    let nombre = document.createElement('h4');
    let avatar = document.createElement('img');

    nombre.innerHTML = user.first_name + ' ' + user.last_name;
    avatar.src = user.avatar;
    avatar.width = '100';

    divJanet.appendChild(nombre);
    divJanet.appendChild(avatar);

    document.querySelector('#janet .loading').style.display = 'none';
}