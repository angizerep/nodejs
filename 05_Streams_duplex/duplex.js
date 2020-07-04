const fs = require('fs');
const { Duplex } = require('stream');

const streamLectura = fs.createReadStream( './archivos/base.txt' );
const streamEscritura = fs.createWriteStream( './archivos/destino.txt' );

const reporte = new Duplex( {
    write(data, encode, callback){
        console.log(data);
        callback();
    },
    read( size ){
    }
})

streamLectura.pipe(reporte).pipe(streamEscritura);

streamLectura.on('end', () => {
    console.log('Proceso terminado');
})