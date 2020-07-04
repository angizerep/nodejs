const fs = require('fs');

console.time("tiempo de respuesta");

// for (let i=0; i<=10; i++){
//     fs.readFileSync('./archivos/archivo_creado.txt', 'utf8')
// }

for (let i = 0; i <= 10; i++) {
    const streamEscritura = fs.createReadStream('./archivos/archivo_creado.txt', 
        {
            encoding : 'utf8'
        });
}

console.timeEnd("tiempo de respuesta");
