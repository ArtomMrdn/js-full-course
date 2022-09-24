/** ЗАДАЧА 30 - Колбэк функция
 *
 * 1. Что будет выведено в консоль?
 * Постарайтесь ответить без запуска кода.
 *
 * 2. Нужно ли как-то исправить этот код?
 */

setTimeout(function myFn() {
  console.log("Привет из функции myFn");
}, 2000);

myFn(); // результатом будет Ошибка т.к мы обращаемся к колбек функции myFn, потому что ее нет в глобальной области видимости, она является параметром setTimeout

setTimeout(function myFn() {      //так как колбек функция вызывается автоматически, ей не нужно присваивать имя, т.е нам нужно просто убрать имя
  console.log("Привет из функции myFn");
}, 2000);
