function numeroAleatorio(){
    return new Promise ( ( resolve, reject ) => {
        setTimeout( () => {
            resolve ( Math.floor( Math.random() * 100) );
        }, 2000);
    })
}

async function resultado(){
    console.log('Resultado invocado')
    const aleatorio = await numeroAleatorio();
    console.log('Resultado ',aleatorio);
}

resultado();