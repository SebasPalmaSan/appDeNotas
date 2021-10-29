const escribir = require("./escribir")
const borrar = (identificador,lista,file) => {

const elements = lista.filter(e => e.identificador != identificador)
   escribir(file, elements)
}

return elements

module.exports = borrar;