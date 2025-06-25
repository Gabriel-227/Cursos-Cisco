//Literales 
let year = 2025;
console.log(year);// -> 1990
console.log(1991);// -> 1991
console.log("Alice");// -> Alice

// Operador typeof
console.log(typeof year); // -> number

//Probemos el operador typeof usando un ejemplo simple:
console.log(typeof year); // -> number
console.log(typeof 1990); // -> number
   
let name = "Alice";
console.log(typeof name); // -> string
console.log(typeof "Bob"); // -> string
   
let typeOfYear = typeof year;
console.log(typeOfYear); // -> number
console.log(typeof typeOfYear); // -> string

//Booleano -llevan el prefijo "is" para indicar que se verifican valores verdaderos o falsos. 
let  isDataValid  =  true;
let  isStringTooLong  =  false;
let  isGameOver  =  false;
continueLoop  =  true;
   
console.log(false);  //  ->  false
console.log(typeof  false);  //  ->  boolean
console.log(isDataValid);  //  ->  true
console.log(typeof  isDataValid);  //  ->  boolean

//Numero Este es el tipo numérico principal en JavaScript que representa tanto números reales (p. ej., fracciones) como enteros
const  año  =  1991;
let  delayInSeconds  =  0.00016;
let  area  =  (16  *  3.14);
let  halfArea  =  area  /  2;
   
console.log(año);  //  ->  1991;
console.log(typeof  año);  //  ->  number;

let  a  =  10;  //  decimal  -  default  
let  b  =  0x10;  //  hexadecimal  
let  c  =  0o10;  //  octal  
let  d  =  0b10;  //  binary  
   
console.log(a);  //  ->  10  
console.log(b);  //  ->  16  
console.log(c);  //  ->  8  
console.log(d);  //  ->  2  
   
let  x  =  9e3;
let  y  =  123e-5;
console.log(x);  //  ->  9000
console.log(y);  //  ->  0.00123


let  e  =  1  /  0;
let  f  =  -Infinity;
   
console.log(e);  //  ->  Infinity
console.log(f);  //  ->  -Infinity
console.log(typeof  e);  //  ->  number
console.log(typeof  f);  //  ->  number
   
let  s  =  "it's  definitely  not  e  number";
let  n  =  s  *  10;
console.log(n);  //  ->  NaN
console.log(typeof  n);  //  ->  number

// BigInt
// BigInt es un tipo de dato que permite trabajar con números enteros de precisión arbitraria
let  big  =  1234567890000000000000n;
let  big2  =  1n;
   
console.log(big);  //  ->  1234567890000000000000n
console.log(typeof  big);  //  ->  bigint
   
console.log(big2);  //  ->  1n
console.log(7n  /  4n);  //  ->  1n

// Cadenas String
// Las cadenas son secuencias de caracteres que se utilizan para representar texto. En JavaScript
// se pueden crear utilizando comillas simples ('), comillas dobles (") o comillas invertidas (`) para las plantillas literales.
let  country  =  "Malawi";
let  continent  =  'Africa';
   
console.log(country);  //  ->  Malawi
console.log(typeof  country);  //  ->  string
console.log(continent);  //  ->  Africa
console.log(typeof  continent);  //  ->  string
let  greeting  =  `Hello,  ${country}  is  in  ${continent}`;
console.log(greeting);  //  ->  Hello,  Malawi  is  in

let  message1  =  "The  vessel  'Mars'  called  at  the  port.";
let  message2  =  'Cyclone  "Cilida"  to  pass  close  to  Mauritius.';
   
console.log(message1);  //  ->  The  vessel  'Mars'  called  at  the  port.
console.log(message2);  //  ->  Cyclone  "Cilida"  to  pass  close  to  Mauritius.
//Si desea colocar comillas simples o dobles dentro de la cadena, también puede usar el carácter de escape: la barra invertida
let  messag3  =  'The  vessel  \'Mars\'  called  at  the  port.';
let  message4  =  "Cyclone  \"Cilida\"  to  pass  close  to  Mauritius.";
   
console.log(message3);  //  ->  The  vessel  'Mars'  called  at  the  port.
console.log(message4);  //  ->  Cyclone  "Cilida"  to  pass  close  to  Mauritius.
   
let  path  =  "C:\\Windows";
console.log(path);  //  ->  C:\Windows
