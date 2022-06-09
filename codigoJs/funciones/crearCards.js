

//      CREACIÓN DE CARDS   

export function crearCards (arrayCards,divPadre){
    divPadre.innerHTML = ""
    arrayCards.forEach(productoEnArray => {
        divPadre.innerHTML += `
        <div id="${productoEnArray.tipo}${productoEnArray.id}" class="card mb-3 producto">
            <img src="${productoEnArray.foto}" class="card-img-top imagen" alt=${productoEnArray.tipo}>
            <div class="card-body descripcion">
                <h5 class="card-title">$${productoEnArray.precio}</h5>
                <p class="card-text">${productoEnArray.modelo}</p>
                <button id="comprar${productoEnArray.id}" type="button" class="btn btn-info">Comprar</button>
            </div>
        </div>
        `   
    })
}