//var precioOriginal = 120;
//var descuento      = 0.18;
//var procentajePrecioConDescuento = (1-descuento);
//var precioConDescuento = (precioOriginal*procentajePrecioConDescuento);

function calcularPrecioConDescuento(precio,descuento){
    var descuento = descuento/100;
    var procentajePrecioConDescuento = (1-descuento);
    var precioConDescuento = (precio*procentajePrecioConDescuento);
    return precioConDescuento

}

function onclickButtonPriceDiscount(){
    var inputPrice = parseFloat(document.getElementById("InputPrice").value);
    var inputDiscount = parseFloat(document.getElementById("InputDiscount").value);
    var precioReal = calcularPrecioConDescuento(inputPrice,inputDiscount);
    var resultP = document.getElementById("ResultPrice")
    resultP.innerText = "El precio con decuento son: $" + precioReal;
}

var cupones = [
    {tipo:"Bono_De_Regalo", decuento: 0.15},
    {tipo:"Cliente_Frecuente", decuento: 0.30},
    {tipo: "Cliente_Premiun", decuento: 0.40},
    {tipo: "ninguno", decuento: 0}
]



//console.log({
//    precioOriginal,
//    descuento,
//    procentajePrecioConDescuento,
//    precioConDescuento,
//});