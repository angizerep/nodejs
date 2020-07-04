function login () {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve();
        },1500);
    });
}

function datosUsuario() {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve();
        },1500);
    });
}

login().then( () => {
    console.log('Usuario autenticado')
    return datosUsuario();
}).then( () => {
    console.log('Datos de usuario ok')
}).catch( () => {
    console.log('Error')
})
