//Тернарный оператор - конструкция с тернарным операторо это выражение, а выражение возвращает всегда значение!!

const value = 11;

value                                   //выражение - инструкция
    ? console.log('Условие истинно')    // будет undefined, т.к выражение возвращает значение, console.log всегда возвращает undefined
    : console.log('Условие ложно')