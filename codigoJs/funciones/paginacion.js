import { fetchCamaras, fetchCelulares, fetchProductos } from "./fetch.js";

export let offset = 1
let limit = 8


function anterior(pagina){
    previous.addEventListener("click", () => {
        if (offset != 1) {
            offset -= 9;
            removeChildNodes(cartasProductos);
            if(pageName.value=="index"){
                fetchProductos(offset, limit);     
            }else if(pageName.value=="celulares"){
                fetchCelulares(offset, limit);
            }else if(pageName.value=="camaras"){
                fetchCamaras(offset, limit);
            }
            }
        }
    );
}

function siguiente(pagina){
    next.addEventListener("click", () => {
        offset += 9;
        removeChildNodes(cartasProductos);
        if(pageName.value=="index"){
            fetchProductos(offset, limit);     
        }else if(pageName.value=="celulares"){
            fetchCelulares(offset, limit);
        }else if(pageName.value=="camaras"){
            fetchCamaras(offset, limit);
        }
        }
    );
}

export{anterior,siguiente}