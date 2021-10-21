function moda(lista){
    var listaCount = {};
    lista.map(function(elemento){
        if(listaCount[elemento]){
            listaCount[elemento] += 1;
        }else{
            listaCount[elemento] = 1;
        }
    });
    var listaArray = Object.entries(listaCount).sort(function(elementoA, elementoB){
        return elementoA[1] - elementoB[1];
    });
    return listaArray[listaArray.length - 1];
}