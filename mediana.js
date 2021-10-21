function calcularPromedioLista(lista){    
        var sumaLista = lista.reduce(function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        })
        return sumaLista/lista.length;
    }

function mediana(lista){
    var mitadLista1 = parseInt(lista.length/2);
    var listaOrdenada = lista.sort(function(a,b){
        return a - b});
    if(lista.length % 2 === 0){
        var elemento1 = listaOrdenada[mitadLista1-1];
        var elemento2 = listaOrdenada[mitadLista1];
        return calcularPromedioLista([elemento1,elemento2]);        
    }else{
        return listaOrdenada[mitadLista1];
    }
}