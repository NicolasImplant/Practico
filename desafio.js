function isoseles(l1,l2,l3){
    if(l1 === l2 && l1 != l3){
        return `Es un triangulo isoseles y su altura es de ${altura(l1,l3)}`;
    }else if(l1 === l3 && l1 != l2){
        return `Es un triangulo isoseles y su altura es de ${altura(l1,l2)}`;
    }else if(l2 === l3 && l2 != l1){
        return `Es un triangulo isoseles y su altura es de ${altura(l2,l1)}`;
    }else{
        return "No es un triangulo isoseles"
    }
}

function altura(a,b){
    return Math.sqrt(a**2 - (b**2)/4)
}

function verificar(){
    const lado1 = parseFloat(document.getElementById("lado1").value);
    const lado2 = parseFloat(document.getElementById("lado2").value);
    const lado3 = parseFloat(document.getElementById("lado3").value);
    alert(isoseles(lado1,lado2,lado3));    

}