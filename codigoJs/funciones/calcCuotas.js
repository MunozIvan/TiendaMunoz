

function calcCuotas (precio, cuotas){ //valores de ejemplo
    if(cuotas==1){
        return precio
    }
    else if(cuotas==3){
        precio= precio*1.1
        return precio
    }
    else if(cuotas==6){
        precio= precio*1.25
        return precio
    }
    else if(cuotas==12){
        precio= precio*1.5
        return precio
    }
}