// codigo del Cuadrado
console.group("Cuadrado");
const ladoCuadrado=5;
console.log(`Los lados del cuadrado miden: ${ladoCuadrado}`);
const perimetroCuadrado=ladoCuadrado*4;
console.log(`El Perimetro del cuadrado mide: ${perimetroCuadrado}`);
const areaCuadrado=ladoCuadrado*ladoCuadrado;
console.log(`El Área del cuadrado mide: ${areaCuadrado}`);
console.groupEnd();

// codigo del Triangulo
console.group("Triangulo");
const lado1Triangulo=6;
const lado2Triangulo=6;
const baseTriangulo=4;
const alturaTringulo= 5.5;
console.log(`altura del Triangulo es: ${alturaTringulo}`);
console.log(`Los lados del triángulo miden: ${lado1Triangulo}, ${lado2Triangulo}, ${baseTriangulo}`);
const perimetroTriangulo=lado1Triangulo + lado2Triangulo + baseTriangulo;
console.log(`El Perimetro del triángulo mide: ${perimetroTriangulo}`);
const areaTriangulo=(baseTriangulo*alturaTringulo)/2;
console.log(`El Área del cuadrado mide: ${areaTriangulo}`);
console.groupEnd();

//Codigo del Circulo

console.group("Círculo");

//Radio
const radioCirculo=4;
//Diametro
const diametroCirculo=radioCirculo*2;
//Pi
const PI=Math.PI;
//Circunferencia
const perimetroCirculo=diametroCirculo*PI;

//Área
const areaCirculo=radioCirculo*radioCirculo*PI;

console.log(`El radio del Circulo es: ${radioCirculo}`);
console.log(`El Diámetro del Circulo es: ${diametroCirculo}`);
console.log(`El Perimetro del Circulo es: ${perimetroCirculo}`);
console.log(`El área del Circulo es: ${areaCirculo}`);
