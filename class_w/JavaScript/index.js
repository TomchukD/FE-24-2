"use strict";
var old = 'old';
let newLet = 'oldLet';
const newConts = 'oldConts';
console.log("%c before var", "color:green;", old)
console.log("%c before let", "color:green;", newLet)
{
    var old = 'newOld'
    console.log("%c in var", "color:red;", old)
   let newLet= 'newNEWWWWWLET'
    console.log("%c in let", "color:red;", newLet)
}
console.log("%c after var", "color:blueviolet;", old)
console.log("%c after let", "color:blueviolet;", newLet)

let num  = '2', num1= 10
console.log(num*num + num)

const str = 'hello don\'t';
const str2 = 'have';
const str3 = ` ${str}                      ${str2} `
const a = '123'

console.log(typeof a)


// let result  = prompt('Your name' )

// if(result){
//     alert(`YOr name is ${result}`)
// }else{
//     alert('You dont write name')
// }
// let confirm1 = confirm('Text mess...')
// console.log(confirm1)
//  унарний  - в операції бере участь один операнд
// + - ++ --
let ab = 1;
++ab; //префіксна
ab++;// постфіксна
console.log(99%2)
// бінаринй  - в операції беруть участь два операнди
// тернарний - комбінуе три операнди

// Оператори порівняння
// == рівнісь
console.log(1 == '1')
// === строга рівність
console.log(5 === '5')
// не рівність
console.log(5 != '5')
// строга не рівність
console.log(5 !== '5')

// більше / меньше
console.log(5 > 7)
console.log(5 < 7)


// більше / меньше  - або дорівнює
console.log(5 >= 7)
console.log(5 <= 7)

// Оператори Логічні

// І = і

console.log('')
console.log('')
console.log( false && true && true) // хочаб один помилковий - false

// abo

console.log(false|| false|| false || true ) // хочаб один дружній - true

console.log('')
console.log('')
// Присвоєння оператори

// = присвоєння
// += five+=6 === five = five + 6
let five=  5;
console.log(five+=6)
// += five+=6 === five = five + 6
let five2=  5;
console.log(five2*=6)

// += five+=6 === five = five - 6
let five3=  5;
console.log(five3-=6)

// += five+=6 === five = five / 6
let five4=  5;
console.log(five4/=6)

// += five+=6 === five = five % 6
let five5=  5;
console.log(five5%=6)


// ТЕрнарний оператор
// умова ? вираз1 : вираз 2

const exp = 5< 7 ? 'Так' : 'НІ'
console.log(exp)

// const userAge = prompt('How old are you?');
// // if(userAge >= 18){
// //     alert('enter');
// // }else{
// //     alert('go out')
// // }
// alert(userAge >= 18 ? 'enter' : 'go out')

let numF = prompt('Enter a number');
let numF2 = prompt('Enter a number 2');

if(numF > numF2){
    alert('First')
}else if(numF < numF2){
    alert('Second')
}else{
    alert('Third ===')
}
