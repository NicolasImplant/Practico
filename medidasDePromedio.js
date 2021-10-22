// Media Geometrica
function mediaGeometrica(lista){
    if(lista.length > 0){
        var product = lista.reduce(function(acumulado,elemento){
            return acumulado*elemento})
        return product**(1/lista.length)
        
    }else{
        console.log("La lista no puede estar vacía")
    }
}


//Media Armonica
function mediaArmonica(lista){
    if(lista.length > 0){
        var suma = lista.reduce(function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + (1/nuevoElemento);
        })
        return lista.length/suma
    }else{
        console.log("La lista no puede estar vacía")
    }
}
