console.log('   Выражения в определениях\n');
let who = "dragon's" + ' mother\n';
console.log(who); 

let rublesPerDollar = 60;
let dollarsCount = 50 * 1.25; // 62.5
let rublesCount = dollarsCount * rublesPerDollar; // 3750

console.log('The price is ' + rublesCount + ' rubles\n');
// => The price is 3750 rubles 

console.log('   Переменные и конкатенация\n');
//склеивание 2 строки
let what = 'Kings' + 'road\n';
console.log(what); // => Kingsroad 
//конкатенирование строки и одной переменной
let first = 'Kings';
let what1 = first + 'road\n';
console.log(what1); // => Kingsroad  

//склеивание две переменные, в которых записаны строки:
let first2 = 'Kings';
let last2 = 'road';

let what2 = first2 + last2;
console.log(what2); // => Kingsroad