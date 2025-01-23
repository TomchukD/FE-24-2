const local = localStorage;
const token = '1234-123123asd-123123as-dasd123';
localStorage.setItem('token', token);
localStorage.setItem('token1', token);
localStorage.setItem('token3', token);

const isToken = localStorage.getItem('token');
console.log(isToken);
// localStorage.removeItem('token');
// localStorage.clear()
const obj = {
    token,
    obj1: [{1: 1}]
}
localStorage.setItem('obj1', JSON.stringify(obj));
console.log(JSON.parse(localStorage.getItem('obj1')));
