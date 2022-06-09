

let canasta =document.getElementById("canasta")
export let arrayCarritoParseado = JSON.parse(localStorage.getItem(`arrayCarrito`))



export function crearCarrito(){ //FALTA MEJORAR PRESENTACION -- SE PODRIA MODIFICAR CANASTA SIN NECESIDAD DE PASARLO COMO ARGUMENTO, LO MISMO CON EL ARRAYPARSEADO *solucionado*
    canasta.innerHTML = ""
    canasta.classList.replace("canastaVacia","canastaConProductos")
    arrayCarritoParseado.forEach(productoEnArray => {
        
        canasta.innerHTML += `
        <div id="${productoEnArray.tipo}${productoEnArray.id}" class="card productoCarrito">
            <div class="row g-0">
                <div class="col-5 col-sm-4">
                    <img src="${productoEnArray.foto}" class="img-fluid w-100" alt=${productoEnArray.tipo}>
                </div>
                <div class="col-7 col-sm-8">
                    <div class="card-body productoCarritoBody">
                        <h5 class="card-title productoCarritoPrecio">$${productoEnArray.precio}</h5>
                        <p class="card-text productoCarritoModelo">${productoEnArray.modelo}</p>
                    </div>
                </div>
            </div>
        </div>
        `   
    })

}

