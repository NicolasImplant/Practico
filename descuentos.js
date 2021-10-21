function calcularPrecioConDescuento(precio,descuento,cupon){
    var bono = cupon;
    var cupones = [
        {tipo:"Bono_De_Regalo", decuento: 0.15},
        {tipo:"Cliente_Frecuente", decuento: 0.30},
        {tipo: "Cliente_Premiun", decuento: 0.40},
        {tipo: "ninguno", decuento: 0}
    ]
    var descuentoCupon = cupones.find(function(cupon){
        return cupon.tipo === bono;
    });
    var descuento = descuento/100 + descuentoCupon.decuento;
    var procentajePrecioConDescuento = (1-descuento);
    var precioConDescuento = (precio*procentajePrecioConDescuento);
    return precioConDescuento
}

function onclickButtonPriceDiscount(){
    var inputPrice = parseFloat(document.getElementById("InputPrice").value);
    var inputDiscount = parseFloat(document.getElementById("InputDiscount").value);
    var cupon = document.getElementById("Bonus").value;
    var precioReal = calcularPrecioConDescuento(inputPrice,inputDiscount,cupon);

    var resultP = document.getElementById("ResultPrice")    
    resultP.innerText = "El precio con decuento son: $" + precioReal;
}