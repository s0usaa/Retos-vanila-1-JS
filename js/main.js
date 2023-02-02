//Reto 1 Vanilla

// let num1 = parseInt(prompt("Indica numero 1"))
// let num2 = parseInt(prompt("Indica numero 2"))

// if(num1 === num2){
//     console.log("los dos numeros son iguales")
// }else if (num1 > num2){
//     console.log("el primer numero es mayor")
// }else {
//     console.log("El segundo es mayor")
// }

//Reto 2 y 3 de Vanilla

// let nombre = prompt("Introduce tu nombre");

// console.log("Como estas ", nombre, "?");

//Reto 4 de Vanilla

// let radio = parseFloat(prompt("Introduce el radio"));

// const PI = 3.1416;

// let area = PI * (radio ** 2);



// console.log("El area del circulo es ", area);

// Reto 5

// let num1 = parseInt(prompt("Introduce un numero"));

// if (num1 %2 === 0){
//     console.log("El numero es divisible entre 2");
// }else{
//     console.log("El numero no es divisible entre 2");
// }

// Reto 6

// let precio = parseFloat(prompt("Dime el precio sin iva de un producto"));

// const iva = 0.21;

// let suma = precio + (precio * iva);

// console.log(suma);


//Reto 7

// let contador = 0;

// while(contador < 100){

//     contador++;

//     console.log(contador);
// }


//Reto 8


// for (i = 1; i <= 100; i++){

//     console.log(i);

// }

// Reto 9

// for (i = 1; i <=100; i++){

//     if(i % 2 === 0){
//         console.log(i, " son divisibles entre 2");
//     }else if(i % 3 === 0){
//         console.log(i, " son divisibles entre 3")
//     }
// }


//Reto 10

// let ventas = 0;
// let suma = parseInt(prompt("Cuantos articulos quieres sumar"));

// for (let i = 0; i < suma; i++){

//     let articulo = parseInt(prompt("Introduce el precio del articulo"));
//     ventas += articulo;
// }

// console.log(ventas);

//Reto 11

// let diaSemana = prompt("Dime un dia de la semana");

// switch (diaSemana) {
//     case "lunes":
//     case "martes":
//     case "miercoles":
//     case "jueves":
//     case "viernes":
//         console.log("Es dia laborable");
//         break;
//     case "sabado":
//     case "domingo":
//         console.log("No es dia laborable");
//         break;
//     default:
//         console.log("Eso no es un dia");
// }

// Reto 12

// let contraseña = "javascript";

// for (i = 0; i < 3; i++){
//     let intentos = prompt("Introduce la contraseña");
//     if(contraseña === intentos){
//         console.log("Enhorabuena");
//         break;
//     }else{
//         console.log("Vuelve a intentarlo");
//     }
// }


// Reto 13

// let num1 = parseInt(prompt("Numero 1"));
// let num2 = parseInt(prompt("Numero 2"));
// let signo = prompt("introduce el signo aritmetico").toLowerCase();

// switch(signo){
//     case "suma":
//     case "+":
//         console.log(num1+num2);
//     break;
//     case "resta":
//     case "-":
//         console.log(num1-num2);
//     break;
//     case "multiplicacion":
//     case "*":
//         console.log(num1*num2);
//     break;
//     case "dividir":
//     case "/":
//         console.log(parseFloat(num1 / num2));
//     break;
//     case "exponente":
//     case "^":
//         console.log(num1**num2);
//     break;
//     case "modulo":
//     case "%":
//         console.log(num1%num2);
//     break;
//     default:
//         console.log("que me cuentas pavo")
// }
