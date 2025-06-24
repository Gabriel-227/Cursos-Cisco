//Una función es simplemente un fragmento de código independiente al que se le asigna un nombre, igual que a una variable. Si se desea usarla en algún lugar, simplemente se hace referencia a ella con ese nombre (decimos que llamamos a la función).
function testFunction() {
    console.log("Hello")
    console.log("World")
}

//Eche un vistazo al siguiente programa: ejemplo 
console.log("let's  begin:");  //  ->  let's  begin:
console.log("Hello");  //  ->  Hello
console.log("World");  //  ->  World
console.log("and  again:");  //  ->  and  again:
console.log("Hello");  //  ->  Hello
console.log("World");  //  ->  World
console.log("and  once  more:");  //  ->  and  once  more:
console.log("Hello");  //  ->  Hello
console.log("World");  //  ->  World

// La palabra clave var
var  globalGreeting  =  "Good  ";
   
function  testFunction()  {
         var  localGreeting  =  "Morning  ";    
         console.log("function:");
         console.log(globalGreeting);
         console.log(localGreeting);
}
   
testFunction();
   
console.log("main  program:");
console.log(globalGreeting);
console.log(localGreeting); // -> Uncaught ReferenceError: localGreeting is not defined

//El izamiento 
var  height  =  180;
console.log(height);    //  ->  180
console.log(weight);    //  ->  Uncaught  ReferenceError:  weight  is  not  defined
//Hagamos un pequeño cambio:
var  height  =  180;
console.log(height);    //  ->  180
console.log(weight);    //  ->  undefined
var  weight  =  70;
console.log(weight);    //  ->  70
