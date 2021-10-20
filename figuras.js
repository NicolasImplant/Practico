//Código del cuadrado

console.group("Cuadrados");

//const ladocuadrado = 5;
//console.log(`Los lados del cuadrado miden ${ladocuadrado} cm` );

function perimetroCuadrado(lado){  
    return lado * 4;
}
//console.log(`El perimetro del cuadrado es: ${perimetroCuadrado(ladocuadrado)} cm`);

//const areaCuadrado = ladocuadrado * ladocuadrado;

function areaCuadrado(lado){
    return lado*lado;
}
//console.log(`El area del cuadrado es: ${areaCuadrado} cm^2`);
console.groupEnd();

// Código del triangulo
console.group("Triangulos");
//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;
//const alturaTriangulo = 5.5;

function perimetroTriangulo(lado1,lado2,base){
    return lado1+lado2+base;
} 
function areaTriangulo(base,altura){
    return (altura*base)/2;
}

//console.log(`Los lados del triangulo miden: ${ladoTriangulo1} cm y ${ladoTriangulo2} cm,
//su base es de: ${baseTriangulo} y su altura es de: ${alturaTriangulo}`);
//console.log(`El perimetro del triangulo es: ${perimetroTriangulo} cm`)
//console.log(`El area del triangulo es: ${areaTriangulo} cm^2`)
console.groupEnd();


//Código Circulo
console.group("Circulos");

const radioCirculo = 4;
//const Pi = Math.PI;

function diametroCirculo(radio){
    return 2*radio;
}
//const diametroCirculo = 2*radioCirculo;
 
 function perimetroCirculo(radio){     
     return Math.PI * diametroCirculo(radio);
 }
//const perimetroCirculo = Pi*diametroCirculo;

function areaCirculo(radio){
    return Math.PI * (radio*radio);
}
//const areaCirculo = Pi*(radioCirculo*radioCirculo);

//console.log(`El radio del circulo es ${radioCirculo} cm y su diametro es de: ${diametroCirculo} cm`);
//console.log(`El perimetro del circulo es: ${perimetroCirculo} cm`);
//console.log(`El area del circulo es: ${areaCirculo} cm^2`);
console.groupEnd();

//Aqui interactuamos con HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);

}

function calcularPerimetroTriangulo(){
    const lado1 = document.getElementById("lado1");
    const lado1 = lado1.value;
    const lado2 = document.getElementById("lado2");
    const lado2 = lado2.value;
    const base = document.getElementById("Base");
    const base  = base.value;
    const perimetro = perimetroTriangulo(lado1,lado2,base);
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const base = document.getElementById("Base");
    const base  = base.value;
    const altura = document.getElementById("Altura");
    const altura = altura.value;
    const area = areaTriangulo(base,altura);
    alert(area);
}