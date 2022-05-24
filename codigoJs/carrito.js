




function crearCarrito (arrayCards,divPadre){ //FALTA MEJORAR PRESENTACION
    divPadre.innerHTML = ""
    arrayCards.forEach(productoEnArray => {
        divPadre.innerHTML += `
        <div id="${productoEnArray.tipo}${productoEnArray.id}" class="card">
            <div class="row g-0">
                <div class="col-5 col-sm-4">
                    <img src="${productoEnArray.foto}" class="img-fluid w-100" alt=${productoEnArray.tipo}>
                </div>
                <div class="col-7 col-sm-8">
                    <div class="card-body">
                        <h5 class="card-title">$${productoEnArray.precio}</h5>
                        <p class="card-text">${productoEnArray.modelo}</p>
                    </div>
                </div>
            </div>
        </div>
        `   
    })
}

let canasta =document.getElementById("canasta")
let arrayCarritoParseado = JSON.parse(localStorage.getItem(`arrayCarrito`))

if(arrayCarritoParseado.length>=1){ //
    crearCarrito(arrayCarritoParseado,canasta)
}


