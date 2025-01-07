function RandomNumber(min, max, fn) {

    const numbers = Array.from({length: 5}, () => {
        return fn(Math.random() * (max - min) + min);
    });

    return numbers;
}

// console.log(RandomNumber(1,100, Math.floor));
// console.log(RandomNumber(50, 70, countPlusOne));


function countPlusOne(num) {
    return Math.floor(num + 1) + 'fn';
}


const obj = {name: 'Tom'};
// console.log(obj)
obj.$firstName_a = 'Dima';
obj['   asdas'] = 'Tomchuk';

// console.log(obj.name)
// console.log(obj['last name'])
// console.log(obj['   asdas'])

const category = {
    'All Categoty': 'All Categoty',
    'Matherboard': 'All Matherboard',
    'Video Card': null,
    'Other': 'Other components',
    keys: {
        key: undefined
    },
    meth: () => {
        return keys;
    }
}
const keys = Object.keys(category);
const values = Object.values(category);

// console.log(keys)
// console.log(values)

const keysArr = []
const valuesArr = []

for (const key in category) {

    keysArr.push(key)
    valuesArr.push(category[key])
}

const original = {
    name: 'Ivan',
    age: 30,
    address: {city: 'New York', street: 'New York111'},
    meth: function () {
        return this.name + ' / ' + this.age
    }
}

function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj
    }
    const clone = Array.isArray(obj) ? [] : {};

    for (const key in obj) {
        clone[key] = deepClone(obj[key])
    }
    return clone;
}

// console.log(original)
const newO = deepClone(original);
newO.name = 'Ivan!!!!';
// console.log(newO.meth())

// console.log(keysArr)
// console.log(valuesArr)
// console.log(Object.keys(category).length)
// delete category['Matherboard'];
// console.log(category)
// console.log(Object.keys(category).length)


const arrs = Object.entries(category);
// console.log(arrs)


const newObj = {}
Object.assign(newObj, category);
// newObj.newObj = 'Dima';
// console.log(category)
// console.log(newObj)
const jsonStr = JSON.stringify(newObj)
// console.log(jsonStr )

// Приймає массив чисел і повертає кількість позитивних чисел

function countPositiveNumber(arr) {
//     const count = [];
//     arr.forEach((num) => {
//         if (num > 0) {
//             count.push(num)
//         }
//     })
//     return count.length;
    const count = arr.filter(num => num > 0)
    return count.length
}

const count = countPositiveNumber([1, 2, -3, 5, -1, -100, -5])

// console.log(count)


// Поверає новий массив, що містить тільки парні числа. с поточного массиву

function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0)
}

const f = filterEvenNumbers([1, 2, 3, 4, 5, -2, -5, -88])
// console.log(f)



// Total: '$30',
// Items:
//    - Appe: '($10)',
//    - Banana: '($20)'
//

const fruts = [
    {
        name: 'Apple', price: 10
    },
    {
        name: 'Banana', price: 20
    }
]

function format(items) {
    const total = items.reduce((acc, val) => acc + val.price, 0);
    const itemList = items.map(item => `- ${item.name} ($${item.price})`).join('\n');
    return `Total: $${ total }, \n Items: \n${ itemList }`
}

console.log(format(fruts))


const userNum = prompt('Число від 1 до 100')

function guessNumm(userNum){
    const random  = Math.floor(Math.random() * 100) + 1;
    if(userNum <1 || userNum > 100 || isNaN(userNum)){
        console.log('need numbber 1 of 100')
    }
    if(userNum > random){
        console.log('num is big')
    }
    if(userNum < random){
        console.log('num is small')
    }
    if(userNum == random){
        console.log('WIN')
    }
    console.log(random)

}
guessNumm(userNum)
