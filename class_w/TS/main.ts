function add(a, b) {
    return a * b;
}

console.log(add(2, 3));
console.log(add(2, 'asdasdasd'));

// type

// string
// number
// boolean
// Array []
// enum
// any
// viod
// null
// undefined
// tuple


interface User {
    name: string;
    email: string;
    phones: Phone[];
}

const u: User = {
    email: '',
    name: '',
    phones: [
        {
            code: '+(380)',
            mask: '99-99-999-99'
        }, {
            code: '+(380)',
            mask: '99-99-999-99'
        }
    ]
};

interface Phone {
    mask: string;
    code: string;
}


enum ErrorMY {
    FETCH_404 = 'error 404',
    FETCH_500 = 'error 500'
}
const error: ErrorMY = ErrorMY.FETCH_404;

function LO(error: ErrorMY){
    switch (error) {
        case ErrorMY.FETCH_404:
            console.log('error 404 !!!');
            break;
        case ErrorMY.FETCH_500:
            console.log('error 500 !!!');
            break;
    }
}
LO(error)


interface UserInterface{
    color: Color
}

const u2: UserInterface = {
    color: 'green'
}

type Color = "red" | "green" ;
// formtaData(date: string | Date) YYYY-MM-DD
function formtaData(date: string | Date):string{
    if(typeof date === 'string'){
        return date
    }
    return date.toISOString().split('T')[0];
}

console.log(formtaData(new Date('2025-03-03')));
console.log(formtaData('2025-03-03'))

class bankAccount{
    readonly url = 'url';
   public balance = 0;
public showInfo():void{

   }
}
const balance = new bankAccount().showInfo()
