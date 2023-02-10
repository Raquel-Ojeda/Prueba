/* const saludar =() => {
    return new Promise((Res, rej)=>{
        setTimeout(()=>{
            const saludarAlan= "Hola Alan";
            return saludarAlan;
        }, 2000)
    })
}

const saludarAwait = () => {
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            const info= "LA SALUDAMOS al async await";
            res(info);
        }, 2000)
    })
}
const saludoConAsync = async () => {
    const pepito  = await saludarAwait();
    console.log (pepito, "VENGO DE LA FX CON ASYNC AWAIT ")

}
saludoConAsync();

*/

const botonAPI = document.getElementById("botonAPI");

const contenedorProductos = document.getElementById("contenedorProductos");

botonAPI.addEventListener("click", ()=>{
    llamarAPI();
})

const llamarAPI = () => { 
    fetch("productos.json")
    .then(informacion => informacion.json())
    .then(productos => productos.results.forEach (producto => {
        contenedorPersonajes.innerHTML +=
        `
            <div>
                <h2>${producto.name}</h2>
                <img src="${producto.image}" alt ="${producto.name}">
                <p> PRECIO: $ ${producto.precio}</p>
                <p> Descripción: $ ${producto.descripcion}</p>
                <button id="jsonAgregar${producto.id}">AGREGAR AL CARRITO <button>

            </div>
        `

    }))
}//no se por qué no sale me quiero suuicidar jaja
