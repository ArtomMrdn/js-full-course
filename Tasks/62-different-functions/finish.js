/** ЗАДАЧА 62 - Разница в объявлении функций
 *
 * 1. Объясните разницу между двумя вариантами объявления функций
 *
 * 2. Покажите эту разницу, добавив дополнительный код под функциями
 *
 * 3. Также вызовите обе функции
 */

// firstFunction(2,  3)   мы можем вызвать эту функцию перед обьявлением этой функции в коде

function firstFunction(a, b) {      //при обьявлении функции таким образом, мы можем переприсвоить значение  переменной firstFunction 
  return a + b          
}


// secondFunction(2, 3)  не можем вызывать функцию, до ее инициализации, то есть до обяьвление переменной ее нельзя вызвать
const secondFunction = function (a, b) {     //Нельзя переприсваивать значение  
  return a + b
}