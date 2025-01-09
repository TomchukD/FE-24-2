// const timerID = setTimeout(()=>{
//     console.log('hello')
// },4000);
// let count =0;

// const intervalID = setInterval(()=>{
//     count++;
//     if(count=== 3){
//         clearTimeout(timerID)
//     }
//     if(count === 5){
//         clearInterval(intervalID);
//     }
//         console.log('timer', count)
// }, 1000);

// const colors = ['Червоний', 'Жовтий', 'Зелений'];
// let countColor = 0;
//
// setInterval(()=>{
//     // console.clear();
//     console.log(`Світофор: ${colors[countColor]}`)
//     countColor = (countColor + 1) % colors.length
// },1000)
//
// let seconds = 5;
// const countdown = ()=>{
//     if(seconds > 0){
//         console.log('До вибуху залишилось ' + seconds-- + ' сек.');
//         setTimeout(countdown,1000);
//     }else{
//         console.log('💣 BOOM!!!')
//     }
// };
// countdown();


// const promiseMy = new Promise((resolve, reject) => {
//     const success= true;
//     if(!success){
//         resolve('success')
//     }else{
//         reject('error')
//     }
// })
// promiseMy.then((result)=>{
//     console.log(result)
// }).catch(error =>{
//     console.log(   error)
// }).finally(()=>{
//     console.log('finnally')
// })
//
//
const fetchData = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = {id: 1, name: 'Product'}
            resolve(data)
        }, 1000)
    })
}
const fetchUser = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = {id: 1, user: 'DIma'}
            reject(data)
        }, 3000)
    })
}
// fetchData().then(i=>{
//     console.log(i)
// }).catch(err=>{
//     console.log(err)
// })

// async / await

// const main  = async ()=>{
//     console.log('start');
//     try{
//         const data = await fetchData();
//         console.log(data);
//     }catch (e) {
//         throw new Error(e.message)
//     }
//     console.log('end')
// }

// const main  = async ()=>{
//     try{
//         const [data, user] = await Promise.all([fetchData(), fetchUser()]);
//         console.log(data);
//         console.log(user);
//     }catch (e) {
//         throw new Error(e.message)
//     }
// }
// main();
const dataF = async () => {
    try {

        const response = await fetch('')

    } catch (e) {
        console.log(e)
    }
}
//
// GET запит і не містить "тіла" / Body / has params
// POST запит і містить Body та Q.S.P.
// PUT - оновлення данних Body та Q.S.P.
// DELETE -  видаляння данних


const btn = document.getElementById('add_new');
const list = document.getElementById('joke-list');
const addNewJoke = (joke) => {
    const item = document.createElement('li');
    item.innerText = joke;
    list.append(item)
}

btn.addEventListener('click', () => {
    chack()
})

const chack = async () => {
    try {
        const resp = await fetch('https://api.chucknorris.io/jokes/rando1m')
        if (!resp.ok) {
            if (resp.status === 404) {
                hendelError('Ресурс не знайдено (404)')
            } else if (resp.status === 500) {
                hendelError('Внутрішня помилка серверу (500)')
            } else {
                hendelError('Помилка ' + resp.status)
            }
        }
        const joke = await resp.json();
        addNewJoke(joke.value)
    } catch (e) {
        console.log(e)
    }
}


function hendelError(message){
    showError(message)
    throw new Error(message)
}

function showError(error) {
    const span = document.querySelector('.error')
    span.innerHTML = error;
    span.classList.add('active');
    setTimeout(() => {
        span.classList.remove('active');
        span.innerHTML = ''
    }, 3000)
}

// МІКРО-задачі
// Promise.then Promise.catch Promis.finally

console.log('synk 1');
setTimeout(()=>{
    Promise.resolve().then(res => {
        console.log('setTimeout/Promise mirco-task 1')
    })
})


Promise.resolve().then(res => {
    setTimeout(()=>{
        console.log('Promise/setTimeout macro-task 1')

    })
})
