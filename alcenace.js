//Bloques de programa
"use strict";
let  counter;
console.log(counter);  //  ->  undefined
{
         counter  =  1;
         console.log(counter);  //  ->  1
}
counter  =  counter  +  1;
console.log(counter);  //  ->  2

//Los bloques de programa se pueden anidar, es decir, podemos crear un bloque dentro de otro
let  counterr;
console.log(counterr);  //  ->  undefined
{
         counterr  =  1;
         {
                 console.log(counterr);  //  ->  1
         }
}
counterr =  counterr  +  1;
console.log(counterr);  //  ->  2

// let y const si esta declarada fuera del bloque es global
// y si esta declarada dentro del bloqeu es local
let  height  =  180;
{
         let  weight  =  70;
         console.log(height);  //  ->  180
         console.log(weight);  //  ->  70	
}
console.log(height);  //  ->  180
console.log(weight);  //  ->  Uncaught  ReferenceError:  weight  is  not  defined


//Bloques anidados 
//Como puede ver, la variable de información declarada en el bloque más interno solo es visible dentro de él. 
//La variable de peso es visible tanto dentro del bloque donde se declaró como dentro del bloque anidado en él. Y la variable global de altura es visible en todas partes.
let  heightt  =  200;
{
         let  weight  =  100;
         {
                 let  info  =  "tall";
                 console.log(heightt);  //  ->  200
                 console.log(weight);  //  ->  100
                 console.log(info);  //  ->  tall
         }
         console.log(heightt);  //  ->  200
         console.log(weight);  //  ->  100
         console.log(info);  //  ->  Uncaught  ReferenceError:  info  is  not  defined
   }

   //var 
   var  height2  =  180;
{
         var  weight2  =  70;
         console.log(height2);  //  ->  180
         console.log(weight);  //  ->  70	
}
console.log(height2);  //  ->  180
console.log(weight);  //  ->  70


