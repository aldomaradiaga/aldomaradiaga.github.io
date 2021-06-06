'use strict';

try {
    var year = new Date().getUTCFullYear();
    alert(year);

} catch (error) {
    console.log(error);
    alert('Ha ocurrido un error');
}