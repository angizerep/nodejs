const fs = require('fs');

var contenido = '1234567890';
var iteraciones = 15;

const streamEscritura = fs.createWriteStream('./archivos/mi_archivo3.txt')


for (var i = 0; i < iteraciones; i++) {
    contenido += contenido;

    //REFACTOR
    streamEscritura.write(contenido, res => {
        console.log('Stream escribiendo...')
    })
}

fs.writeFile('./archivos/mi_archivo2.txt', contenido, () => {
    console.log('Escritura finalizado')
})


// streamEscritura.write(contenido, res => {
//     console.log('Stream finalizado')
// })