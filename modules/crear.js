const escribir = require("./escribir")
const crear = (info,lista,file) => {

const elements = {
    titulo : info,
    identificador : lista.length > 0 ? lista[lista.length - 1].identificador + 1 : 1,
    completa : false 
}
   lista.push(elements)

   escribir(file, elements)
}

 return elements 

module.exports = crear;