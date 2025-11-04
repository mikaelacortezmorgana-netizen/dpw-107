//1. objetos en javascript
const articulo ={
    producto: "Monitor",
    pulgadas: 27,
    existencias: true
}
//2. conversion a cadena de texto de json
const jsonParaEnviar = JSON.stringify(articulo)
console.log (jsonParaEnviar.producto)
// convertimos a objetivo json para poder usarlo
const objetoRecuperado = JSON.parse(jsonParaEnviar)
//Para acceder a algun tributo
console.log(objetoRecuperado.producto)
console.log(objetoRecuperado.pulgadas)
console.log(objetoRecuperado.existencias)