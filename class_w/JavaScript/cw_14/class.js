// const obj = {}
//
// class Animal {
//
//     constructor(name) {
//         this.name = name;
//     }
//     info(){
//         console.log(this.name)
//     }
// }
//
// const animal = new Animal('tarakan');
// animal.info();
// console.log(animal);
//
// class Dog extends Animal{
//     age = 'und'
//     constructor(name, age) {
//         super(name);
//         if(age){
//             this.age = age ;
//         }
//     }
//     info(){
//         console.log(this.name, this.age)
//     }
// }
// const pet = new Dog('pet');
// console.log(pet)
//
// pet.name = 'newPetName'
//
// console.log(pet)


class BankAccount{
    #balans = 0;

    constructor(owner) {
        this.owner = owner;
    }

    deposit(amount){
        if(amount > 0){

        this.#balans += amount;
        console.log(`You set ${amount}$`);
        }
    }

    getBalance(){
        return this.#balans;
    }
}
const owner1 = new BankAccount('Dima');
owner1.deposit(10);
console.log(owner1.getBalance());
// console.log(owner1.#balans);
