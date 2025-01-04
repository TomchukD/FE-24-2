let fruits = ['apple', 'banana', 'cherry', 'banana', 'banana', 'cherry'];
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[5]);
// console.log(fruits.length);
// for (let i = 0; i <= fruits.length -1; i++) {
//     console.log(fruits[i]);
// }
const arr = [1, , , 3]
const array = new Array()
// console.log('start',arr)
// // push
// arr.push(4)
// // pop
// console.log('push',arr)
// const popArr = arr.pop()
// console.log(popArr)
// console.log('pop',arr)
//
// // unshift
// arr.unshift(0)
// console.log('unshift',arr)
// // shift
// const shiftArr = arr.shift()
// console.log(shiftArr)
// console.log('shift',arr)


// fruits.forEach((fruit, index) => {
//     fruit += index
// })
let imgArr = [
    {
        url: 'http://',
        isDefault: false,
        id: '0'
    }, {
        url: 'http://',
        isDefault: false,
        id: '1'
    }, {
        url: 'http://',
        isDefault: true,
        id: '2'
    },
]
// map
imgArr = imgArr.map((item, i) => {
    return {...item, isDefault: i === 1}
})
// console.log(imgArr)
// filter
const newImgArr = imgArr.filter((item, i) => item.isDefault)
// console.log(newImgArr)
// find
const findIelem = imgArr.find((item) => item.isDefault === false)
// console.log(findIelem)
// findIndex
const findIndexIelem = imgArr.findIndex((item) => item.isDefault === false)
// console.log(findIndexIelem)
// includes
// console.log(fruits.includes('apple'))
// indexOf
// console.log(fruits.indexOf('banana1'))

// const indexBanana = fruits.indexOf('banana1');
// fruits.splice(indexBanana, 1);
// console.log(fruits)
const newfruits = fruits.slice();
// console.log(newfruits)
imgArr.sort((a, b) => b.isDefault - a.isDefault);
// console.log(imgArr)

const arrN = ['c', 'b', 'a', 'd', 'f', 'e'];
arrN.sort((a, b) => {
    if (a < b) {
        return -1
    }
    if (a > b) {
        return 1
    }
    return 0;
})

// console.log(arrN)

arrN.reverse()
// console.log(arrN)

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
// const result = arr1.concat(arr2, arr2,arr2);
const result = [...arr1, ...arr2]
// console.log(result)

let str = result.join('-')

// console.log(str)


const sum = result.reduce((acuumulator, currentValue) => {
    return acuumulator
}, 2)
// console.log(sum)

const cities = [
    {
        name: 'Kyiv', country: 'Ukraine',
    },
    {
        name: 'Berlin', country: 'Germany',
    },
    {
        name: 'Tokio', country: 'Japane',
    }
]
//{Ukraine: Kyiv };

const newObj = cities.reduce((acc, value)=>{
    acc[value.country] = value.name;
    return acc;
},{})

// console.log(newObj)


const count = fruits.reduce((acc, value)=>{
   acc[value] = (acc[value] || 0) + 1;
   return acc
},{})

// console.log(count)

// console.log(Math.ceil(3.1))
// console.log(Math.floor(3.9))
// console.log(Math.round(-3.9))
// console.log(Math.trunc(3.8999999999999))
//
// console.log(Math.min(0,1,2,3))
// console.log(Math.max(...result))

// console.log(Math.sqrt(9))
// console.log(Math.cbrt(9))
// console.log(Math.pow(3,4))
// console.log(3**4)



let str1 = ' Hello      Dima      ';

// console.log(str1.toUpperCase())

// console.log(str1.indexOf('l'))

// console.log(str1.slice(0,3))

// console.log(str1.substring(0,3))

// console.log(str1.replace('Hello', 'World'))

// console.log(str1.split(' ').reverse().join(' '))
console.log(str1)

