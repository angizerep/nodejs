const fs = require('fs');
const archivo = fs.createWriteStream('./archivos/archivo_creado.txt');

for(let i = 0; i <= 1000000; i++) {
    archivo.write('Esto es una prueba de escritura')
}

archivo.end();