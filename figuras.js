// codigo del Cuadrado
console.group("Cuadrado");

function perimetroCuadrado(lado){
    return lado*4;
}
function areaCuadrado(lado){
    return lado*lado;
}

console.groupEnd();

// codigo del Triangulo
console.group("Triangulo");

function perimetroTriangulo(lado1,lado2,base){
    return lado1 + lado2 + base;
}
function areaTriangulo(base,altura){
    return (base*altura)/2;
}

console.groupEnd();

//Codigo del Circulo

console.group("Círculo");
const PI=Math.PI;

function diametroCirculo(radio){
    return radio*2;
}
//Circunferencia
function perimetroCirculo(radio){
    let diametro=diametroCirculo(radio);
    return diametro*PI;
}

//Área
function areaCirculo(radio){
    return radio*radio*PI;
}

//Aqui interactuamos con el HTML
function calcularPerimetroCuadrado(){
    const input=document.getElementById("inputCuadrado");const value=input.value;
    const perimetro=perimetroCuadrado(value);
    alert(`El perimetro del cuadrado es: ${perimetro}m`);
}
function calcularAreaCuadrado(){
    const input=document.getElementById("inputCuadrado");const value=input.value;
    const area=areaCuadrado(value);
    alert(`El área del cuadrado es: ${area}m²`);
}