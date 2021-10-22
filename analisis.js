// -----------------------------HELPERS---------------------------------//

//Función para calcular el promedio

function calcularPromedioLista(lista){    
    var sumaLista = lista.reduce(function(valorAcumulado = 0, nuevoElemento){
        return valorAcumulado + nuevoElemento;
    })
    return sumaLista/lista.length;
}

//Función para determinar si un numero es par (Boolean)

function esPar(n){
    return (n % 2 === 0);}


// Función que calcula la mediana de un arreglo sin inportar el tamaño del mismo

function medianaSalarios(lista){
    var mitad = parseInt(lista.length / 2);
    if(esPar(lista.length)){
        var personMitad1 = lista[mitad - 1];
        var personMitad2 = lista[mitad];
        return calcularPromedioLista([personMitad1, personMitad2])
    }else{
        var personMitad = lista[mitad];
        return personMitad;
    }
}

//Variables

var salariosCol = colombia.map(function(person){
    return person.salary;
});

var salariosColSorted = salariosCol.sort(function(SalaryA, SalaryB){
    return SalaryA  - SalaryB;
});

var spliceStart = salariosColSorted.length * 0.9;
var spliceCount = salariosColSorted.length - spliceStart;

var salirosTop10Col = salariosColSorted.splice(spliceStart, spliceCount);

//Resultados

var medianaGeneralCol = medianaSalarios(salariosColSorted)
var medianaTop10Col   = medianaSalarios(salirosTop10Col)
console.log({
    medianaGeneralCol,
    medianaTop10Col,
});
