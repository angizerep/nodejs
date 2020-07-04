const fs = require('fs');
const util = require('util');

// fs.writeFile('./archivos/archivo.txt', '123456', () => {
//     console.log('ok')
// } )

const writeFilePromesa = util.promisify(fs.writeFile);

writeFilePromesa('./archivos/archivo.txt', '123456')
    .then( () => {
        console.log('ok') 
    })
    .catch( () => {
        console.log('error')
    }) 
