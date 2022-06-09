import { botonComprar } from "./botonComprar.js"


export let arrayProductosFetch = []
export let arrayCelularesFetch = []
export let arrayCamarasFetch = []

function fetchProductos(desde,hasta){
    fetch("/codigoJs/productos.json")
    .then(response => response.json())
    .then(data => {
        data.forEach((producto)=> {
            let {id,modelo, marca, precio, stock,foto,tipo,ventas} = producto
            producto.id= id;
            producto.modelo = modelo;
            producto.marca = marca.toUpperCase();
            producto.precio = new Intl.NumberFormat().format(precio);
            producto.stock = stock;
            producto.foto = foto;
            producto.tipo = tipo.toUpperCase();
            producto.ventas = ventas;
            arrayProductosFetch.push(producto)
               
        })
    })
    .then(()=> 
        arrayProductosFetch.sort((a,b) =>{
            return (b.ventas - a.ventas)
        }).forEach((producto)=>{
            cartasProductos.innerHTML+=`
            <div id="${producto.tipo}${producto.id}" class="card mb-3 producto">
                <img src="${producto.foto}" class="card-img-top imagen" alt=${producto.tipo}>
                <div class="card-body descripcion">
                    <h5 class="card-title">$${producto.precio}</h5>
                    <p class="card-text">${producto.modelo}</p>
                    <button id="comprar${producto.id}" type="button" class="btn btn-info">Comprar</button>
                </div>
            </div>
            ` 
        })
    )
    //.then(()=>botonComprar(arrayProductosFetch))
}



function fetchCelulares(desde,hasta){
    fetch("/codigoJs/productos.json")
    .then(response => response.json())
    .then(data => {
        data.forEach((producto)=> {
            let {id,modelo, marca, precio, stock,foto,tipo,ventas} = producto
            producto.id= id;
            producto.modelo = modelo;
            producto.marca = marca.toUpperCase();
            producto.precio = new Intl.NumberFormat().format(precio);
            producto.stock = stock;
            producto.foto = foto;
            producto.tipo = tipo.toUpperCase();
            producto.ventas = ventas;
            if(producto.tipo=="CELULAR"){
                cartasProductos.innerHTML+=`
                <div id="${producto.tipo}${producto.id}" class="card mb-3 producto">
                    <img src="${producto.foto}" class="card-img-top imagen" alt=${producto.tipo}>
                    <div class="card-body descripcion">
                        <h5 class="card-title">$${producto.precio}</h5>
                        <p class="card-text">${producto.modelo}</p>
                        <button id="comprar${producto.id}" type="button" class="btn btn-info">Comprar</button>
                    </div>
                </div>
                `   
                arrayCelularesFetch.push(producto)
            }
            arrayProductosFetch.push(producto)
        })
    })
    .then(()=>botonComprar(arrayCelularesFetch))
}


function fetchCamaras(desde,hasta){
    fetch("/codigoJs/productos.json")
    .then(response => response.json())
    .then(data => {
        data.forEach((producto)=> {
            let {id,modelo, marca, precio, stock,foto,tipo,ventas} = producto
            producto.id= id;
            producto.modelo = modelo;
            producto.marca = marca.toUpperCase();
            producto.precio = new Intl.NumberFormat().format(precio);
            producto.stock = stock;
            producto.foto = foto;
            producto.tipo = tipo.toUpperCase();
            producto.ventas = ventas;
            if(producto.tipo=="CAMARA"){
                cartasProductos.innerHTML+=`
                <div id="${producto.tipo}${producto.id}" class="card mb-3 producto">
                    <img src="${producto.foto}" class="card-img-top imagen" alt=${producto.tipo}>
                    <div class="card-body descripcion">
                        <h5 class="card-title">$${producto.precio}</h5>
                        <p class="card-text">${producto.modelo}</p>
                        <button id="comprar${producto.id}" type="button" class="btn btn-info">Comprar</button>
                    </div>
                </div>
                `   
                arrayCamarasFetch.push(producto)
            }
            arrayProductosFetch.push(producto)
        })
    })
    .then(()=>botonComprar(arrayCamarasFetch))
}


export{fetchProductos, fetchCelulares,fetchCamaras}