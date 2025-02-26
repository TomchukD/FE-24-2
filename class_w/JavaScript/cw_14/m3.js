import { api } from "./m1.js";

const getOne =  await api.get('Products').then(response => response);
console.log(getOne);


class Person{
    #name = 'Dima'
    #lastName= 'Tom'


    get fullName(){
        return this.#name + ' ' + this.#lastName
    }

    set fullName(fullName) {
        const pars = fullName.split(' ');
        this.#name = pars[0];
        this.#lastName = pars[1];
    }
}
const dima = new Person();
console.log(dima.fullName);
dima.fullName = 'Agent Smith';
console.log(dima.fullName);
console.log(dima);
