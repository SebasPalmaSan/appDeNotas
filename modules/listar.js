const listar = lista => lista.forEach(item => {

    const {titulo, identificador, completa} = item; 
    console.log("___________");
    console.log('Titulo', titulo);
    console.log('Identificador', identificador);
    console.log('Completa', completa);
    console.log("____________");
});

module.exports = listar
